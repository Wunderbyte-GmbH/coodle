// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CoreConfig } from '@services/config';
import { CoreEvents } from '@singletons/events';
import { CoreSites } from '@services/sites';
import { CoreUtils } from '@services/utils/utils';
import { CoreTextUtils } from '@services/utils/text';
import { CoreConstants } from '@/core/constants';
import { CoreForms } from '@singletons/form';
import { CorePlatform } from '@services/platform';
import { AddonPrivateFilesHelper } from '@addons/privatefiles/services/privatefiles-helper';
import { CoreNetwork } from '@services/network';
import { CoreDomUtils } from '@services/utils/dom';
import { AddonPrivateFilesGetUserInfoWSResult } from '@addons/privatefiles/services/privatefiles';

/**
 * Component to display a "send message form".
 *
 * @description
 * This component will display a standalone send message form in order to have a better UX.
 *
 * Example usage:
 * <core-send-message-form (onSubmit)="sendMessage($event)" [placeholder]="'core.messages.newmessage' | translate"
 * [show-keyboard]="showKeyboard"></core-send-message-form>
 */
@Component({
    selector: 'core-send-message-form',
    templateUrl: 'core-send-message-form.html',
    styleUrls: ['send-message-form.scss'],
})
export class CoreSendMessageFormComponent implements OnInit {

    @Input() message = ''; // Input text.
    @Input() placeholder = ''; // Placeholder for the input area.
    @Input() showKeyboard = false; // If keyboard is shown or not.
    @Input() sendDisabled = false; // If send is disabled.
    @Output() onSubmit: EventEmitter<string>; // Send data when submitting the message form.
    @Output() onResize: EventEmitter<void>; // Emit when resizing the textarea.

    @ViewChild('messageForm') formElement!: ElementRef;

    protected sendOnEnter = false;
    filesInfo?: AddonPrivateFilesGetUserInfoWSResult;
    filesLoaded = false; // Whether the files are loaded.

    constructor() {

        this.onSubmit = new EventEmitter();
        this.onResize = new EventEmitter();

        CoreConfig.get(CoreConstants.SETTINGS_SEND_ON_ENTER, !CorePlatform.isMobile()).then((sendOnEnter) => {
            this.sendOnEnter = !!sendOnEnter;

            return;
        }).catch(() => {
            // Nothing to do.
        });

        CoreEvents.on(CoreEvents.SEND_ON_ENTER_CHANGED, (data) => {
            this.sendOnEnter = data.sendOnEnter;
        }, CoreSites.getCurrentSiteId());
    }

    ngOnInit(): void {
        this.showKeyboard = CoreUtils.isTrueOrOne(this.showKeyboard);
        AddonPrivateFilesHelper.uploadEvent.subscribe((event)=> {
            this.handleSendFileEvent(event);
        });
    }

    /**
     * Form submitted.
     *
     * @param $event Mouse event.
     */
    submitForm($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();

        let value = this.message.trim();

        if (!value) {
            // Silent error.
            return;
        }

        this.message = ''; // Reset the form.

        CoreForms.triggerFormSubmittedEvent(this.formElement, false, CoreSites.getCurrentSiteId());

        value = CoreTextUtils.replaceNewLines(value, '<br>');
        this.onSubmit.emit(value);
    }

    async uploadFile(): Promise<void>{
        console.log('upload');

        if (!CoreNetwork.isOnline()) {
            CoreDomUtils.showErrorModal('core.fileuploader.errormustbeonlinetoupload', true);

            return;
        }

        try {
            await AddonPrivateFilesHelper.uploadPrivateFile(this.filesInfo);

            // File uploaded, refresh the list.
            this.filesLoaded = false;

            // await CoreUtils.ignoreErrors(this.refreshFiles());

            this.filesLoaded = true;
        } catch (error) {
            CoreDomUtils.showErrorModalDefault(error, 'core.fileuploader.errorwhileuploading', true);
        }
    }

    handleSendFileEvent(event: any): void {
        const splitarray = event.fileurl.split('.');
        const format = splitarray[splitarray.length - 1];
        let message = '';
        console.log('upload-format', format, event);
        switch(format) {
            case 'jpeg':
            case 'gif':
            case 'jpg':
                message = '<img src="' + event.fileurl + '"/>';
                break;
            case 'mp4':
                message = '<video preload="metadata" width="320" height="240" controls><source src="' + event.fileurl + '" type="video/mp4"></video>';
                break;
            case 'MOV':
                message = '<video preload="metadata" width="320" height="240" controls><source src="' + event.fileurl + '" type="video/mov"></video>';
                break;
            default:
                message = '<a href="' + event.fileurl + '">Link</a>';
                // message = '<video width="320" height="240" controls><source src="' + event.fileurl + '" type="video/mp4"></video>'
                break;
        }
        this.onSubmit.emit(message);
    }

    /**
     * Textarea resized.
     */
    textareaResized(): void {
        this.onResize.emit();
    }

    /**
     * A11y key functionality that prevents keyDown events.
     *
     * @param e Event.
     */
    enterKeyDown(e: KeyboardEvent, other?: string): void {
        if (this.sendDisabled) {
            return;
        }

        if (this.sendOnEnter && !other) {
            // Enter clicked, send the message.
            e.preventDefault();
            e.stopPropagation();
        } else if (!this.sendOnEnter && !CorePlatform.isMobile() && other == 'control') {
            // Cmd+Enter or Ctrl+Enter, send message.
            e.preventDefault();
            e.stopPropagation();
        }
    }

    /**
     * Enter key clicked.
     *
     * @param e Event.
     * @param other The name of the other key that was clicked, undefined if no other key.
     */
    enterKeyUp(e: Event, other?: string): void {
        if (this.sendDisabled) {
            return;
        }

        if (this.sendOnEnter && !other) {
            // Enter clicked, send the message.
            this.submitForm(e);
        } else if (!this.sendOnEnter && !CorePlatform.isMobile() && other == 'control') {
            // Cmd+Enter or Ctrl+Enter, send message.
            this.submitForm(e);
        }
    }

}

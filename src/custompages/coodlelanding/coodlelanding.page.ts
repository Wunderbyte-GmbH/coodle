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
import { Component, OnInit } from '@angular/core';
import { CoreNavigator } from '@services/navigator';
import { Router } from '@angular/router';
import { CoreSites } from '@services/sites';
import { CoreUser, CoreUserProfile } from '@features/user/services/user';
import { CoreMainMenuDelegate, CoreMainMenuHandlerData } from '@features/mainmenu/services/mainmenu-delegate';
import { CoreMainMenu } from '@features/mainmenu/services/mainmenu';
import { CoreModalsService } from '@services/modals';
import { AlertController } from '@singletons';
import { CoreDomUtilsProvider } from '@services/utils/dom';

@Component({
    selector: 'app-coodlelanding',
    templateUrl: './coodlelanding.page.html',
    styleUrls: ['./coodlelanding.page.scss'],
})
export class CoodlelandingPage implements OnInit {


    protected allHandlers?: CoreMainMenuHandlerData[];
    subscription: any;
    customItems: any;
    isAdvisor = false;
    isInit = false;

    constructor(private router: Router) {

    }

    buttons = [
        //! TODOS
        { title: 'addon.local_coodle.viewtodos', icon: 'checkbox-outline',
        url: 'siteplugins/content/local_coodle/view_todos/0', color: 'rgb(238, 58, 47)' },
        //! WEGE
        { title: 'addon.local_coodle.viewaddress', icon: 'trail-sign-outline',
        url: 'siteplugins/content/local_coodle/view_address/0',
        color: 'rgb(163, 96, 239)' },
        //! Beratung
        { title: 'addon.local_coodle.dok3', icon: 'people-outline',
        url: 'siteplugins/content/local_coodle/view_files3/0', color: 'rgb(33, 181, 98)' },
        // { title: 'Nachrichten', icon: 'chatbox-ellipses-outline', url: '/main/messages/group-conversations', color: '#E9C46A' },
        //! Dokumente
        { title: 'addon.local_coodle.dok1', icon: 'document-text-outline',
        url: 'siteplugins/content/local_coodle/view_files1/0', color: 'rgb(94, 160, 242)' },
        //! Info
        { title: 'addon.local_coodle.viewinfo', icon: 'globe-outline',
        url: 'siteplugins/content/local_coodle/view_info/0', color: 'rgb(251, 135, 66)' },
        // { title: 'Kalender', icon: 'calendar-outline', url: '/main/more/calendar/index', color: '#e75151' },
    ];

    advisorButtons = [
         //! TODOS
         { title: 'addon.local_coodle.viewtodos', icon: 'checkbox-outline',
         url: 'siteplugins/content/local_coodle/view_todos/0', color: 'rgb(238, 58, 47)' },
         //! WEGE
         { title: 'addon.local_coodle.viewaddress', icon: 'trail-sign-outline',
         url: 'siteplugins/content/local_coodle/view_address/0',
         color: 'rgb(163, 96, 239)' },
         //! Beratung
         { title: 'addon.local_coodle.dok3', icon: 'people-outline',
         url: 'siteplugins/content/local_coodle/view_files3/0', color: 'rgb(33, 181, 98)' },
         // { title: 'Nachrichten', icon: 'chatbox-ellipses-outline', url: '/main/messages/group-conversations', color: '#E9C46A' },
         //! Dokumente
         { title: 'addon.local_coodle.dok1', icon: 'document-text-outline',
         url: 'siteplugins/content/local_coodle/view_files1/0', color: 'rgb(94, 160, 242)' },
         //! Info
         { title: 'addon.local_coodle.viewinfo', icon: 'globe-outline',
         url: 'siteplugins/content/local_coodle/view_info/0', color: 'rgb(251, 135, 66)' },
         // { title: 'Kalender', icon: 'calendar-outline', url: '/main/more/calendar/index', color: '#e75151' },
        //! User Select
        { title: 'addon.local_coodle.selectuser', icon: 'person-add-outline',
        url: 'siteplugins/content/local_coodle/select_user/0', color: 'rgb(102, 112, 255)' },
        // { title: 'Nachrichten', icon: 'chatbox-ellipses-outline', url: '/main/messages/group-conversations', color: '#E9C46A' },
    ]

async ngOnInit(){
        // Load the handlers.
        const site = CoreSites.getSite().then((site) => {
            console.warn('site', site);
        });

        // const user = CoreUser.setUserPreference('isCoodleAdmin', 'true');
        await CoreUser.setUserPreference('coodle_settings', 'wert 123').then((res) => {
            console.warn('setting saved', res);
        });

        const usersetting = CoreUser.getUserPreference('coodle_settings').then((setting) => {
            console.warn('setting', setting);
            if (setting) {
                const settings = JSON.parse(setting);
                if (settings.isadvisor === true) {
                    this.isAdvisor = true;
                }
            }
            this.isInit = true;
        });
        // const userPref = CoreUser.get

        this.subscription = CoreMainMenuDelegate.getHandlersObservable().subscribe((handlers) => {
            this.allHandlers = handlers;
            console.log('allHandlersCoodle', this.allHandlers);
            // this.initHandlers();
        });

        this.initHandlers();
    }

    openModal() {
        console.log('hallo welt')
        AlertController.create({
            header: 'test',
            inputs: [
                {
                  name: 'newTodo',
                  placeholder: 'Enter todo....',
                }
            ],
            buttons: [{
                text: "submit",
                handler: (data) => {
                    console.log('data', data);
                    this.testFunction2(data.newTodo);
                }
            }
            ]
        }).then(alert => alert.present())
    }

    testFunction2(todo) {
        console.log('my new todo', todo );
    }

    async initHandlers() {
        // CoreNavigator.navigateToSitePath('siteplugins/content/local_coodle/view_files1/0', { params });
        this.customItems = await CoreMainMenu.getCustomMenuItems();
        console.log('custom Items', this.customItems);
    }

    openHandler(handlerClicked: any): void {
        const selectedHandler = this.allHandlers?.filter(handler => handler.page === handlerClicked.url)[0];

        console.log('selectedHandler', selectedHandler, handlerClicked, this.allHandlers)

        if (selectedHandler) {
            const params = selectedHandler.pageParams;
            CoreNavigator.navigateToSitePath(selectedHandler.page, { params });
        }


    }
        // CoreNavigator.navigate(handler.url, { params: { title: handler.title.replace(/\s/g, ''), comingFromCoodle: true } });




}

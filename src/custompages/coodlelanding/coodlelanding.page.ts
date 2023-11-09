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
import { CoreUser } from '@features/user/services/user';
import { CoreMainMenuDelegate, CoreMainMenuHandlerData } from '@features/mainmenu/services/mainmenu-delegate';

import { WebserviceService } from '@/customservices/webservice.service';

import { CoreEvents } from '@singletons/events';
import { CoreUtils } from '@services/utils/utils';
import { AddonNotifications } from '@addons/notifications/services/notifications';
import { CoreMainMenu } from '@features/mainmenu/services/mainmenu';

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
    selectedUser = '';
    colorScheme = 'light';
    handlers: any;

    constructor(private router: Router, private ws: WebserviceService) {

        // const subscription = CoreMainMenuHomeDelegate.getHandlersObservable().subscribe((handlers) => {
        //     handlers && this.initHandlers(handlers);
        // });

        // CoreEvents.on(CoreEvents.SITE_UPDATED, async () => {
        //     // this.customItems = await CoreMainMenu.getCustomMenuItems();
        //     window.setTimeout(async () => {

        //         const sites = await CoreSites.getSitesInstances();
        //         await CoreUtils.ignoreErrors(Promise.all(sites.map((site) => site.invalidateWsCache())));

        //         CoreEvents.trigger(CoreEvents.LANGUAGE_CHANGED);
        //     }, 10000);
        // }, CoreSites.getCurrentSiteId());

    }

    buttons = [
        // ! DATES
        { title: 'addon.local_coodle.viewdates', icon: 'calendar-outline',
        url: 'siteplugins/content/local_coodle/view_dates/0', color: 'var(--coodle-dates)' },
        // ! TODOS
        { title: 'addon.local_coodle.viewtodos', icon: 'checkbox-outline',
        url: 'siteplugins/content/local_coodle/view_todos/0', color: 'var(--coodle-tasks)' },
        // ! Beratung
        { title: 'addon.local_coodle.dok3', icon: 'people-outline',
        url: 'siteplugins/content/local_coodle/view_files3/0', color: 'var(--coodle-consult' },
        // { title: 'Nachrichten', icon: 'chatbox-ellipses-outline', url: '/main/messages/group-conversations', color: '#E9C46A' },
        // ! Dokumente
        { title: 'addon.local_coodle.dok1', icon: 'document-text-outline',
        url: 'siteplugins/content/local_coodle/view_files1/0', color: 'var(--coodle-documents)' },
        // { title: 'Kalender', icon: 'calendar-outline', url: '/main/more/calendar/index', color: '#e75151' },
        // ! WEGE
        { title: 'addon.local_coodle.viewaddress', icon: 'trail-sign-outline',
        url: 'siteplugins/content/local_coodle/view_address/0',
        color: 'var(--coodle-route)' },
    ];

    advisorButtons = [
        // ! DATES
        { title: 'addon.local_coodle.viewdates', icon: 'calendar-outline',
        url: 'siteplugins/content/local_coodle/view_dates/0', color: 'var(--coodle-dates)' },
        // ! TODOS
        { title: 'addon.local_coodle.viewtodos', icon: 'checkbox-outline',
        url: 'siteplugins/content/local_coodle/view_todos/0', color: 'var(--coodle-tasks)' },
        // ! Beratung
        { title: 'addon.local_coodle.dok3', icon: 'people-outline',
        url: 'siteplugins/content/local_coodle/view_files3/0', color: 'var(--coodle-consult' },
        // { title: 'Nachrichten', icon: 'chatbox-ellipses-outline', url: '/main/messages/group-conversations', color: '#E9C46A' },
        // ! Dokumente
        { title: 'addon.local_coodle.dok1', icon: 'document-text-outline',
        url: 'siteplugins/content/local_coodle/view_files1/0', color: 'var(--coodle-documents)' },
        // { title: 'Kalender', icon: 'calendar-outline', url: '/main/more/calendar/index', color: '#e75151' },
        // ! WEGE
        { title: 'addon.local_coodle.viewaddress', icon: 'trail-sign-outline',
        url: 'siteplugins/content/local_coodle/view_address/0',
        color: 'var(--coodle-route)' },
        // ! User Select
        { title: 'addon.local_coodle.selectuser', icon: 'person-add-outline',
        url: 'siteplugins/content/local_coodle/select_user/0', color: 'var(--coodle-selectuser)' },
        // { title: 'Nachrichten', icon: 'chatbox-ellipses-outline', url: '/main/messages/group-conversations', color: '#E9C46A' },
    ];

    async ngOnInit(): Promise<void>{

        // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        // this.colorScheme = event.matches ? "dark" : "light";
        // console.log('colorscheme', this.colorScheme);
        // });

        // Load the handlers.

        CoreUser.getUserPreference('coodleuser_chosen').then((setting) => {
            if (setting) {
                const settings = JSON.parse(setting);
                if (settings.name) {
                    this.selectedUser = settings.name;
                    this.ws.setUser = settings;
                }
            }
            this.isInit = true;

            return;
        }).catch(error => {
            // eslint-disable-next-line no-console
            console.log('error', error);
        });

        CoreEvents.on('USERSELECTED', () => {
            CoreUser.getUserPreference('coodleuser_chosen').then((setting) => {
                if (setting) {
                    const settings = JSON.parse(setting);
                    if (settings.name) {
                        this.selectedUser = settings.name;
                        this.ws.setUser = settings;
                    }
                }

                return;
            }).catch(error => {
                // eslint-disable-next-line no-console
                console.log('error', error);
            });
        });

        CoreUser.getUserPreference('coodle_settings').then((setting) => {
            if (setting) {
                const settings = JSON.parse(setting);
                if (settings.isadvisor === true) {
                    this.isAdvisor = true;
                }
            }
            this.isInit = true;

            return;
        }).catch(error => {
            // eslint-disable-next-line no-console
            console.log('error', error);
        });
        // const userPref = CoreUser.get

        this.subscription = CoreMainMenuDelegate.getHandlersObservable().subscribe((handlers) => {
            this.allHandlers = handlers;
        });

        await CoreUtils.ignoreErrors(AddonNotifications.markAllNotificationsAsRead());

        // this.initHandlers();
    }

    async initHandlers(): Promise<any>{
        // CoreNavigator.navigateToSitePath('siteplugins/content/local_coodle/view_files1/0', { params });
        this.customItems = await CoreMainMenu.getCustomMenuItems();
        // this.handlers = this.allHandlers.filter((handler) => mainHandlers.indexOf(handler) == -1);
        // const handlersLoaded = CoreMainMenuDelegate.areHandlersLoaded();
    }

    ionViewWillEnter(): void {
        this.refresher();
    }

    async refresher(): Promise<any> {
        // return CoreMainMenuDelegate.getHandlersObservable().pipe(tap((handlers)=> {
        //     this.allHandlers = [];
        //     this.allHandlers = handlers;
        // }),first()).toPromise();

        // const sites = await CoreSites.getSitesInstances();
        // await CoreUtils.ignoreErrors(Promise.all(sites.map((site) => site.invalidateWsCache())));

        // CoreEvents.trigger(CoreEvents.LANGUAGE_CHANGED);
    }

    refreshData(event: any): void {
        this.refresher().finally(()=> {
            event.complete();
        });

    }

    openHandler(handlerClicked: any): void {
        const selectedHandler = this.allHandlers?.filter(handler => handler.page === handlerClicked.url)[0];

        if (selectedHandler) {
            const params = selectedHandler.pageParams;
            CoreNavigator.navigateToSitePath(selectedHandler.page, { params });
        };

    }
    // CoreNavigator.navigate(handler.url, { params: { title: handler.title.replace(/\s/g, ''), comingFromCoodle: true } });

}

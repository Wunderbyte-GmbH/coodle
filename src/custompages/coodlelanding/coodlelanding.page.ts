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
import { CoreMainMenuHandlerData } from '@features/mainmenu/services/mainmenu-delegate';

@Component({
    selector: 'app-coodlelanding',
    templateUrl: './coodlelanding.page.html',
    styleUrls: ['./coodlelanding.page.scss'],
})
export class CoodlelandingPage implements OnInit {

    constructor(private router: Router) { }

    buttons = [
        { title: 'Wegbeschreibung', icon: 'home-outline',
        url: '/main/home/siteplugins/homecontent/local_coodle/view_address',
        color: '#264653' },
        { title: 'Nachrichten', icon: 'chatbox-ellipses-outline', url: '/main/messages/group-conversations', color: '#E9C46A' },
        { title: 'Dokumente', icon: 'file-tray-full-outline',
        url: '/main/more/siteplugins/content/local_coodle/view_files1/0', color: '#2A9D8F' },
        { title: 'Bewerbungs\nunterlagen', icon: 'folder-outline',
         url: '/main/more/siteplugins/content/local_coodle/view_files2/0', color: '#4664ba' },
        { title: 'Beratungsinhalt', icon: 'document-outline',
        url: '/main/more/siteplugins/content/local_coodle/view_files3/0', color: '#898989' },
        { title: 'Kalender', icon: 'calendar-outline', url: '/main/more/calendar/index', color: '#e75151' },
    ];


    openHandler(handler): void {

            CoreNavigator.navigate(handler.url, {params: {title: handler.title.replace(/\s/g, ''), comingFromCoodle: true}});

    }

    ngOnInit() {}

}

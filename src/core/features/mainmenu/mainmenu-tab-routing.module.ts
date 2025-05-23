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

import { InjectionToken, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { Route, Routes } from '@angular/router';

import { ModuleRoutesConfig, resolveModuleRoutes } from '@/app/app-routing.module';

export const MAIN_MENU_TAB_ROUTES = new InjectionToken('MAIN_MENU_TAB_ROUTES');

/**
 *
 */
export function buildTabMainRoutes(injector: Injector, mainRoute: Route): Routes {
    const routes = resolveModuleRoutes(injector, MAIN_MENU_TAB_ROUTES);

    mainRoute.path = mainRoute.path || '';
    mainRoute.children = mainRoute.children || [];
    mainRoute.children = mainRoute.children.concat(routes.children);
    console.log('main route', mainRoute, routes);

    return [
        mainRoute,
        // {
        //     path: '',
        //     loadChildren: () => import('../../../custompages/coodlelanding/coodlelanding.module')
        //         .then(m => m.CoodlelandingPageModule),
        // },
        // {
        //     path: 'coodlelanding',
        //     loadChildren: () => import('../../../custompages/coodlelanding/coodlelanding.module')
        //         .then(m => m.CoodlelandingPageModule),
        // },
        ...routes.siblings,
    ];
}

@NgModule()
export class CoreMainMenuTabRoutingModule {

    /**
     * Use this function to declare routes that will be children of all main menu tabs root routes.
     *
     * @param routes Routes to be children of main menu tabs.
     * @returns Calculated module.
     */
    static forChild(routes: ModuleRoutesConfig): ModuleWithProviders<CoreMainMenuTabRoutingModule> {
        return {
            ngModule: CoreMainMenuTabRoutingModule,
            providers: [
                { provide: MAIN_MENU_TAB_ROUTES, multi: true, useValue: routes },
            ],
        };
    }

}

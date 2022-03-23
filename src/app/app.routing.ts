import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { AdminDashboardComponent } from './nuaxess/admin-dashboard/admin-dashboard.component';
import { AuthGuardOriginal } from './auth.guard';
import { DataResolver, EnrollResolver, MenuResolver, UserResolver } from './data.resolver';
import { CompanyListComponent } from './nuaxess/company-list/company-list.component';
import { CompanyDashboardComponent } from './nuaxess/company-dashboard/company-dashboard.component';
import { UserEnrollComponent } from './nuaxess/user-enroll/user-enroll.component';
import { ActivePlanDashboardComponent } from './nuaxess/active-plan-dashboard/active-plan-dashboard.component';
import { EmployeeDashboardComponent } from './nuaxess/employee-dashboard/employee-dashboard.component';
import { InvalidTokenComponent } from './nuaxess/invalid-token/invalid-token.component';
import { ForcedLogoutComponent } from './nuaxess/forced-logout/forced-logout.component';
import { NewSigninComponent } from './nuaxess/new-signin/new-signin.component';
import { MemberLookupComponent } from './nuaxess/member-lookup/member-lookup.component';
import { EmployeeLookupComponent } from './nuaxess/employee-lookup/employee-lookup.component';
import { CensusHistoryComponent } from './nuaxess/census-history/census-history.component';
import { PeoCompanyListComponent } from './nuaxess/peo-company-list/peo-company-list.component';
import { CurrentCensusComponent } from './nuaxess/current-census/current-census.component';
import { CurrentTerminationsComponent } from './nuaxess/current-terminations/current-terminations.component';
import { CurrentAdditionsComponent } from './nuaxess/current-additions/current-additions.component';
import { ActivePlansComponent } from './nuaxess/active-plans/active-plans.component';
import { CensusDashboardComponent } from './nuaxess/census-dashboard/census-dashboard.component';
import { UserSettingsComponent } from './nuaxess/user-settings/user-settings.component';
import { UserProfileComponent } from './nuaxess/user-profile/user-profile.component';
import { UserLogoutComponent } from './nuaxess/user-logout/user-logout.component';
import { SystemNoteListComponent } from './system-note-list/system-note-list.component';
import { AddSystemNoteComponent } from './add-system-note/add-system-note.component';
import { SystemNoteDashboardComponent } from './system-note-dashboard/system-note-dashboard.component';
import { InvoiceListComponent } from './nuaxess/invoice-list/invoice-list.component';
import { EditClientPlanComponent } from './nuaxess/edit-client-plan/edit-client-plan.component';


export const appRoutes: Route[] = [


    {path: '', pathMatch : 'full', redirectTo: 'sign-in'},
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'sign-in'},
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'enroll/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'e/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'e', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'forced-off/:id', component: ForcedLogoutComponent },
            {path: 'forced-off', component: ForcedLogoutComponent },
            {path: 'sign-in', component: NewSigninComponent },
            {path: 'error', component: InvalidTokenComponent },
            {path: 'enroll', component: UserEnrollComponent, resolve: { data: EnrollResolver }, }
        ]
    },
    {
        path: '',
        canActivate: [AuthGuardOriginal],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)},
            {path: 'sadmin', component: AdminDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-logout', component: UserLogoutComponent },
            {path: 'employee-lookup', component: EmployeeLookupComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-list/:id', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-list', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-dashboard/:id', component: CompanyDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'census-history/:id/:id2', component: CensusHistoryComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
             {path: 'employee-dashboard/:id', component: EmployeeDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'employee-dashboard/:id/:id2', component: EmployeeDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-dashboard/:id/:id2', component: CompanyDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
             {path: 'census-dashboard/:id/:id2', component: CensusDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'active-plan-dashboard/:id', component: ActivePlanDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'peo-company-list', component: PeoCompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },  
            {path: 'current-census', component: CurrentCensusComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-census/:id', component: CurrentCensusComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-terminations', component: CurrentTerminationsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-terminations/:id', component: CurrentTerminationsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-additions', component: CurrentAdditionsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'current-additions/:id', component: CurrentAdditionsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'active-plans', component: ActivePlansComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },    
            {path: 'system-note-list', component: SystemNoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },          
            {path: 'add-system-note', component: AddSystemNoteComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },          
            {path: 'system-note-dashboard', component: SystemNoteDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },          
            {path: 'system-note-dashboard/:id', component: SystemNoteDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },          
            {path: 'member-lookup', component: MemberLookupComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'enroll/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'edit-client-plan/:id/:id2', component: EditClientPlanComponent, resolve:{ menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-settings', component: UserSettingsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'invoice-list', component: InvoiceListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-profile', component: UserProfileComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'enroll', component: UserEnrollComponent, resolve: { data: EnrollResolver }, }
        ]
    },
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },
    {
        path       : '',
         component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'pages', children: [
                {path: 'error', children: [
                    {path: '404', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
                    {path: '500', loadChildren: () => import('app/modules/admin/pages/error/error-500/error-500.module').then(m => m.Error500Module)}
                ]},
            ]},

            // 
            {path: 'ui', children: [
                {path: 'forms', children: [
                    {path: 'fields', loadChildren: () => import('app/modules/admin/ui/forms/fields/fields.module').then(m => m.FormsFieldsModule)},
                ]},
            ]},
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];

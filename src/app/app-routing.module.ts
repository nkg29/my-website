import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './components/no-page-found.component';

// Thank you: https://www.positronx.io/angular-router-tutorial/

const routes: Routes = [
	{ path: '', redirectTo: '/me', pathMatch: 'full'},
	{ path: 'me', component: AppComponent },
	{ path: '**', component: NoPageFoundComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
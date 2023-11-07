import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { ComonComponentsModule } from 'src/app/components/comon-components.module';
import { PagesComponentsModule } from 'src/app/pages/pages-components.module';


const ROUTE: Routes = [
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  declarations: [
    InicioComponent
    
  ],
  imports: [
    CommonModule,
    ComonComponentsModule,
    PagesComponentsModule,
    RouterModule.forChild(ROUTE),
  ]
})
export class InicioModule { }
/*  FragmentPolyfillModule.forRoot({
      smooth: true
    }), */
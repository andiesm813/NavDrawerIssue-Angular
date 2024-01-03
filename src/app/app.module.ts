import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { IgxDatePickerModule, IgxInputGroupModule, IgxSimpleComboModule, IgxSelectModule, IgxNavigationDrawerModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ChildView1Component } from './child-view1/child-view1.component';
import { ChildView2Component } from './child-view2/child-view2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildViewComponent,
    ChildView1Component,
    ChildView2Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxDatePickerModule,
    IgxInputGroupModule,
    IgxSimpleComboModule,
    IgxSelectModule,
    FormsModule,
    IgxNavigationDrawerModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

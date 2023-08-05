import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MfeComponent } from './components/mfe/mfe.component';
import { RouterModule } from '@angular/router';
import { endsWith } from './router.utils';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    MfeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        matcher: endsWith('mfe1'),
        component: MfeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mfe-element', ce);
  }

}

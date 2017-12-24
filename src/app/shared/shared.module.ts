import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppInterceptor } from './service/app.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxCarouselModule } from 'ngx-carousel';
import { BsDropdownModule, TabsModule, ModalModule , CarouselModule} from 'ngx-bootstrap';

import {CarouselComponent} from './components/carousel.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports: [
     CommonModule, FormsModule, ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({ // @agm/core
      libraries: ['places'],
      apiKey: 'AIzaSyD0WGiIQPnML6MYa5JmQPt7kopUF4uMB7s',
    }),
    AgmDirectionModule,
    FlexLayoutModule,
    CarouselModule,
    NgxCarouselModule
  ],
  declarations: [
    CarouselComponent
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    BsDropdownModule,
    TabsModule,
    ModalModule,
    FlexLayoutModule,
    CarouselModule,
    CarouselComponent,
    NgxCarouselModule,
    AgmCoreModule,
    AgmDirectionModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: SharedModule,
          providers: [
              {
                  provide: HTTP_INTERCEPTORS,
                  useClass: AppInterceptor,
                  multi: true
              }
          ],
      };
  }
}

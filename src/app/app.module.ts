import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { PeopleComponent } from './views/people/people.component';
import { ImagesComponent } from './widgets/images/images.component';
import { ChannelComponent } from './widgets/channel/channel.component';
import { VideoComponent } from './widgets/video/video.component';
import { ActivityComponent } from './widgets/activity/activity.component';

/** Config perfect scroll */
const ps_config: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { SocialService } from 'src/app/services/social.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PeopleComponent,
    ImagesComponent,
    ChannelComponent,
    VideoComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PerfectScrollbarModule,
    SwiperModule
    // HttpModule
  ],
  providers: [SocialService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: ps_config
    },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

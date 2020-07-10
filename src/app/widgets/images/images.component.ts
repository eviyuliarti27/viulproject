import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  public data ;
  public selected: any;
  subs: Subscription;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    observer: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    spaceBetween: 6
  };
  
  constructor(private socialService: SocialService) { }

    ngOnInit() {
      this.getPeople();
    }

    getPeople() {
      this.subs = this.socialService.getPeopleService()
        .subscribe(
          res => {
            this.data = res;
            console.log('data', this.data);
            this.selected = this.data[0];
          },
          err => console.log(err)
        );
    }
  
    scrollDown(e) {
      console.log(event);
    }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  public data ;
  public selected: any;
  subs: Subscription;

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

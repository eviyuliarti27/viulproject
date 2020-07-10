import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public data ;
  public selected: any;
  subs: Subscription;

  constructor(private socialService: SocialService) { }

    ngOnInit() {
      this.getActivity();
    }

    getActivity() {
      this.subs = this.socialService.getActivityService()
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

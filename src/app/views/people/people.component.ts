import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
public data ;
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
        },
        err => console.log(err)
      );
  }

  scrollDown(e) {
    console.log(event);
  }
}

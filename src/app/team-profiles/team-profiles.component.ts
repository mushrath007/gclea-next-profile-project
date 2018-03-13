import { Component, OnInit ,NgModule} from '@angular/core';
import { TeamInfoMetadata } from '../model/team-metadate.model';

@Component({
  selector: 'app-team-profiles',
  templateUrl: './team-profiles.component.html',
  styleUrls: ['./team-profiles.component.css']
})
export class TeamProfilesComponent implements OnInit {

  teamInfoMetadata: any;

  showHide:boolean;

  constructor() {
    this.showHide = false;
  }

  showInfo(){
    this.showHide = !this.showHide;
  }

  hideInfo(){
    this.showHide = false;
  }

  ngOnInit() {
    this.teamInfoMetadata = TeamInfoMetadata;
  }


}



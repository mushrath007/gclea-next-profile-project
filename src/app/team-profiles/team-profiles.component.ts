import { Component, OnInit ,NgModule} from '@angular/core';
import { TeamInfoMetadata } from '../model/team-metadate.model';

@Component({
  selector: 'app-team-profiles',
  templateUrl: './team-profiles.component.html',
  styleUrls: ['./team-profiles.component.css']
})
export class TeamProfilesComponent implements OnInit {

  teamInfoMetadata: any;

  ngOnInit() {
    this.teamInfoMetadata = TeamInfoMetadata;}

  constructor() { }


}



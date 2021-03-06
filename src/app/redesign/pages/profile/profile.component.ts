import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/redesign.model';
import { RedesignService } from '../../services/redesign.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};

  constructor(private route: ActivatedRoute, private usersService: UsersService, private redesignService: RedesignService) { }

foods = [
  {
    food: 'apple'
  },
  {
    food: 'borsch'
  },
  {
    food: 'pampushka'
  }
]

  joke$ = this.redesignService.getJoke();

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    // this.usersService.getUser(id).subscribe....
    this.user = this.usersService.getUser(id);
  }

}

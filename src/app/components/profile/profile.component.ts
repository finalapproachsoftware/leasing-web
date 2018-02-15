import { Component, OnInit } from '@angular/core';
import { IProfile, Profile } from '../../model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: IProfile;
  profileForm: FormGroup; 
  firstNameInput: FormControl = new FormControl();
  lastNameInput: FormControl= new FormControl();

  constructor() { }

  ngOnInit() {
    this.profile = new Profile();

    this.profileForm = new FormGroup({
      firstName: this.firstNameInput,
      lastName: this.lastNameInput
    });
  }

  save() {
    console.log(this.profileForm);
    console.log('Saved: ' + JSON.stringify(this.profileForm.value))
  }
}

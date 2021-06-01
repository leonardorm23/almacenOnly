import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: any;

  constructor(private registerService: RegisterService, public forms: FormsModule, private router: Router) {
    // Instance new user model
    this.user = new User('', '', '', 0, '', '', '', true);
  }

  ngOnInit(): void {}
  register(form: NgForm){
    this.registerService.registerUser('').subscribe(
      (response) => {
        this.router.navigateByUrl('/home');
        if(response['error']){
          response['error'];
          alert("Error: "+response);
        }
        console.log("Register User Response: ", response)
      });
      console.log(form);
  }
}

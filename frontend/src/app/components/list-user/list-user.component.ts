import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { global } from '../../services/GLOBAL';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public  user: any;
 
  public url: any;

  constructor(private userService: UserService) {
    this.url = global.url;
   }

  ngOnInit(): void {
    this.userService.getUser('').subscribe(
      (response) => {
        this.user = response.user;
        console.log(this.user)
        
      },
      (error) => {
        console.log(error);
      }
    ) 
  }

}

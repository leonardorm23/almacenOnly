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

  deleteUser(id: any){
    Swal.fire({
      title: 'Esta seguro de eliminarlo?',
      text: "Eliminación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'usuario eliminado!',
          'Se elimino correctamente el usuario',
          'success'
        )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals

        this.userService.deleteUser(id).subscribe(
          response=>{
            this.userService.getUserID('').subscribe(
              response=>{
                this.user = response.user;
              }
              ,error=>{

              }
            );
          }
          ,error=>{

          }
        );

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Se cancelo la `peticion',
          'error'
        )
      }
    })
  }

}

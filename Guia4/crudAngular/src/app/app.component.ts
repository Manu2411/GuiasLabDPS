import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';


  alumnoArray: Alumno[] = [
    {id:1, name:'Alex', lastname:'Campos', age:35, addres: 'S.S', phone: '7234-4822', email: 'alexcam@gmail.com'},
    {id:2, name:'Maria', lastname:'Lopez', age:20, addres: 'Santa Ana', phone: '7654-5432', email: 'lopezmar@hotmail.com'},
    {id:3, name:'Juan', lastname:'Castro', age:25, addres: 'Soyapango', phone: '7950-0595', email: 'Cajuan@gmail.com'}
  ]

  selectedAlumno: Alumno = {id:0, name:'',lastname:'', age:0, addres: '', phone:'', email:''};

  openForEdit(alumno: Alumno): void {
    this.selectedAlumno = alumno;
  }


  addOrEdit():void {
    if( this.selectedAlumno.id === 0 ){ //INSERT
      if(this.selectedAlumno.name == ''){
          alert("name is a required data");
      }else if(this.selectedAlumno.lastname == ''){
        alert("lastname is a required data");
      }else if(this.selectedAlumno.age <= 0){
        alert("age has to be older or equal than 0");
      }else if(this.selectedAlumno.addres == ''){
        alert("addres is a required data");
      }else if(this.selectedAlumno.phone == ''){
        alert("phone is a required data");
      }else if(this.selectedAlumno.email == ''){
        alert("email is a required data");
      }else{
        this.selectedAlumno.id = this.alumnoArray.length + 1;
        this.alumnoArray.push(this.selectedAlumno);
      }
    }

    this.selectedAlumno = {id:0, name: '', lastname: '', age:0, addres: '', phone: '', email: ''};
  }

  delete(): void {
    if(confirm('¿Estás seguro de eliminar el Registro?')){
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = {id:0, name: '', lastname: '', age:0, addres: '', phone: '', email: ''};
    }
  }
}

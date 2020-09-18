import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { StudentService } from '../../../services/student.service';
// Class
import { Student } from '../../../models/student';
// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    public studentService: StudentService,
    public toastr: ToastrService
  ) { }

  // Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit() {
    this.studentService.getStudents();
    this.resetForm();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null)
      this.studentService.insertStudent(productForm.value);
    else
      this.studentService.updateStudent(productForm.value);

    this.resetForm(productForm);
    this.toastr.success('Sucessful Operation', 'Student Registered');
  }

  // Para limpiar el formulario
  resetForm(productForm?: NgForm) {
    if (productForm != null)
      productForm.reset();
    this.studentService.selectedStudent = new Student();
  }
}

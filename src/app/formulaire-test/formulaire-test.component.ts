import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-formulaire-test',
  templateUrl: './formulaire-test.component.html',
  styleUrls: ['./formulaire-test.component.css']
})
export class FormulaireTestComponent implements OnInit {

  personne;
  personeForm: FormGroup;
  countries = [
    { name: 'Tunisia' },
    { name: 'France' },
    { name: 'United States' },
    { name: 'Italy' }
  ];
  constructor() { }

  ngOnInit(): void {
    this.personeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, this.yopmailValidator]),
      age: new FormControl('', [Validators.required, this.validateAge]),
      country: new FormControl('', Validators.required),
    });

  }


  yopmailValidator(control: AbstractControl) {
    if (control.value.includes('@yopmail.com')) {
      return { yopmail: true };
    }
    return null;
  }

  validateAge(control: FormControl): { [s: string]: boolean } {
    if (control.value < 18 || control.value > 60) {
      return { invalidAge: true };
    }
    return null;
  }
  onSubmit() {
    if (this.personeForm.valid) {
      // Save employee data to database
      console.log(this.personeForm.value)
      this.personne = this.personeForm.value
      //this.personeForm.reset
this.resetForm()
    }
  }
  resetForm() {
    this.personeForm.reset({
      "name": "",
      "email": "",
      "age": "",
      "country": ""
    })
  }
}


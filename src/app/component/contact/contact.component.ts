import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; //We import the necessary services and classes to utilize Angular's reactive forms and form controls

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // Property containing path to message page;
  submitMessageRoutePath: string = "../message"; //We need to from the contact path back to the parent path, then navigate into the message path.

  // We utilized Angular's Reactive Form
  // We inject the FormBuilder service into the ContactComponent
  constructor(private formBuilder: FormBuilder) {
  }

  // User Angular's Reactive Form model-driven approach to handling form input and provide form controls
  // We use the FormBuilder service to create a group of form controls and because provides syntatic sugar to shorten Form Control, FormGroup, and Form Array
  // FormBuilder also reduces the amount of code we need to write to validate the input or form or code or bind it to a component property

  // The FormBuilder group() method is used to build the group form. And we pass in a list of key-value pairs that ties our inputs (keys) to collection of settings of its control (values)
  // The first argument of the form control value is the initial value of the inputs in the form.
  // The second argument of the form control value is the list of validation criterias or validators in needs to meet.
  // Source: https://angular.io/guide/reactive-forms
  // Source: https://www.tektutorialshub.com/angular/angular-formbuilder-in-reactive-forms/

  
  // Note: Angular's Validators.email was not perfect, so I added an additional validator for correct email regex pattern.
  // Note: The email regex pattern was sourced here: https://www.abstractapi.com/guides/angular-email-validation
    contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

  // As stated, we can easily swap out this.formBuilder.group() w/ new FormGroup(), since FromBuilder provides syntatic sugar to shorten Form Control, FormGroup,
  // See how we don't need to state a new FormControl for each key's value. With FormBuilder, we can swap out the outer bracket "[]"" w/ "new FormControl()" and it would still work, due to the syntatic sugar
    // contactForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    //   email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    //   message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    // });

  // We are using typeScript's getter syntax to retrieve certain property values form the FormBuilder's group (or Form Group)
  get name() {
    return this.contactForm.get('name');
  }
 
  get email() {
    return this.contactForm.get('email');
  }
 
  get message() {
    return this.contactForm.get('message');
  }
  
  onSubmit() {
    // For checking purposes only
    // alert(JSON.stringify(this.contactForm.value));

    // This is just a placeholder for now
    // We would want to take this data and send it over server-side for processing and handling
    // In the future I'd like to submit this directly to my email account, but for now I need to look into connecting
    // how to conenct Angular to a backend Framework or Service. For now, I believe my project is more than sufficient for a mid-semester project.
    alert("Your message has been successfully submitted!");
  }
}

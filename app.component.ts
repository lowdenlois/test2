import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-multiform-tab';

  tabs: any = []; // Array to hold tab objects
  activeTab = 0; // Index of the currently active tab

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
      // Initialize tabs array with default form configuration
        this.tabs = [
        {
          title: 'Tab 1',
          form: new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
          })
          // form: this.fb.group({
          //   // Define your form controls here
          //   firstName: ['', Validators.required],
          //   lastName: ['', Validators.required],
          // })
        },
        {
          title: 'Tab 2',
          form: new FormGroup({
            firstName: new FormControl(['', Validators.required]),
            lastName: new FormControl(['', Validators.required]),
          })
          // form: this.fb.group({
          //   email: ['', [Validators.required, Validators.email]],
          //   phone: ['', Validators.required],
          // })
        }
      ];
     }


     onFormSubmit(formData: any) {
      console.log(formData);
     }

   // Function to handle tab selection
   selectTab(tab: { active: boolean; }) {
    this.tabs.forEach((t: { active: boolean; }) => t.active = false); // Deactivate all tabs
    tab.active = true; // Activate selected tab
    this.activeTab = this.tabs.indexOf(tab); // Update active tab index
  }

}

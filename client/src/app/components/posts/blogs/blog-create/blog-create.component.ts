import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {
    
  }

  onCreatePost(){

    const post = {
      title: this.myForm.get('title').value,
      thumbnailImage: this.myForm.get('thumbnailImage').value,
      preamble: this.myForm.get('preamble').value,
      bodyText: this.myForm.get('bodyText').value
    };

    console.log(post);
  }

  createForm(){
    this.myForm = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(6)
      ])],

      thumbnailImage: ['', Validators.compose([
        Validators.required,

      ])],

      preamble: ['', Validators.compose([
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(60)
      ])],

      bodyText: ['', Validators.compose([
        Validators.required,
        Validators.minLength(100),
        Validators.maxLength(1000)
      ])]
    });
  }

}

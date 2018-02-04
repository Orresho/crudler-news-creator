import { PostService } from './../../../../_services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  myForm: FormGroup;
  message = '';
  messageClass = '';
  activateModal = false;


  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  onCreatePost() {

    const post = {
      title: this.myForm.get('title').value,
      thumbnailImage: this.myForm.get('thumbnailImage').value,
      preamble: this.myForm.get('preamble').value,
      bodyText: this.myForm.get('bodyText').value
    };

    this.postService.addPost(post)
      .subscribe(data => {
        if (!data.success) {
          // Show errr message
          this.message = data.message;
          this.messageClass = 'alert alert-danger'

          // Remove error message after some time
          setTimeout(() => {
            this.message = '';
            this.messageClass = ''
          }, 5000);

          
        } else {

          // Show success message
          this.message = data.message;
          this.messageClass = 'alert alert-success'

          // Remove success message after some time
          setTimeout(() => {
            this.message = '';
            this.messageClass = ''
              
          }, 2000);

          // Modal to check if user wants to confirm
          // this.activateModal = true;
          this.myForm.reset();
        }
      })

  }

  createForm() {
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

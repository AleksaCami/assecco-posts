import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

import { Post } from '../../services/models/posts.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-add-post-component',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent implements OnInit {
  public form: FormGroup;
  public post: Post;
  public url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    public http: HttpClient,
    public fb: FormBuilder,
    public router: Router
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userId: ['1', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  get userId() {
    return this.form.get('userId');
  }

  get title() {
    return this.form.get('title');
  }

  get body() {
    return this.form.get('body');
  }

  onSubmit(post: Post): void {
    this.http.post(this.url, post, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(() => {
        alert('success');
      });
    this.form.reset();
    this.router.navigate(['/posts']);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(error.error.message);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}

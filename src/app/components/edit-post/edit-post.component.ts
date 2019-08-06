import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})

export class EditPostComponent implements OnInit {
  public id: [];
  public USER_ID: [];
  public TITLE: [];
  public BODY: [];
  public form: FormGroup;
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public fb: FormBuilder,
    public router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.USER_ID = params.userId;
      this.TITLE = params.title;
      this.BODY = params.body;
    });
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
    this.http.put(`https://jsonplaceholder.typicode.com/posts/${this.id}`, post, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(() => {
        alert('successfully edited');
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

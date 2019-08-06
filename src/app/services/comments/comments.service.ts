import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {}


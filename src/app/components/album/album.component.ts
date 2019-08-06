import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Photo } from '../../services/models/photo.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  public id: [];
  public photos = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getPhotos();
  }

  getPhotosOfAlbum(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${this.id}`)
      .pipe(
        retry(5)
      );
  }

  getPhotos() {
    this.getPhotosOfAlbum().subscribe(results => {
      if (!results) {
        return;
      }
      this.photos = results;
    });
  }

}

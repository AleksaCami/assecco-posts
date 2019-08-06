import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../services/albums/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  public id: number;
  public photos = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, public albumsService: AlbumsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getPhotos();
  }

  getPhotos() {
    this.albumsService.getPhotosOfAlbum(this.id).subscribe(results => {
      if (!results) {
        return;
      }
      this.photos = results;
    });
  }

}

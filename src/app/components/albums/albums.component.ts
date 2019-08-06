import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  public allAlbums = [];

  constructor(public albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAllAlbums().subscribe(results => {
      if (!results) {
        return;
      }
      this.allAlbums = results;
      console.log(this.allAlbums);
    });
  }

}

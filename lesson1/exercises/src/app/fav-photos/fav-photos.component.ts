import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  // image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image1 = 'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg';
  image3 = 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';

  constructor() { }

  ngOnInit() {
  }

}
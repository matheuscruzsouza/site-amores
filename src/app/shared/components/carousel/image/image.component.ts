import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input("src") src: string = "";
  @Input("alt") alt: string = "";
  @Input("title") title: string = "";
  @Input("subtitle") subtitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

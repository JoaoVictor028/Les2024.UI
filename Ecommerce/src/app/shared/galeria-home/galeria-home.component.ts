import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/utils/photo.service';

@Component({
  selector: 'galeria-home',
  templateUrl: './galeria-home.component.html',
  styleUrls: ['./galeria-home.component.scss']
})
export class GaleriaHomeComponent implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private photoService: PhotoService) {}
    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}

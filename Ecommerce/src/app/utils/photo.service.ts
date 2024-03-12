import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getImages(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      // Aqui você pode colocar o código para carregar as imagens, por exemplo, de uma API ou de um arquivo
      const images = [
        {
          itemImageSrc: 'https://as1.ftcdn.net/v2/jpg/05/68/49/90/1000_F_568499083_q9QfafI1PkGJA8QQMIpiTT557xUUJ4Qq.jpg',
          thumbnailImageSrc: 'https://as1.ftcdn.net/v2/jpg/05/68/49/90/1000_F_568499083_q9QfafI1PkGJA8QQMIpiTT557xUUJ4Qq.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1'
        },
        {
          itemImageSrc: 'https://wallpapers.com/images/hd/perfect-sunset-landscape-jd53jyxh63erpsje.jpg',
          thumbnailImageSrc: 'https://wallpapers.com/images/hd/perfect-sunset-landscape-jd53jyxh63erpsje.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1'
        },
      ];
      // Simulando um pequeno atraso para simular uma operação assíncrona (como uma chamada de API)
      setTimeout(() => {
        resolve(images);
      }, 100); // Tempo de espera de 1 segundo (você pode ajustar conforme necessário)
    });
  }
}

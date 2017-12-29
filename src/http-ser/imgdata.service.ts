import { Injectable } from '@angular/core';

@Injectable()
export class ImgDataService {
    imgSrc: any[] = [
        {src:"../assets/imgs/0.jpg",title:"图片1",background:"rgb(7, 18, 44)"},
        {src:"../assets/imgs/1.jpg",title:"图片2",background:"rgb(8, 26, 53)"},
        {src:"../assets/imgs/2.jpg",title:"图片3",background:"rgb(29, 22, 22)"},
        {src:"../assets/imgs/3.jpg",title:"图片4",background:"#02a1eb"},
        {src:"../assets/imgs/1.jpg",title:"图片2",background:"rgb(8, 26, 53)"},
        {src:"../assets/imgs/2.jpg",title:"图片3",background:"rgb(29, 22, 22)"},
        {src:"../assets/imgs/3.jpg",title:"图片4",background:"#02a1eb"}
    ]

    data(): any[] {
        return this.imgSrc;
    }

}
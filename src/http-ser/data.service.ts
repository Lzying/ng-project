import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    // 本地数据
    data:any[]=[
        {name:"Java框架师",cost:"0",attestation:"1",organization:"xx机构",imgsrc:"../../assets/imgs/classimgs/232.png"},
        {name:"JavaScript基础",cost:"0",attestation:"0",organization:"xx机构",imgsrc:"../../assets/imgs/classimgs/233.png"},
        {name:"用angular4开发网站",cost:"120",attestation:"1",organization:"xx机构",imgsrc:"../../assets/imgs/classimgs/234.png"},
        {name:"HTML5+CSS",cost:"0",attestation:"1",organization:"xx机构",imgsrc:"../../assets/imgs/classimgs/235.png"},
        {name:"深入解读Java",cost:"9.9",attestation:"0",organization:"xx机构",imgsrc:"../../assets/imgs/classimgs/236.png"},
        {name:"java企业开发",cost:"59",attestation:"1",organization:"xx机构",imgsrc:"../../assets/imgs/classimgs/237.png"},
        {name:"WEB全栈开发",cost:"0",attestation:"1",organization:"xx机构",imgsrc:"../../assets/imgs/classimgs/238.png"},
        {name:"VUE前端开发",cost:"199",attestation:"1",organization:"xx机构",imgsrc:"../../assets/imgs/classimgs/239.png"},
        {name:"Java从0到高级应用",cost:"0",attestation:"0",organization:"xx机构",imgsrc:".../../assets/imgs/classimgs/240.png"},
        {name:"web前端开发",cost:"1",attestation:"1",organization:"xx机构",imgsrc:"../../assets/imgs/classimgs/241.png"},


     ]

    
    fetchData() :any{
       return this.data;
        
    }

     
}
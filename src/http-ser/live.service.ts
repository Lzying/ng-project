import { Injectable } from '@angular/core';

@Injectable()
export class LiveService {
    // 本地数据
    data: any[] = [
        { name: "Java框架师", time: "60", live: "1", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/232.png", classHref: "https://ke.qq.com/" },
        { name: "JavaScript基础JavaScript基础JavaScript基础", time: "0", live: "1", teacher: "xx机构xx机构xx机构xx机构xx机构", imgsrc: "../../assets/imgs/classimgs/233.png", classHref: "https://ke.qq.com/" },
        { name: "用angular4开发网站", time: "120", live: "0", teacher: "xx机构机构xx老师xx老师xx", imgsrc: "../../assets/imgs/classimgs/234.png", classHref: "https://ke.qq.com/" },
        { name: "HTML5+CSS", time: "60", live: "0", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/235.png", classHref: "https://ke.qq.com/" },
        { name: "深入解读Java", time: "120", live: "0", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/236.png", classHref: "https://ke.qq.com/" },
        { name: "java企业开发", time: "120", live: "0", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/237.png", classHref: "https://ke.qq.com/" },
        { name: "WEB全栈开发", time: "0", live: "1", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/238.png", classHref: "https://ke.qq.com/" },
        { name: "VUE前端开发", time: "120", live: "0", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/239.png", classHref: "https://ke.qq.com/" },
        { name: "Java从0到高级应用", time: "120", live: "0", teacher: "xx老师", imgsrc: ".../../assets/imgs/classimgs/240.png", classHref: "https://ke.qq.com/" },
        { name: "Java框架师", time: "60", live: "1", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/232.png", classHref: "https://ke.qq.com/" },
        { name: "JavaScript基础JavaScript基础JavaScript基础", time: "0", live: "1", teacher: "xx机构xx机构xx机构xx机构xx机构", imgsrc: "../../assets/imgs/classimgs/233.png", classHref: "https://ke.qq.com/" },
        { name: "用angular4开发网站", time: "120", live: "0", teacher: "xx机构机构xx老师xx老师xx", imgsrc: "../../assets/imgs/classimgs/234.png", classHref: "https://ke.qq.com/" },
        { name: "HTML5+CSS", time: "60", live: "0", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/235.png", classHref: "https://ke.qq.com/" },
        { name: "深入解读Java", time: "120", live: "0", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/236.png", classHref: "https://ke.qq.com/" },
        { name: "java企业开发", time: "120", live: "0", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/237.png", classHref: "https://ke.qq.com/" },
        { name: "WEB全栈开发", time: "0", live: "1", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/238.png", classHref: "https://ke.qq.com/" },
        { name: "VUE前端开发", time: "120", live: "0", teacher: "xx老师", imgsrc: "../../assets/imgs/classimgs/239.png", classHref: "https://ke.qq.com/" },
        { name: "Java从0到高级应用", time: "120", live: "0", teacher: "xx老师", imgsrc: ".../../assets/imgs/classimgs/240.png", classHref: "https://ke.qq.com/" }
    ]
    fetchData(): any[] {
        return this.data;

    }


}
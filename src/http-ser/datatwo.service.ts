import { Injectable } from '@angular/core';

@Injectable()
export class DataTwoService {
    // 本地数据
    data: any[] = [
        {
            title: "Java",
            titleLists: ["不限", "零基础", "架构师", "专项班"],
            classify: [
                { name: "深入解读Java", cost: "9.9", attestation: "0", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/236.png", classHref: "https://ke.qq.com/" },
                { name: "java企业开发", cost: "59", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/237.png", classHref: "https://ke.qq.com/" },
                { name: "WEB全栈开发", cost: "0", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/238.png", classHref: "https://ke.qq.com/" },
                { name: "VUE前端开发", cost: "199", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/239.png", classHref: "https://ke.qq.com/" },
                { name: "Java从0到高级应用", cost: "0", attestation: "0", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: ".../../assets/imgs/classimgs/240.png", classHref: "https://ke.qq.com/" },
                { name: "web前端开发", cost: "1", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/241.png", classHref: "https://ke.qq.com/" },
                { name: "Java框架师", cost: "999999", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/232.png", classHref: "https://ke.qq.com/" },
                { name: "JavaScript基础JavaScript基础JavaScript基础", cost: "0", attestation: "0", organization: "xx机构xx机构xx机构xx机构xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/233.png", classHref: "https://ke.qq.com/" },
                { name: "用angular4开发网站", cost: "120", attestation: "1", organization: "xx机构机构xx机构xx机构xx", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/234.png", classHref: "https://ke.qq.com/" },
                { name: "HTML5+CSS", cost: "0", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/235.png", classHref: "https://ke.qq.com/" },
            ]
        },

        {
            title: "IT互联网",
            titleLists: ["不限", "互联网产品", "互联网营销", "编程语言", "前端开发", "认证考试","零基础", "架构师", "专项班", "平面设计", "环境艺术设计", "绘画创作", "UI设计", "游戏动画设计"],
            classify: [
                { name: "java企业开发", cost: "59", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/237.png", classHref: "https://ke.qq.com/" },
                { name: "WEB全栈开发", cost: "999999", attestation: "1", organization: "xx机构xx机构xx机构xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/238.png", classHref: "https://ke.qq.com/" },
                { name: "VUE前端开发", cost: "199", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/239.png", classHref: "https://ke.qq.com/" },
                { name: "java企业开发", cost: "59", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/237.png", classHref: "https://ke.qq.com/" },
                { name: "WEB全栈开发", cost: "999999", attestation: "1", organization: "xx机构xx机构xx机构xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/238.png", classHref: "https://ke.qq.com/" },
                { name: "VUE前端开发", cost: "199", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/239.png", classHref: "https://ke.qq.com/" },
                { name: "互联网营销", cost: "0", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/232.png", classHref: "https://ke.qq.com/" },
                { name: "JavaScript基础", cost: "0", attestation: "0", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/233.png", classHref: "https://ke.qq.com/" },
                { name: "互联网营销", cost: "0", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/232.png", classHref: "https://ke.qq.com/" },
                { name: "JavaScript基础", cost: "0", attestation: "0", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/233.png", classHref: "https://ke.qq.com/" },
                { name: "用angular4开发网站", cost: "120", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/234.png", classHref: "https://ke.qq.com/" },
                { name: "HTML5+CSS", cost: "0", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/235.png", classHref: "https://ke.qq.com/" },
                { name: "深入解读Java", cost: "9.9", attestation: "0", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/236.png", classHref: "https://ke.qq.com/" },
                { name: "Java从0到高级应用", cost: "0", attestation: "0", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: ".../../assets/imgs/classimgs/240.png", classHref: "https://ke.qq.com/" },
                { name: "web前端开发", cost: "1", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/241.png", classHref: "https://ke.qq.com/" }
            ]
        },

        {
            title: "UI.平面设计",
            titleLists: ["不限", "平面设计", "环境艺术设计", "绘画创作", "UI设计", "游戏动画设计"],
            classify: [
                { name: "深入解读Java", cost: "9.9", attestation: "0", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/236.png", classHref: "https://ke.qq.com/" },
                { name: "java企业开发", cost: "59", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/237.png", classHref: "https://ke.qq.com/" },
                { name: "WEB全栈开发", cost: "0", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/238.png", classHref: "https://ke.qq.com/" },
                { name: "VUE前端开发", cost: "199", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/239.png", classHref: "https://ke.qq.com/" },
                { name: "Java从0到高级应用", cost: "0", attestation: "0", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: ".../../assets/imgs/classimgs/240.png", classHref: "https://ke.qq.com/" },
                { name: "web前端开发", cost: "1", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/241.png", classHref: "https://ke.qq.com/" },
                { name: "环境艺术设计", cost: "0", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/232.png", classHref: "https://ke.qq.com/" },
                { name: "JavaScript基础", cost: "0", attestation: "0", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/233.png", classHref: "https://ke.qq.com/" },
                { name: "用angular4开发网站", cost: "120", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/234.png", classHref: "https://ke.qq.com/" },
                { name: "HTML5+CSS", cost: "0", attestation: "1", organization: "xx机构", organizationHref: "https://ke.qq.com/", imgsrc: "../../assets/imgs/classimgs/235.png", classHref: "https://ke.qq.com/" }
            ]
        }

    ]


    fetchData(): any {
        return this.data;

    }


}
import { Injectable } from '@angular/core';

@Injectable()
export class NavListService {
    // 本地数据
    data: any[] = [
        {
            title: "IT.互联网",
            fistLists: ["前端开发", "Java"],
            mytitle: "腾讯自研课程",
            secondLists: [
                {
                    title: "互联网产品",
                    Lists: ["产品策划", "游戏策划", "产品运营", "游戏运营"]
                },
                {
                    title: "互联网营销",
                    Lists: ["网络营销理论", "淘宝营销", "微信营销", "新媒体营销","电商营销","其他"]
                },
                {
                    title: "编程语言",
                    Lists: ["C", "C++", "Java", "PHP","C#/.Net","Python","其他"]
                },
                {
                    title: "前端开发",
                    Lists: ["HTML/CSS", "JavaScript", "jQuery", "HTML5","CSS3","React","Bootstrap","其他"]
                },
            ]
        },

        {
            title: "设计.创作",
            fistLists: ["平面设计", "UI设计"],
            mytitle: "腾讯课堂设计大师",
            secondLists: [
                {
                    title: "平面设计",
                    Lists: ["淘宝美工", "网页美工", "综合平面设计", "摄影后期","广告海报"]
                },
                {
                    title: "UI设计",
                    Lists: ["交互设计", "游戏UI设计", "Web", "UI设计","APP","其他"]
                },
                {
                    title: "编程语言",
                    Lists: ["C", "C++", "Java", "PHP","C#/.Net","Python","其他"]
                    
                },
                {
                    title: "UI设计",
                    Lists: ["交互设计", "游戏UI设计", "Web", "UI设计","APP","其他"]
                },
                {
                    title: "前端开发",
                    Lists: ["HTML/CSS", "JavaScript", "jQuery", "HTML5","CSS3","React","Bootstrap","其他"]
                },
                {
                    title: "UI设计",
                    Lists: ["交互设计", "游戏UI设计", "Web", "UI设计","APP","其他"]
                },
            ]
        },

        {
            title: "语言.留学",
            fistLists: ["实用英语", "雅思","托福"],
            mytitle: null,
            secondLists: [
                {
                    title: "UI设计",
                    Lists: ["交互设计", "游戏UI设计", "Web", "UI设计","APP","其他"]
                },
                {
                    title: "互联网产品",
                    Lists: ["产品策划", "游戏策划", "产品运营", "游戏运营"]
                },
                {
                    title: "互联网营销",
                    Lists: ["网络营销理论", "淘宝营销", "微信营销", "新媒体营销","电商营销","其他"]
                },
                {
                    title: "编程语言",
                    Lists: ["C", "C++", "Java", "PHP","C#/.Net","Python","其他"]
                },
                {
                    title: "前端开发",
                    Lists: ["HTML/CSS", "JavaScript", "jQuery", "HTML5","CSS3","React","Bootstrap","其他"]
                },
            ]
        },

        {
            title: "职业.考证",
            fistLists: ["公务员", "教师考试"],
            mytitle: null,
            secondLists: [
                {
                    title: "平面设计",
                    Lists: ["淘宝美工", "网页美工", "综合平面设计", "摄影后期","广告海报"]
                },
                {
                    title: "UI设计",
                    Lists: ["交互设计", "游戏UI设计", "Web", "UI设计","APP","其他"]
                },
                {
                    title: "编程语言",
                    Lists: ["C", "C++", "Java", "PHP","C#/.Net","Python","其他"]
                },
                {
                    title: "前端开发",
                    Lists: ["HTML/CSS", "JavaScript", "jQuery", "HTML5","CSS3","React","Bootstrap","其他"]
                },
                {
                    title: "UI设计",
                    Lists: ["交互设计", "游戏UI设计", "Web", "UI设计","APP","其他"]
                },
            ]
        },

        {
            title: "升学.考研",
            fistLists: ["考研", "大学","高中"],
            mytitle:null ,
            secondLists: [
                {
                    title: "互联网产品",
                    Lists: ["产品策划", "游戏策划", "产品运营", "游戏运营"]
                },
                {
                    title: "互联网营销",
                    Lists: ["网络营销理论", "淘宝营销", "微信营销", "新媒体营销","电商营销","其他"]
                },
                {
                    title: "编程语言",
                    Lists: ["C", "C++", "Java", "PHP","C#/.Net","Python","其他"]
                },
                {
                    title: "前端开发",
                    Lists: ["HTML/CSS", "JavaScript", "jQuery", "HTML5","CSS3","React","Bootstrap","其他"]
                },
            ]
        },

        {
            title: "兴趣.生活",
            fistLists: ["摄影", "乐器演奏","美妆"],
            mytitle: "腾讯课堂设计大师",
            secondLists: [
                {
                    title: "平面设计",
                    Lists: ["淘宝美工", "网页美工", "综合平面设计", "摄影后期","广告海报"]
                },
                {
                    title: "UI设计",
                    Lists: ["交互设计", "游戏UI设计", "Web", "UI设计","APP","其他"]
                },
                {
                    title: "UI设计",
                    Lists: ["交互设计", "游戏UI设计", "Web", "UI设计","APP","其他"]
                },
                {
                    title: "编程语言",
                    Lists: ["C", "C++", "Java", "PHP","C#/.Net","Python","其他"]
                },
                {
                    title: "前端开发",
                    Lists: ["HTML/CSS", "JavaScript", "jQuery", "HTML5","CSS3","React","Bootstrap","其他"]
                },
                {
                    title: "UI设计",
                    Lists: ["交互设计", "游戏UI设计", "Web", "UI设计","APP","其他"]
                },
            ]
        },


    ]


    fetchData(): any {
        return this.data;

    }


}
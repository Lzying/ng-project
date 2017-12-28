import { Component, HostListener,OnInit} from '@angular/core';
import { NavListService } from '../http-ser/nav-list.service';


@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    providers: [NavListService]
})
export class PageComponent  implements OnInit{

    /**
     * 定义导航条上课堂和机构的切换
     */
    isSearch = false;
    isMyClass=false;
    searchClass: string = "课堂";
    searchOrgan: string = "机构";
    serarchOne: string;

    searchSwitch() {
        this.serarchOne = this.searchClass;
        this.searchClass = this.searchOrgan;
        this.searchOrgan = this.serarchOne;
        this.isSearch = false;
    }

    constructor(private navListService: NavListService) { }
    datas:any[];
    ngOnInit(){
        this.datas=this.navListService.fetchData();
        console.log(this.datas);
        
    }



}

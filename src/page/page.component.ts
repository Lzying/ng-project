import { Component, HostListener} from '@angular/core';


@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {

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


}

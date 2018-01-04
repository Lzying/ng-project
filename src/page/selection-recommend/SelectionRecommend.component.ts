import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../http-ser/data.service';
import { LiveService } from '../../http-ser/live.service';


@Component({
    selector: 'app-selection-recommend',
    templateUrl: './SelectionRecommend.component.html',
    styleUrls: ['./SelectionRecommend.component.scss'],
    providers: [DataService, LiveService]
})
export class SelectionRecommendComponent implements OnInit {
    liveMouseenter:string=" ";
    datas: any[];
    livedatas: any[];
    liveScreenData: any;
    constructor(private dataService: DataService, private liveService: LiveService) { }

    ngOnInit() {
        this.datas = this.dataService.fetchData();
        this.livedatas = this.liveService.fetchData();
        console.log(this.datas);
        this.liveScreenData= this.liveService.fetchData()[0];
    }

   
    liveScreen(liveData: any) {
        this.liveScreenData = liveData;
    }


}
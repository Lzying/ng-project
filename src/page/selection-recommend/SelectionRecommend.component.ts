import { Component,OnInit } from '@angular/core';
import { DataService } from '../../http-ser/data.service';
import { FormsModule }   from '@angular/forms';


@Component({
    selector: 'app-selection-recommend',
    templateUrl: './SelectionRecommend.component.html',
    styleUrls: ['./SelectionRecommend.component.scss'],
    providers: [DataService]
})
export class SelectionRecommendComponent implements OnInit{

    datas:any[];
    constructor(private dataService: DataService) { }

    ngOnInit(){
        this.datas=this.dataService.fetchData();
        console.log(this.datas);
        
    }

}
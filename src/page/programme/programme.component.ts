import { Component, OnInit } from '@angular/core';
import { DataService } from '../../http-ser/data.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-programme',
    templateUrl: './programme.component.html',
    styleUrls: ['./programme.component.scss'],
    providers: [DataService]
})
export class ProgrammeComponent implements OnInit {
    datas: any[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.datas = this.dataService.fetchData();
        console.log(this.datas);

    }

    
}
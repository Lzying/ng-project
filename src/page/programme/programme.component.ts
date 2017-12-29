import { Component, OnInit } from '@angular/core';
import { DataTwoService } from '../../http-ser/datatwo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
    selector: 'app-programme',
    templateUrl: './programme.component.html',
    styleUrls: ['./programme.component.scss'],
    providers: [DataTwoService]
})
export class ProgrammeComponent implements OnInit {
    datas: any[];
    constructor(private dataService: DataTwoService) { }

    ngOnInit() {
        this.datas = this.dataService.fetchData();
        console.log(this.datas);

    }

    
}
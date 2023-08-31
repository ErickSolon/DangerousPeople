import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { DataService } from 'src/app/services/data.service';
import { DpeopleService } from 'src/app/services/dpeople.service';
import { MoreinfoService } from 'src/app/services/moreinfo.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
	people: People[] = [];

  constructor(private peopleService: DpeopleService, private dataService: DataService, private moreInfoService: MoreinfoService) {

  }

  ngOnInit(): void {
      this.peopleService.getAll().subscribe(info => {
        this.people = info;
      });
  }

  deleteInfos(id: string): void {
    this.dataService.delete(id).subscribe(() => {
        this.moreInfoService.delete(id).subscribe(() => {
            this.peopleService.getAll().subscribe(info => {
                this.people = info;
            });
        });
    });
  }
}

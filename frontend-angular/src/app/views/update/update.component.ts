import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/models/data.model';
import { MoreInfo } from 'src/app/models/moreinfo.model';
import { People } from 'src/app/models/people.model';
import { DataService } from 'src/app/services/data.service';
import { DpeopleService } from 'src/app/services/dpeople.service';
import { MoreinfoService } from 'src/app/services/moreinfo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  data: Data = {
    isMarried: false,
    nomeCompleto: "",
  };

  moreInfoModel: MoreInfo = {
    cpf: "",
    fullAddress: "",
    identity: "",
    isCriminal: false,
  };

  idPeople: string = "";

  constructor(
    private dataService: DataService,
    private moreInfoService: MoreinfoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idPeople = this.activatedRoute.snapshot.paramMap.get('id') || "";
    // this.dataService.getById(this.idPeople).subscribe(info => {
    //   this.data = info;

    //   this.moreInfoService.getById(this.idPeople).subscribe(info2 => {
    //     this.moreInfoModel = info2;
    //   })
    // });
  }

  update(): void {
    this.dataService.update(this.data, this.idPeople).subscribe(() => {
      this.moreInfoService.update(this.moreInfoModel, this.idPeople).subscribe(() => {
        this.router.navigate(["/lista"]);
      });
    });
  }
}

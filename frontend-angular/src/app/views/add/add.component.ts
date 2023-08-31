import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/models/data.model';
import { MoreInfo } from 'src/app/models/moreinfo.model';
import { DataService } from 'src/app/services/data.service';
import { MoreinfoService } from 'src/app/services/moreinfo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  data: Data = {
    isMarried: false,
    nomeCompleto: "",
  }

  moreInfoModel: MoreInfo = {
    cpf: "",
    fullAddress: "",
    identity: "",
    isCriminal: false,
  }

  constructor(private dataService: DataService, private moreInfo: MoreinfoService, private router: Router) {

  }

  save() : void {
    this.dataService.add(this.data).subscribe(() => {
      this.moreInfo.add(this.moreInfoModel).subscribe(() => {
      this.router.navigate(["/lista"]);
      });
    });
    
  }
}

import { Component, OnInit } from '@angular/core';
import { PeopleDataService } from 'src/app/services/people-data.service';
import { People } from 'src/app/models/people.model';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {
  public peopleData:People[]
  public inputString:string = '';
  public pageNo:number = 1;
  public filtered:number

  constructor(private pplDataService:PeopleDataService) { }

  ngOnInit() {
    this.getPplData()
  }
  getPplData(){
    this.pplDataService.getAllPeoplesData().subscribe(
      data => {
        this.peopleData = data
      }
    )
  }

  searchBy(){
    if(this.inputString != ''){
      this.peopleData = this.peopleData.filter(res => {
        return (res.eyeColor.toLocaleLowerCase().match(this.inputString.toLocaleLowerCase()) 
        ||res.company.toLocaleLowerCase().match(this.inputString.toLocaleLowerCase()) 
        ||res.address.toLocaleLowerCase().match(this.inputString.toLocaleLowerCase()) 
        ||res.name.first.toLocaleLowerCase().match(this.inputString.toLocaleLowerCase()) 
        ||res.name.last.toLocaleLowerCase().match(this.inputString.toLocaleLowerCase()) 
        ||res.email.toLocaleLowerCase().match(this.inputString.toLocaleLowerCase()) )  
      })      
    }else if(this.inputString == ''){
      this.ngOnInit()
    }
  }

}

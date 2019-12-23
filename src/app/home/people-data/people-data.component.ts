import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleDataService } from 'src/app/services/people-data.service';

@Component({
  selector: 'app-people-data',
  templateUrl: './people-data.component.html',
  styleUrls: ['./people-data.component.css']
})
export class PeopleDataComponent implements OnInit {

  public peopleData:People[]
  public greenEyes:number
  public blueEyesAvg:number
  public surname:string[]
  public surnameLength:number[]
  public code:string = ', 750'
  public addressArr:People[]
  public surnameArr = []
  public surnameLengthArr = []
  constructor(private pplDataService:PeopleDataService) { }

  ngOnInit() {
    this.greenColoredEyes()
    this.blueEyesAvgAge()
    this.commonSurnames()
    this.address()
  }

  greenColoredEyes(){
    this.pplDataService.getAllPeoplesData().subscribe(
      data => {
        this.peopleData = data.filter(ppl => ppl.eyeColor === "green")
        let green = this.peopleData
        this.greenEyes = green.length
      }
    )
  }

  blueEyesAvgAge(){
    this.pplDataService.getAllPeoplesData().subscribe(
      data => {
        this.peopleData = data.filter(ppl => ppl.eyeColor === "blue")
        let blue = this.peopleData  
        let agesum = blue.reduce((sum,item) => sum+item.age,0 )        
        this.blueEyesAvg = agesum/blue.length
      }
    )
  }

  commonSurnames(){
    this.pplDataService.getAllPeoplesData().subscribe(
      data => {
        this.peopleData = data
        let surnames = this.peopleData             
        let group = surnames.reduce((acc,el)=>{
          let key = (el.name.last);
          (acc[key] ? acc[key] : (acc[key] = null || [])).push(key)
          return acc   
        },{})
        for(let lastName in group){                    
            let lastname = lastName
            let lastnameArrLgt = group[lastName].length
            this.surnameArr.push(lastname)
            this.surnameLengthArr.push(lastnameArrLgt)
            let names = this.surnameArr.slice(0,9)
            this.surname = names
            let namesLgt = this.surnameLengthArr.slice(0,9)
            this.surnameLength = namesLgt
        }
      }
    )
  }
 
  address(){
    this.pplDataService.getAllPeoplesData().subscribe(
      data => {
        this.peopleData = data.filter(ppl => ppl.address.toLocaleLowerCase().match(this.code.toLocaleLowerCase()))
        let addr = this.peopleData     
        this.addressArr = addr
      }
    )
  }

  

}

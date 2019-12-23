import { Name } from './name.model';


export class People {
    constructor(
       public id:string,
       public balance:string,
       public age:number,
       public eyeColor:string,
       public name:Name,
       public company:string, 
       public email:string,
       public phone:string, 
       public address:string, 
       public registered:string, 
       public latitude:number, 
       public logitude:number, 
    ){}
}

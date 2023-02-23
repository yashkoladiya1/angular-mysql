import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  
  constructor(private api:ApiserviceService,private router:Router){};
  readUser:any;

  ngOnInit():void{
    this.api.getAllUser().subscribe(res=>this.readUser = res.data);
  }

  deleteId(id:any){
      this.api.deleteUser(id).subscribe((res)=>{console.log(res,'Data added Success')})
      this.router.navigateByUrl('/')
  }
}

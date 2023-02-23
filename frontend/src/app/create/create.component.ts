import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private api:ApiserviceService,private router:Router){};

  ngOnInit():void{}
  errmessage:any
  userForm = new FormGroup({
    'fullname':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'mobile':new FormControl('',Validators.required)
  })
  userSubmit(){
    if (this.userForm.valid) {
     this.api.createUser(this.userForm.value).subscribe((res)=>{console.log(res,'Data added Success')})
     this.router.navigateByUrl('/read')
     this.api.getAllUser(); 
    } else {
      this.errmessage = "all field are required"
      console.log(this.errmessage)
    }
  }
}
 
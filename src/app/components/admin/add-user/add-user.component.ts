import { ResourceService } from './../../../services/resource.service';
import { UserService } from './../../../services/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
   selector: 'app-add-user',
   templateUrl: './add-user.component.html',
   styleUrls: ['./add-user.component.css'],
   providers: [UserService, ResourceService]
})
export class AddUserComponent implements OnInit {
   addUserForm: FormGroup;
   usernameLabel: string;
   firstNameLabel: string;
   lastNameLabel: string;
   emailLabel: string;
   passwordLabel: string;
   uploadParams: FormData;
   image: any = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAAEDBAMAAADD/3z4AAAAMFBMVEW8vsDR09TFxsi/wcPn6OnX2NrMztDc3d7Hycve4OHKy83Bw8XP0NIAAAAAAAAAAAC0F+PNAAAACXBIWXMAAAsTAAALEwEAmpwYAAACt0lEQVR4Ae3av27TbBTHcdfBSUs6uCISQmXokJHBEl0qFgi/xHHaoYMH2BgqsUZQqWuHSqxIzdINpFwAQy8gErkwYruH10nsWg2vzxn6+wwk6YC+OrYf58/jEBERERERERERERERUaVXz18e2BZ8AxBeWhZsIfHOMqGD1KldwVNkRnYJT3DHLmEqCZ+sTwXLk+FcEsb2CW+ZYHog5pLgmyXcSsIv01tEou+YaUyQeu/Y6SJl9Y7hTTKG9Jr4mjwLDBJukn+2Y+BD8qR1rV/gLV+J81A/IcYg92rb4FblLd+iuwZXZgzgxBFNgzu2h4UokJc7BgtUvLwiNSbqY/BWV6RDGYPuEHq5P7hInNoNQZbqvskQhKv7vmFXhrA2hoFWwpkMIc/V/EDRlCHYjWEqQygaww/nESAi92JzX/6fhG1sbsgEJjCBCUx4DAnRxYPUkfDA/00tgQlMYEL7BaJ924QOFp5ZJnhIRIFhQgep73YJctM6sUto4Y5dwqEkXJolXEmCb5ZwZp8wLUxoBeYHojO2OB0Plr5zHBlelNIV6CW4yAxWdpSM9Rfo8crmopH6bSoMlo7DQqCVICuDv7abw1dMaHyehL/XfyIZKiRUbSEIDBMmslaZJWwhMzRIeL2yZAfqCY2bIH2A8NUTWrjOHsRQPSHO3kZP8VegnLALJGNo4z++YoIskmF2HMRQN0F+q5/nEiLNBFkS+y7yfM0EuRQ/Iq+nmXCEIpFmwjkK+XoJHor19BI6KBapJTRRxtdKuEKZnlKCi1KRUsItyvkqCY0Jyh2rJOzgHqFKQoz7zBQStnCvY61PU+XC+hOaqDCrPaGLCscK3y9UCOtOOEKlWc0JP/cq1ZbAX2WYwAQm2O9f4EYSJjCBCUxgQrX23ub2HSIiIiIiIiIiIiIiIiIiIiIiIiKif/MHRAD9DcnwUkAAAAAASUVORK5CYII=';

   constructor(private userService: UserService, private resourceService: ResourceService, private sanitizer: DomSanitizer) {}

   ngOnInit() {
      this.addUserForm = new FormGroup({
         username: new FormControl('', [
            Validators.required,
         ]),
         password: new FormControl('', [
            Validators.minLength(8),
            Validators.required
         ]),
         firstName: new FormControl('', [
            Validators.required
         ]),
         lastName: new FormControl('', [
            Validators.required
         ]),
         email: new FormControl('', [
            Validators.pattern("[^ @]*@[^ @]*"),
            Validators.required,
         ]),
         contactNumber: new FormControl(),
         totalHours: new FormControl(),
         status: new FormControl(),
         imgUrl: new FormControl(),
         _timelog: new FormControl(),
         isAdmin: new FormControl(false)
      });

      this.firstNameLabel = 'First Name';
      this.lastNameLabel = 'Last Name';
      this.emailLabel = 'Email Address';
      this.usernameLabel = 'Username';
      this.passwordLabel = 'Password';


      this.addUserForm.valueChanges.subscribe(form => {
         // Username Label
         if (this.addUserForm.controls.username.valid || !this.addUserForm.controls.username.dirty) {
            this.usernameLabel = 'Username';
         } else if (this.addUserForm.controls.username.dirty && this.addUserForm.controls.username.errors.required) {
            this.usernameLabel = 'Username is required'
         }

         if (this.addUserForm.controls.password.valid || !this.addUserForm.controls.password.dirty) {
            this.passwordLabel = 'Password';
         } else if (this.addUserForm.controls.password.errors) {
            this.passwordLabel = 'Password must be 8 characters long'
         }

         // First Name Label
         if (this.addUserForm.controls.firstName.valid || !this.addUserForm.controls.firstName.dirty) {
            this.firstNameLabel = 'First Name';
         } else if (this.addUserForm.controls.firstName.dirty && this.addUserForm.controls.firstName.errors.required) {
            this.firstNameLabel = 'First Name is required'
         }

         // Last Name Label
         if (this.addUserForm.controls.lastName.valid || !this.addUserForm.controls.lastName.dirty) {
            this.lastNameLabel = 'Last Name';
         } else if (this.addUserForm.controls.lastName.dirty && this.addUserForm.controls.lastName.errors.required) {
            this.lastNameLabel = 'Last Name is required'
         }

         // Email Label
         if (this.addUserForm.controls.email.valid || !this.addUserForm.controls.email.dirty) {
            this.emailLabel = 'Email Address';
         } else if (this.addUserForm.controls.email.dirty && this.addUserForm.controls.email.errors.required) {
            this.emailLabel = 'Email Address is required';
         } else if (this.addUserForm.controls.email.dirty && this.addUserForm.controls.email.errors.pattern) {
            this.emailLabel = 'Invalid Email Address';
         }
      });
   }

   addUser() {
      this.addUserForm.controls.imgUrl.setValue(this.image);
      if (this.addUserForm.valid) {
         this.userService.addUser(this.addUserForm.value).subscribe(
            data => {
               if (this.addUserForm.controls.isAdmin.value) {
                  alert('Sucessfully Created Admin.');
               }
               else {
                  alert('Sucessfully Created User.');
               }
               this.addUserForm.reset();
               this.image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAAEDBAMAAADD/3z4AAAAMFBMVEW8vsDR09TFxsi/wcPn6OnX2NrMztDc3d7Hycve4OHKy83Bw8XP0NIAAAAAAAAAAAC0F+PNAAAACXBIWXMAAAsTAAALEwEAmpwYAAACt0lEQVR4Ae3av27TbBTHcdfBSUs6uCISQmXokJHBEl0qFgi/xHHaoYMH2BgqsUZQqWuHSqxIzdINpFwAQy8gErkwYruH10nsWg2vzxn6+wwk6YC+OrYf58/jEBERERERERERERERUaVXz18e2BZ8AxBeWhZsIfHOMqGD1KldwVNkRnYJT3DHLmEqCZ+sTwXLk+FcEsb2CW+ZYHog5pLgmyXcSsIv01tEou+YaUyQeu/Y6SJl9Y7hTTKG9Jr4mjwLDBJukn+2Y+BD8qR1rV/gLV+J81A/IcYg92rb4FblLd+iuwZXZgzgxBFNgzu2h4UokJc7BgtUvLwiNSbqY/BWV6RDGYPuEHq5P7hInNoNQZbqvskQhKv7vmFXhrA2hoFWwpkMIc/V/EDRlCHYjWEqQygaww/nESAi92JzX/6fhG1sbsgEJjCBCUx4DAnRxYPUkfDA/00tgQlMYEL7BaJ924QOFp5ZJnhIRIFhQgep73YJctM6sUto4Y5dwqEkXJolXEmCb5ZwZp8wLUxoBeYHojO2OB0Plr5zHBlelNIV6CW4yAxWdpSM9Rfo8crmopH6bSoMlo7DQqCVICuDv7abw1dMaHyehL/XfyIZKiRUbSEIDBMmslaZJWwhMzRIeL2yZAfqCY2bIH2A8NUTWrjOHsRQPSHO3kZP8VegnLALJGNo4z++YoIskmF2HMRQN0F+q5/nEiLNBFkS+y7yfM0EuRQ/Iq+nmXCEIpFmwjkK+XoJHor19BI6KBapJTRRxtdKuEKZnlKCi1KRUsItyvkqCY0Jyh2rJOzgHqFKQoz7zBQStnCvY61PU+XC+hOaqDCrPaGLCscK3y9UCOtOOEKlWc0JP/cq1ZbAX2WYwAQm2O9f4EYSJjCBCUxgQrX23ub2HSIiIiIiIiIiIiIiIiIiIiIiIiKif/MHRAD9DcnwUkAAAAAASUVORK5CYII=';
            },
            error => {
               alert('Error!');
            });
      }
   }

   fileEvent(event: any) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.image = reader.result;
      }, false);
      if (event.target.files[0]) {
         reader.readAsDataURL(event.target.files[0]);
      }
   }
}

import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// weatherImage: string;
// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  daysOfTheWeek = [];
  username = window.localStorage.username;


  constructor(private router: Router) { }


  ngOnInit() {

    this.getDailyForecast().then(forecast => {
      this.daysOfTheWeek = forecast;

    });


    
  }

  getImageFromCode(imageCode) {
    let weatherImage: string;

    if (imageCode > 199 && imageCode < 300) {
      weatherImage = "https://cdn3.iconfinder.com/data/icons/weather-16/256/Storm-512.png";
    } else if (imageCode > 299 && imageCode < 400) {
      weatherImage = "../weather-images/drizzle.png";
    } else if (imageCode > 499 && imageCode < 600) {
      weatherImage = "../weather-images/rain.png";
    } else if (imageCode > 599 && imageCode < 700) {
      weatherImage = "../weather-images/snow.png";    
    } else if (imageCode > 699 && imageCode < 800) {
      weatherImage = "../weather-images/wind.png";
    } else if (imageCode === 800) {
      weatherImage = "data:image/png;base64,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";
    } else if (imageCode > 800 && imageCode < 900) {
      weatherImage = "../weather-images/cloudy.png";
    }

    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlnJZVA8k14dEu3O1S0ZEuEvs1EI_5vr4_g&usqp=CAU";
  }


  async getDailyForecast() {
    
    const request = await fetch("http://localhost:8080/weather");
    const forecast = await request.json();
    return forecast;
  }

  //delete user
  async deleteUser(username) {
    const settings = {
      method: 'DELETE',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
    };
    const request = await fetch(`http://localhost:8080/user/${username}`, settings);
    const deleted = await request.json();
    console.log(deleted);
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  //update user password
  async updatePassword(username, newPassword) {
    
    const testObject = {
      password: newPassword
    };
    const settings = {
      method: 'PUT',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(testObject)
  };
    const request = await fetch(`http://localhost:8080/update-password-by-username/${username}`, settings);
    const updatedUser = await request.json();
    console.log(updatedUser);
  }



}

// export class AddActivity {

//   animal: string;
//   name: string;

//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     const dialogRef = this.dialog.open(AddActivityDialog, {
//       width: '250px',
//       data: {name: this.name, animal: this.animal}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }

// }

// @Component({
//   selector: 'add-activity-dialog',
//   templateUrl: './add-activity/add-activity-dialog.html',
// })
// export class AddActivityDialog {

//   constructor(
//     public dialogRef: MatDialogRef<AddActivityDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
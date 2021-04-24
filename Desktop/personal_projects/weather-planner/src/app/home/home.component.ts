import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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

  constructor() { }

  async getDailyForecast() {
    
    const request = await fetch("http://localhost:8080/weather");
    const forecast = await request.json();
    return forecast;
  }



  ngOnInit() {

    this.getDailyForecast().then(forecast => {
      this.daysOfTheWeek = forecast;
    });
    // console.log(this.getDailyForecast());
    
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
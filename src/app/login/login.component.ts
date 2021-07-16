import { Component, OnInit } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common'; 
// import {fetch} from 'node-fetch';


//testing out git changes
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // userCredsAccepted: boolean;
  // returnUrl: string;
  // myLocation: Location;
  message: string;

  constructor(private route: ActivatedRoute, private router: Router) { 
    }
    
    
  
  ngOnInit() {


    // this.updatePassword().then(updatedUser => {
    //   return updatedUser;
    // });

    // this.deleteUser(this.id).then(deleted => {
    //   return deleted;
    // });


  }


  //for user login
  async loginUser(username, password) {
    const request = await fetch(`http://localhost:8080/login-user/${username}`)
    // const userInfo = await response.json();
    const userInfo = await request.json()
    console.log(userInfo);
    if(userInfo.password === password) {
        window.localStorage.setItem("username", username)
        this.message = "You are logged in!"
        this.router.navigate(['/home']);
      } else {
        console.log("nope, they don't match");
        this.message = "Hmm.. looks like your username or password aren't quite right. Try that again."
      }
  }
  
  
    
  //delete user
  async deleteUser(id) {
    const settings = {
      method: 'DELETE',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
    };
    const request = await fetch(`http://localhost:8080/user/${id}`, settings);
    const deleted = await request.json();
    console.log(deleted);
  }



  //update user password
  async updatePassword() {
    const id = 1;
    const testObject = {
      password: "PassAgain"
    };
    const settings = {
      method: 'PUT',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(testObject)
  };
    const request = await fetch(`http://localhost:8080/user/${id}`, settings);
    const updatedUser = await request.json();
    console.log(updatedUser);
  }



  //register user; add method to check if user exists
  async registerUser(username, password) {
    const registrationCreds = {
      password: password,
      username: username
    };

    console.log(registrationCreds);

    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationCreds)
    };
    const newUserData = await fetch("http://localhost:8080/user", settings).catch((err) => { console.error(err); });

    this.message = "Success! You are now registered."
  }



  //get user id and password from username
  async getUser(username) {
    const request = await fetch(`http://localhost:8080/check-for-user/${username}`);
    const userInfo = await request.json();
    console.log("GET RETURN: ", userInfo);
    return userInfo;
  }



  //working code to better check if a user exists before creating a new user
  async checkAndRegister(username, password) {
    let userValue = await this.getUser(username).then(userCreds => {
      if (userCreds.length > 0) {
        this.message = "Sorry, that username already exists"
      } else {
        this.registerUser(username, password)
        this.message = "Success! You are now registered."
      }
    //  return userCreds;
    });
  }

}

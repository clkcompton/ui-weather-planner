import { Component, OnInit } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common'; 
// import {fetch} from 'node-fetch';

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


    // this.getUser("testUser")

    // this.updatePassword().then(updatedUser => {
    //   return updatedUser;
    // });

    // this.deleteUser(this.id).then(deleted => {
    //   return deleted;
    // });

    // this.route.queryParams.subscribe(params => {
    //   this.returnUrl = params[''];
    // });

    console.log(window.localStorage)
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
        this.router.navigate(['/']);
      } else {
        console.log("nope, they don't match");
        this.message = "Hmm.. looks like your username or password aren't quite right. Try that again."
      }
  }
    


    async getUser(username) {
      const request = await fetch(`http://localhost:8080/user/${username}`);
      const userInfo = await request.json();
      console.log(userInfo);
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
    const test = await fetch("http://localhost:8080/user", settings).catch((err) => { console.error(err); });

    this.message = "Success! You are now registered."
  }

  // async checkAndRegister(username, password) {
  //   if (this.getUser(username).id) {
  //     this.registerUser(username, password)
  //     this.message = "Success! You are now registered."
  //   } else {
  //     this.message = "Sorry, that username already exists"
  //   }
  // }

}

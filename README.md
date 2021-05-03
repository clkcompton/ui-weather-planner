# Weather Planner

**Description:**
A weather app that lets the user search future dates for their ideal weather scenario.

Example: I want to plan a time to go camping but am reliant on the weather. With the app, I could select my ideal camping weather conditions - no rain, on a weekend, sunny, low wind - and the app will show me which upcoming dates meet my requirements.

<img src="https://user-images.githubusercontent.com/74030805/116892393-67b22f00-abf5-11eb-8362-4172f486b5a7.png" width="300">

<img src="https://user-images.githubusercontent.com/74030805/116892361-6123b780-abf5-11eb-9681-adea2b73292f.png" width="300">

<img src="https://user-images.githubusercontent.com/74030805/116893848-0be8a580-abf7-11eb-8dd8-5ec0e8881f26.png" width="300">



**Set-up notes**
* architecture diagram (ui, open weather, api, database)
* Install the API fpr this project from [here](https://github.com/clkcompton/api-weather-planner.git). Check API readme for setup instructions (database creation, endpoints, weather API, etc.).
* Run `npm i` within the project directory to install project dependencies
* Install global dependencies. These are the global dependencies I used along with the recommended versions:
	* @angular/cli@8.2.2
	* npm@7.10.0
	* typescript@4.1.2
* Run application with (`npm run start`)


### Features
Log in/log out/user registration

Main page with past user preferences/searches
* Edit/delete weather preferences
* Select the fields to be edited/deleted
	
User entry/drop down selections for weather conditions
* Activity name, temperature, precipitation, sunny/cloudy, wind
	
Calling a weather API and comparing it to the user's selected weather preferences 
* API will search at least a week into the future for the selected criteria
* Returns results
	
Post screen that lets the user see the results of their search
* Easy to read, labeled results
* Redirect button to return to the home page![Uploading 2Login_weather-planner.png…]()



**running the api**
* endpoint file (API readme)
* get open weather api key (free); add instructions
* nodemon@2.0.7 (for API)
* Create mysql database with two tables, `user` and `activity` (provide mysql link) (maybe add a query)

### Technologies
* JS
* Node.js
* MYSQL
* HTML
* Open Weather API (One Call)


### Dependencies
* Angular
* Node.js
* Express

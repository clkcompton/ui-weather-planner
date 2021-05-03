# Weather Planner

**Description:**
A web app that lets the user search the week's forecast for their ideal weather scenario.

User scenario: I want to plan a time to go camping but am reliant on the weather. With the app, I could select my ideal camping weather conditions - no rain, minimum temperature of 55°, sunny, low wind - and the app will show me which upcoming dates meet my requirements.

Please note, this project's functionality relies on TWO repositories, ui-weather-planner and [api-weather-planner](https://github.com/clkcompton/api-weather-planner.git) repositories. 

<img src="https://user-images.githubusercontent.com/74030805/116892393-67b22f00-abf5-11eb-8362-4172f486b5a7.png" width="300">

<img src="https://user-images.githubusercontent.com/74030805/116892361-6123b780-abf5-11eb-9681-adea2b73292f.png" width="300">

<img src="https://user-images.githubusercontent.com/74030805/116893848-0be8a580-abf7-11eb-8dd8-5ec0e8881f26.png" width="300">



**Set-up notes**
* Install the API for this project from https://github.com/clkcompton/api-weather-planner.git. Check API readme for setup instructions (database creation, endpoints, weather API, etc.).
* Run `npm i` within the project directory to install project dependencies
* Install global dependencies. These are the global dependencies I used along with the recommended versions:
	* @angular/cli@8.2.2
	* npm@7.10.0
	* typescript@4.1.2
* Run application with `npm run start` and view project in the browser at http://localhost:4200/


### Features
**Log in/log out/user registration**

**Main page with past user preferences/searches**
* Results of forecast/activity comparisons are easy to read; thumbs up image if the day's forecast matches the user's preferences, thumbs down if not
* * Forecast for each day is displayed
* Edit/delete weather preferences
	
**Ability to create a new activity and preferences**
* User entry for activity name and min/max temperature
* Drop down selection for weather type (clear skies, rainy, clouds, etc.)
* Shows forecast comparison results upon submission
	
**Calling a weather API and comparing it to the user's selected weather preferences**
* Weather API searches one week into the future for the selected criteria
	* Note: the application has been set up to accomidate searching further into the future. However, Weather APIs that search further into the future require a paid subscription.
* Returns results to the weather planner API

### Technologies 
* Typescript
* Javascript
* HTML/CSS
* Node.js (required for API)
* MYSQL (required for API)
* Open Weather API (One Call) (required for API)


### Dependencies
* Angular
* Node.js (required for API)
* Express (required for API)

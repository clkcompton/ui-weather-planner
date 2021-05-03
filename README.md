# Weather Planner

**Description:**
A weather app that lets the user search future dates for their ideal weather scenario.

Example: I want to plan a time to go camping but am reliant on the weather. With the app, I could select my ideal camping weather conditions - no rain, on a weekend, sunny, low wind - and the app will show me which upcoming dates meet my requirements.

*TODO*
1. Review description/problem statement
1. Link to API (https://github.com/clkcompton/api-weather-planner.git)
1. Screenshot
2. Set-up notes

**Set-up notes**
* angular/node updates
* architecture diagram (ui, open weather, api, database)
* endpoint file
* get open weather api key (free); add instructions
* run npm i to install deoendencies
* create mysql database (provide mysql link) (maybe add a query)
* check global dependenecies (`npm list -g --depth 0`)
* command to run programs (`npm run start`)


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
* Redirect button to return to the home page


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

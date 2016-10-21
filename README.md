# Wanderluster
Wanderluster uses the MEAN stack and all four http verbs for RESTful routing. It allows the user to sign up, log in, and provides the opportunity to log where the user wants to visit and where they have visited. The app also interacts with a third party API, OpenWeatherMap, to provide current weather conditions.

## Feature Specs
```markdown
1. When a user visits '/',
  1.1. they will see the site's home page.
    1.1.1. a link to log in or sign up.
2. When a user visits '/signup',
  2.1. they will see a signup form.
    2.1.1 after signing up will be redirected to '/login'.
3. When a user visits '/login',
  3.1. they will see  a login form.
    3.1.1. after logging in will be redirected to '/profile'.
4. When a user visits '/profile',
  4.1. they will see their profile page and,
    4.1.1. a link to add a destination ('/addpage').
    4.1.2. a link to view places to visit ('/tovisit').
    4.1.3. a link to view places visited ('/visited').
    4.1.4. brief overview on functionality of app.
5. When a user visits '/addpage',
  5.1. they will see a form to add a new city and,
    5.1.1. the city will be added to the user's model.
    5.1.2. the city will be added to the '/tovisit' state.
      5.1.2.1 they will be redirected to '/tovisit'.
6. When a user visits '/tovisit',
  6.1. they will see a list of all places they wish to visit and,
    6.1.1. a button to edit the place,
      6.1.1.1. will be redirected to '/editplace'.
    6.1.2. a button to move the place,
      6.1.2.1. will move the place to '/visited'.
7. When a user visits '/visited'
  7.1. they will see a list of places they have visited.
8. When a user visits '/editplace',
  8.1. they will see a form to edit the place,
    8.1.1. they may enter a new city and save,
      8.1.1.1. will update city and redirect to '/tovisit'
  8.2. a button to delete the place,
    8.2.1.1. will remove the place,
    8.2.1.2. will be redirected to '/tovisit'.
```

## Technologies
-**Node.js**
-Allowed the creation of a server and used various node modules written in Javascript.

-**MongoDB, Mongoose**
-The data models are stored in a NoSQL database, in which Mongoose was used to query and interact with that database(MongoDB).

-**JavaScript, HTML, CSS**
-The app is written entirely in JavaScript, and the structure and styling were implemented with HTML and CSS.

-**angularJS**
-The app utilizes angularJS as a front-end framework to dynamically display different states and the user's information.

-**OpenWeatherMap API**
-The app interacts with the api to provide live weather data for the places the user has visited and would like to visit.

## Approach
Wire frames were constructed as a means to layout the foundation of the website. User stories are hosted on Trello and served as a means of monitoring the status of the project throughout our week.


**Wire Frames**

1. https://wireframe.cc/lDoFU3
2. https://wireframe.cc/ByKjRP

**User Stories**

https://trello.com/b/wAoOsjzl/project-3-wanderluster

## Entity Relationship Diagram

User Schema:
* firstName: String
* lastName: String
* email: String
* password: String
* createdAt: Date
* updatedAt: Date
* placesToVisit: [Place Schema]
* placesVisited: [Place Schema]

Place Schema:
* city: String
* country: String
* weatherDesc: String
* temp: Number
* humidity: Number
* icon: png file

## Unsolved Problems
1. Because the controller is reinstantiated on each state, our login/logout ng-show/ng-hide only works on a page refresh.
2. The weather shown is the current weather at that time and saved, so when you look back at it later it doesn't show the current weather but only the weather at which the element was created.
## Notes for the Future
1. Add a blogging component to the app for user's to document their travel.
2. Add update and delete logic to the places the user has visited.

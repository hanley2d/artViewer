# artViewer
## Mobile Art Application Using the Art Institute of Chicago API

## CS 455 - Mobile Computing: React-Native Project

## Table of Contents
1. [Project Description](#project-description)
2. [Features](#features)
3. [Installation Instructions](#installation-instructions)
4. [Operating Instructions](#operating-instructions)
5. [File Manifest](#file-manifest)
6. [Copyright Information](#copyright-information)
7. [Contact Information](#contact-information)
8. [Bug List](#bug-list--shortcomings)
9. [Troubleshooting](#troubleshooting-tips)
10. [References and credits](#references-and-credits)

## Project Description

This project is a React Native application for viewing artwork and information from the Art Institute of Chicago's public API. The AIC API is a REST-style API that provides data on tonnes of information regarding the Arts Institute of Chicago. This app fetches data from the API about artork located in the museum. It allows the user to search for artwork as well as browse categories and view artwork at random.

### Purpose
One of the main purposes of this project on a personal level was to learn how to work with an API. Fetching data in React Native is made relatively simple with the [Fetch API](https://reactnative.dev/docs/network) method. The more difficult part is fetching the data exactly when you need it. The React useEffect hook can be used to fetch data only when specific events occur, for example, when a state is updated. This application uses the useEffect hook combined with the Fetch API in order to fetch data from the AIC API only when requested by the user. Probably some of the methods I used are naive and may not always follow the best practices, but I believe it works well enough for the purposes of this application.

The reason I chose to work with this specific API is because I enjoy museums. I visited the Art Institute of Chicago a few years ago and was very impressed. I hope to go back someday but, being a university student during a global pandemic, now is not the best time to do that. This app allows me and any other user to see the artwork from anywhere without having to be in Chicago, albeit on a small, somewhat unimpressive screen.

### AIC API
The [AIC API](https://api.artic.edu/docs/) is publicly available for use without need of authorization. Unauthorized users are permitted to make 60 requests to the API per minute before their IP address is timed out. Unless there is a bug that I have not encountered, the way the application is designed should make it quite difficult to exceed that number, although a user could potentially be timed-out by spamming button presses. This app requests only a small amount of information of what is available, including the art id, artist information, title, medium, dominant colour as well as the image id. The image id is required in order to hotlink the images in the application, which is the recommended practice by the AIC. Displaying all the different images can be done by inserting the image id into an address provided by the AIC like so: 
```javascript
const image_link = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
```


## Features and Operating Instructions

### Main Features


<img align="left" style="float:left;margin-right: 25px" src="./assets/gifs/search.gif" width="25%">  

#### Search Artwork
The SearchArtwork screen allows the user to search for any artwork in the AIC collection. While the fetch request is being performed an activity indicator (spinning circle thing) will appear until the data can be loaded. Once the data has been fetched, the response object will be loaded into a flatlist of cards which features a cropped image of the artwork as well as the title and artist name. The user is also able 

<br clear="left"/>
<br />

<img align="left" style="float:left;margin-right: 25px" src="./assets/gifs/pagination.gif" width="25%">

#### Pagination
Search results are paginated in pages of 10 items. The user can proceed to the next page or backtrack to the previous page. 

<br clear="left"/>
<br />


<img align="left" style="float:left;margin-right: 25px" src="./assets/gifs/browse.gif" width="25%">

#### Browse Art Categories
Users who aren't certain what to search can also browse certain collections by category.  

<br clear="left"/>
<br />

<img  align="left" style="float: left; margin-right: 25px" src="./assets/gifs/random.gif" width="25%">

#### View a Random Artwork

Want more variety? The random artwork screen allows the user to randomly select one of the over 100 000 pieces of artwork from the AIC.  

<br clear="left"/>
<br />

### Smaller Features

## Installation Instructions

## Operating instructions


## File Manifest


- App.js: This is the main App file for the project. It controls the navigation of the application. A tab navigator is used instead of the stack navigator that we were shown in class. It effectively functions in the same way, except the tab navigator has a built-in navigation bottom bar which I felt worked nicely for this applicatoin.
- view/ArtSearch.js: this page allows users to make their own queries to the API using the searchbar.
- view/ArtDetail.js: This screen is displayed when the user presses the "more details" button on one of the flatlist items in ArtSearch.js and BrowseCellections.js.
- view/BrowseCollection.js: This file is the screen for the Browsing Collection. It is very similar to the ArtSearch screen, the difference being that the search queries are predetermined as buttons with subjects.
- view/RandomArt.js: This file is the screen for displaying random artwork. It is fairly similar in function to the ArtDetail page.
-


## Copyright information

## Contact information

## Bug list / shortcomings

## Troubleshooting tips

## References and credits
[1]: https://api.artic.edu/

Ultimately, the purpose of a README is to instruct the user as to what the application does, how it is compiled and installed and how the application is used. A user should be able to build, run and use your application with minimal effort. If the user encounters an issue, they should be able to get support, therefore you should include some instructions for troubleshooting and a way to contact you in case that fails. Note that it is good practice, although it is not required, that you do not commit directly to a master branch, instead pull from a working branch when changes are considered final.

Other features that contribute to a great README file may include:

     A project logo
     Project badges
     Demo screenshots / gifs
     Table of contents
     Concise project description
     Clear install instructions
     Features list
     Links to further reading
     Change log



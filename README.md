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

## Project description

This project is a React Native application for viewing artwork and information from the Art Institute of Chicago's public API. The AIC API is a REST-style API that provides data on tonnes of information regarding the Arts Institute of Chicago. This app fetches data from the API about artork located in the museum. It allows the user to search for artwork as well as browse categories and view artwork at random.

### Purpose
One of the main purposes of this project on a personal level was to learn how to work with an API. Fetching data in React Native is made relatively simple with the [Fetch API](https://reactnative.dev/docs/network) method. The more difficult part is fetching the data exactly when you need it. The React useEffect hook can be used to fetch data only when specific events occur, for example, when a state is updated. Probably some of the methods I used for this project are naiive and may not always follow the best practices, but I believe it works well enough for the purposes of this application.

The reason I chose to work with this specific API is because I enjoy museums. I visited the Art Institute of Chicago a few years ago and was very impressed. I hope to go back someday but, being a university student during a global pandemic, now is not the best time to do that. This app allows me and any other user to see the artwork from anywhere without having to be in Chicago, albeit on a small, somewhat unimpressive screen.

### AIC API


Information about the API can be found here https://api.artic.edu/docs/.
https://iiif.io/api/image/2.0/

## Features
### Search Artwork
<img src="./assets/gifs/search.gif" width="25%">

### Pagination
<img src="./assets/gifs/pagination.gif" width="25%">

### Browse Art Categories

<img src="./assets/gifs/browse.gif" width="25%">

### View a Random Artwork

<img src="./assets/gifs/random.gif" width="25%">


## Installation instructions

## Operating instructions

## File Manifest
```
- App.js
- view/ArtSearch.js
- view/ArtDetail.js
- view/BrowseCollection.js
- view/RandomArt.js
-
```
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



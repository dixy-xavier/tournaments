# Tournaments
UI for listing tournaments

## Prerequisites
* node - for installation visit https://nodejs.org/en/download/

* npm - for installation visit https://www.npmjs.com/get-npm

* json-server - for installation run command `npm i -g json-server`

* Google chrome - for opening the application

## Steps to run
`npm i -g json-server`

`git clone https://github.com/dixy-xavier/tournaments.git`

`cd tournaments`

`npm i`

`json-server -p 3000 --watch db.json`

`npm start`

Open http://localhost:8080 to view it in the browser


## Explanation
The home page will list all the tournaments with its name, city, series name, start date and end date.
There are 2 filters:
* Filter by series name - the input provided will serve this purpose
* Filter by start and end date - next 2 buttons would show calendars to select start and end date. This will filter the tournaments whose start date lies between the selected start and end date

On click on each tournament you could see the details of the same in a popup.

The tournament list is provided inside db.json. And using json-server, a server is setup to fetch the list. The url to fetch list is as below:
http://localhost:3000/tournaments

# Assignment 3 - Backend

- _Date Created_: 14 March 2022
- _Last Modification Date_: 29 Mar 2022
- _Git URL_Backend_: https://git.cs.dal.ca/kmistry/csci-5709-group-12-backend
- _Front End and Overall Deployment URL_: https://housify-group12.herokuapp.com/

## Authors

- [Dhruv Oza](dhruv.oza@dal.ca) - _(Maintainer)_
- [Kushang Arunbhai Mistry](kushang.mistry@dal.ca) - _(Maintainer)_
- [Rishabh Domadiya ](rs582144@dal.ca) - _(Maintainer)_
- [Sanjuna Konda](sn493898@dal.ca) - _(Maintainer)_
- [Vishvesh Naik](Vishvesh@dal.ca) - _(Maintainer)_

## Code Integration

- Initially we developed every features individually, fetched the code from main branch and developed the feature.
- After development, pushed and merged everyones development into main branch as a central development repository, ready for deployment to the Heroku.

## Getting Started

In this assignment, as this is the backend of the application of 'Housify', one can explore the backend while running the application locally by following steps as mentioned below.

### Prerequisites

- [Node](https://nodejs.org/en/download/) - NodeJS, A Java Script runtime.

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

Here are steps to follow to get a development environment running.
(At this point, we assume that 'Node' as mentioned above in installed in local environment)

Note: There are some libraries which were used to create this backend are: express, jsonwebtoken, mongoose, body-parser, cors

Step 1: To verify if Node is installed on the system, open a command prompt (if windows), and write `node` to the terminal, verify that system will respond with valid node version.

i.e.,

```
Welcome to Node.js v16.13.2.
Type ".help" for more information.
```

Step 2: Open a folder in any code editor such as [VS Code](https://code.visualstudio.com/)

Step 3: Clone remote git repository by running following command in cmd: `git clone https://git.cs.dal.ca/kmistry/csci-5709-group-12-backend`

Step 4: As you can observe the source code has been pulled from the reomote repository, now move to the cloned git directory.

Step 5: It is a time to install all the dependencies which are necessary to run Assignment 3 frontend, to do that, run following command in the cmd: `npm install` / `npm i`

Step 6: We have all the dependencies installed, we can run the application, for that run the following command in the cmd: `npm start`

This way, the "Assignment 3" backend project is up and running on the local host and you can interact with the application now either through running front end or using the tool such as [POSTMAN](https://www.postman.com/)

## Built With

- [Heroku](https://www.heroku.com/) - A platform to deploy
- [Node](https://nodejs.org/en/download/) - A language to develope back-end api, in conjuction with express
- [VS Code](https://code.visualstudio.com/) - A code editor
- [express](https://www.npmjs.com/package/express) - A Node.js framework for server development.
- [jsonwebtoken](https://jwt.io/) - Json Web Token for user authentication purposes.
- [mongoose](https://www.npmjs.com/package/mongoose) - A MongoDb object modeling tool for node.js
- [body-parser](https://www.npmjs.com/package/body-parser) - A middleware for parsing request body
- [cors](https://www.npmjs.com/package/cors) - Cross Origin Resource Sharing middleware

## Acknowledgments

- Professor and all the TAs who taught and gave direction while needed, and Marker who provided valuable feeback everytime.
- Heroku for backend deployment platform.

### NOTE: This README.md is derived from README.md written by [Kushang Arunbhai Mistry](kushang.mistry) for Assignment 3 Individual submission.

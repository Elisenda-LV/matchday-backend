## Matchday - Backend

Matchday is an app designed to manage leagues, tournaments, and teams for players of all sports.

This REST API, developed with Node.js, Express, and Sequelize to connect to a MariaDB database, includes user authentication features such as register, login, forgot password, change password and log out.


### 📌 Install and Run

To install this project, follow these steps:

1. Clone the repository to your local machine: https://github.com/Elisenda-LV/matchday-backend.git
2. Install dependencies using npm install.
3. Download the file: matchday.sql.
4. The server will be available at http://localhost:3003 by default.

To run the project, use the following command:

```
npm start

```

### 📌 Project Estructure

The project structure follows a modular design to facilitate scalability and maintenance. Below, the main folders and files are described:

####/src (Source):
- /config: Project configurations.
- /controllers: Business logic controllers.
- /middlewares: Custom middleware.
- /models: Data model definitions.
- /routes: Definition of routes and associated controllers.
- /utils: Utilities and auxiliary functions.
- /validations: Used to ensure the integrity and consistency of data in an application.


### 📌 Endpoints

#### To Authenticate Users:

- POST /auth/register : User registration.
- POST /auth/login : User login.
- POST /auth/forgot-password : User forgot password.
- POST /auth/change-password : User change password.
- POST /auth/logout : User logout.


#### Users

- GET /users/:id : Show users by ID.

*Note: Replace :id with the corresponding users ID.*


#### Leagues

- GET /leagues : Show all leagues.
- GET /leagues/:id : Show a league by ID.
- POST /leagues : Add a new league.
- PUT /leagues/:id : Update a league.
- DELETE /leagues/:id : Deleate a league.

*Note: Replace :id with the corresponding league ID.*


#### Teams

- GET /teams : Show all teams.
- GET /teams/:id : Show a team by ID.
- POST /teams : Add a new team.
- PUT /teams/:id : Update a team.
- DELETE /teams/:id : Deleate a team.

*Note: Replace :id with the corresponding team ID.*


#### Players

- GET /players : Show all players.
- GET /players/:id : Show a player by ID.
- POST /teams : Add a new player.
- PUT /teams/:id : Update a player.
- DELETE /teams/:id : Deleate a player.

*Note: Replace :id with the corresponding player ID.*


#### Sports

- GET /sports : Show all sports.


### 📌 Error Handling

Matchday incorporates a consistent error-handling system to deliver clear and meaningful responses. Below, you will find descriptions of common HTTP status codes along with examples of responses:

#### Client Errors:

**400 (Bad Request)** 
Description: The request could not be processed due to incorrect syntax or invalid parameters.
Example response:

```
{
  "error": "Bad Request",
  "message": "Invalid parameters in the request."
}

```

#### Server Errors 

**500 Internal Server Error**
Description: Generic server error when the exact cause cannot be determined.
Example response:

```
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred on the server."
}

```


### 📌 Contributions

Thank you for considering contributing to the project! If you wish to contribute, follow these steps:

**1. Fork the Project:**
Fork the project using the "Fork" button at the top right of the page.

**2. Clone Your Forked Repository:**
Clone the repository to your local machine with the command:

```
git clone https://github.com/Elisenda-LV/matchday-backend.git

```

**3. Create a Branch:**
Create a branch for your contribution:

```
git checkout -b your-branch-name

```

**4. Make Changes:**
Make the necessary changes in your branch.

**5. Commit Changes:**
Commit changes with descriptive messages:

```
git commit -m "Description of the changes"

```

**6. Push Your Changes:**
Push your changes to your repository:

```
git push origin your-branch-name

```

**7. Open a Pull Request (PR):**
Open a PR from your branch to the project's main branch.
Provide a clear and detailed description of your changes.

**8. Code Review:**
Proposed changes will be reviewed and discussed before merging.


#### Contribution Guidelines:

- Clearly describe the purpose of your contribution.
- Follow the coding style and project guidelines.
- Ensure your changes do not break existing functionalities.
- Document any significant change in the README or relevant documentation.


**Thank you for your contribution!**

# bearer-auth

## About

The server will allow users to sign up and sign in using bearer authentication, when siging up, it will give the use a token that they can use to sign in. Besides, the sever allows basic authentication for both signing up and signing in.

<hr>

## Author

#### Amjad Mesmar

<hr>

## Links

- [Repo](https://github.com/AmjadMesmar/bearer-auth)

- [Submission Pull Request](https://github.com/AmjadMesmar/bearer-auth/pull/1)

- [Deployed App](https://souls-bearer-auth.herokuapp.com/)

- [Action Report](https://github.com/AmjadMesmar/bearer-auth/actions)

<hr>

## Setup

1. ***(.env)*** file:

```

PORT=5000
MONGODB_URI=mongodb+srv://souls:55555@cluster0.upvew.mongodb.net/bearer-auth
SECRET=5555

```

2. Install the following dependencies

```

"dependencies": {
"@code-fellows/supergoose": "^1.1.0",
    "base-64": "^1.0.0",
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.12.11",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "jest": "^27.0.1",
    "supergoose": "^0.2.6",
    "supertest": "^6.1.3"
  }

```

<br>

## Running the app

1. clone the repo.
2. Enter the command `npm start`
3. Use endpoints :

<br>

## signup

### `*/signup`

<br>

- **Method**: post
- ***Basic Authentication sign up and will give token***
- **Response Body**: JSON

```

{
    "user": {
        "_id": "60ad70100202017cbf68f834",
        "username": "melon2",
        "password": "$2b$10$2FxLGO3HXYRlRFuyXUtjauN7UsdTmS.O89Q/Dnf4/bFTR0bXJeP52",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbG9uMiIsImlhdCI6MTYyMTk3OTE1MywiZXhwIjoxNjIxOTc5NzUzfQ.ZWh7F9MuFgKwuwZgekjcMYszmMN0WFII_kIvmNM-B7Q"
}

```

## Signin

### `*/signin`

<br>

- **Method**: POST
- ***Basic Authentication Login***
- **Response Body**: JSON


```

{
    "user": {
        "_id": "60ad70100202017cbf68f834",
        "username": "melon2",
        "password": "$2b$10$2FxLGO3HXYRlRFuyXUtjauN7UsdTmS.O89Q/Dnf4/bFTR0bXJeP52",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbG9uMiIsImlhdCI6MTYyMTk3OTIyMywiZXhwIjoxNjIxOTc5ODIzfQ.wLI4_OxNqJ1USPu7TNZAYS9YokZngDY02NLbD9-AgJc"
}

```

<br>

## secret

### `*/secret`

<br>

- **Method**: get
- ***Sign in using bearer authentication using token and secret***
- **Response Body**: Text


```

 Welcome to the secret area!


```

<br>



4. Test:

- To test the server write in terminal:

```
npm test
```

<br><br><br>

<hr>

<br><br>

## UML Diagram

![Uml diagram](./Bearer-Auth.png)

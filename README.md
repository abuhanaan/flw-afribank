# FLW-Afribank

## Getting Started

The following steps are to be followed to set up the web server locally

- Run `npm install` to install the required dependencies
- Create a .env file, copy the content of .env.example file and replace the placeholders accordingly
- Provided that a database is already in place and its name is included in the .env file in the step above, run the command below for db migration.

  `sequelize-cli db:migrate`

- To start the server, run the command `npm start` on your terminal

## API Reference/Documentation

- Baseurl: https://tiny-lime-blackbuck-gown.cyclic.app

---

### Error Handling

Error responses are returned in the format below

```
{
  "success": false,
  "status": "Short error message",
  "message": "Detailed error message"
}
```

The API will return these error types when requests fail:

- 400: Bad Request
- 404: Resource Not Found
- 409: Conflict Operation
- 500: Internal Server Error

---

### Endpoints

#### POST `/accounts`

- General

  - Creates a new bank account
  - Request Arguments: None

- Sample Request:

```json
POST https://tiny-lime-blackbuck-gown.cyclic.app/accounts
Content-Type: application/json

{
    {
    "accountName": "Adewumi Ayomide",
    "dob": "2000-05-15",
    "accountType": "Savings",
    "initialBalance": "1500"
    }
}
```

- Sample Response:

```json
{
  "success": true,
  "status": "Account created successfully",
  "data": {
    "accountName": "ADEWUMI AYOMIDE",
    "accountNumber": 9130855159,
    "DOB": "2000-05-15T00:00:00.000Z",
    "accountType": "SAVINGS",
    "initialBalance": 1500
  }
}
```

#### GET `/accounts/{accountNumber}`

- General

  - Fetches an account by accountNumber
  - Request Arguments: accountNumber (account fo the account to be resolved)

  ```json
  GET https://tiny-lime-blackbuck-gown.cyclic.app/api/v1/accounts/9947692628
  ```

  - Sample Response:

  ```json
  {
    "success": true,
    "status": "Fetched",
    "message": "Account Retrieved Successfully",
    "data": {
      "accountName": "MUSTOPHA QOMORUDEEN",
      "accountNumber": "9947692628",
      "dob": "1995-10-28T00:00:00.000Z",
      "accountType": "CURRENT",
      "initialBalance": 5000
    }
  }
  ```

#### GET `/accounts`

- General

  - Fetches all accounts
  - Request Arguments: None

  ```json
  GET https://tiny-lime-blackbuck-gown.cyclic.app/api/v1/accounts
  ```

  - Sample Response:

  ```json
  {
    "success": true,
    "status": "Accounts Retrieved Successfully",
    "data": [
      {
        "accountName": "ADEWUMI AYOMIDE",
        "accountNumber": "9130855159",
        "dob": "2000-05-15T00:00:00.000Z",
        "accountType": "SAVINGS",
        "initialBalance": 1500
      },
      {
        "accountName": "MUSTOPHA QOMORUDEEN",
        "accountNumber": "9947692628",
        "dob": "1995-10-28T00:00:00.000Z",
        "accountType": "CURRENT",
        "initialBalance": 5000
      }
    ]
  }
  ```

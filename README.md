# FLW-Afribank

## Getting Started

The following steps are to be followed to set up the web server locally

- Run `npm install` to install the required dependencies
- Create a .env file, copy the content of .env.example file and replace the placeholders accordingly
- Provided that a database is already in place and its name is included in the .env file in the step above, run the command below to start the server.

  `npm start`

## API Reference/Documentation

- Baseurl: https://flw-afribank.cyclic.app

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
POST https://flw-afribank.cyclic.app/accounts
Content-Type: application/json

{

  "accountName": "Adewumi Ayomide",
  "dob": "2000-05-15",
  "accountType": "Savings",
  "initialBalance": "1500"
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
  - Request Arguments: accountNumber (account number of the account to be resolved)

  ```json
  GET https://flw-afribank.cyclic.app/api/v1/accounts/8920655909
  ```

  - Sample Response:

  ```json
  {
    "success": true,
    "status": "Fetched",
    "message": "Account Retrieved Successfully",
    "data": {
      "accountName": "QOMORUDEEN MUSTOPHA",
      "accountNumber": "8920655909",
      "dob": "1978-10-16T00:00:00.000Z",
      "accountType": "SAVINGS",
      "initialBalance": 16000
    }
  }
  ```

#### GET `/accounts`

- General

  - Fetches all accounts
  - Request Arguments: None

  ```json
  GET https://flw-afribank.cyclic.app/api/v1/accounts
  ```

  - Sample Response:

  ```json
  {
    "success": true,
    "status": "Accounts Retrieved Successfully",
    "data": [
      {
        "accountName": "OMOLARA AYOOLA",
        "accountNumber": "3323171373",
        "dob": "1985-07-20T00:00:00.000Z",
        "accountType": "SAVINGS",
        "initialBalance": 5000
      },
      {
        "accountName": "ADEWUMI AYOMIDE ",
        "accountNumber": "7997451249",
        "dob": "1978-10-16T00:00:00.000Z",
        "accountType": "SAVINGS",
        "initialBalance": 16000
      },
      {
        "accountName": "QOMORUDEEN MUSTOPHA",
        "accountNumber": "8920655909",
        "dob": "1978-10-16T00:00:00.000Z",
        "accountType": "SAVINGS",
        "initialBalance": 16000
      }
    ]
  }
  ```

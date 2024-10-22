TITLE: Personal Expense Traker

Description : This main about persnal Transaction on CRUD operation and dispaying the history

Table of Contents

here to two tables 
1 - `transactions`: { type, category, amount, date, description }
2 - `categories`: { name, type }

## Setup and Run Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB
## Navigate to project directory
cd backend


##  Install dependencies
npm init -y
npm install

### Create a .env file
PORT=5000
MONGO_URI=mongodb://localhost:27017/yourDatabaseName

## Run the server
node server.js


# API calls
 1. **Get All Transactions**
- **URL**: `/transactions`
- **Method**: GET
- **Description**: Fetch all transactions.
- **Response**:
```json
[
    {
        "_id": "6717af5f15f0acb0bde6581d",
        "type": "income",
        "category": {
            "_id": "6717ac1cafdcf732e7d9afda",
            "name": "Salary",
            "type": "income"
        },
        "amount": 2000,
        "description": "this month salary",
        "date": "2024-10-22T13:57:51.516Z"
    }
]

2. Get Transaction by ID
URL: /transactions/:id
Method: GET
Description: Fetch a transaction by ID.
Parameters:
id: Transaction ID (required)
Response:
json
Copy code
{
    "_id": "6717af5f15f0acb0bde6581d",
    "type": "income",
    "category": {
        "_id": "6717ac1cafdcf732e7d9afda",
        "name": "Salary",
        "type": "income"
    },
    "amount": 2000,
    "description": "this month salary",
    "date": "2024-10-22T13:57:51.516Z"
}

 3. Add New Transaction
URL: /transactions
Method: POST
Description: Add a new transaction.
Request Body:
{
    "type": "income",
    "category": "6717ac1cafdcf732e7d9afda",
    "amount": 2500,
    "description": "Bonus",
    "date": "2024-10-23"
}

Response:
json
Copy code
{
    "_id": "6717af5f15f0acb0bde6581d",
    "type": "income",
    "category": {
        "_id": "6717ac1cafdcf732e7d9afda",
        "name": "Salary",
        "type": "income"
    },
    "amount": 2500,
    "description": "Bonus",
    "date": "2024-10-23T13:57:51.516Z"
}

4. Update Transaction
URL: /transactions/:id
Method: PUT
Description: Update a transaction.
Parameters:
id: Transaction ID (required)
Request Body:
{
    "amount": 3000,
    "description": "Updated salary"
}
Response:
{
    "_id": "6717af5f15f0acb0bde6581d",
    "type": "income",
    "category": {
        "_id": "6717ac1cafdcf732e7d9afda",
        "name": "Salary",
        "type": "income"
    },
    "amount": 3000,
    "description": "Updated salary",
    "date": "2024-10-23T13:57:51.516Z"
}
5. Delete Transaction
URL: /transactions/:id
Method: DELETE
Description: Delete a transaction by ID.
Response:
{
    "message": "Transaction deleted successfully"
}

Postman screen shots

Here are screenshots of each API call made using Postman.

 1. Get All Transactions
![Get All Transactions](D:\personalTrakerfloww.ai\backend\screenshot\Screenshot 2024-10-22 193807.png)

2. Get Transaction by ID
![Get Transaction by ID](D:\personalTrakerfloww.ai\backend\screenshot\Screenshot 2024-10-22 195301.png)

 3. Add New Transaction
![Add Transaction](D:\personalTrakerfloww.ai\backend\screenshot\Screenshot 2024-10-22 192840.png)

 4. Update Transaction
![Update Transaction](D:\personalTrakerfloww.ai\backend\screenshot\Screenshot 2024-10-22 201942.png)

5. Delete Transaction
![Delete Transaction](D:\personalTrakerfloww.ai\backend\screenshot\Screenshot 2024-10-22 202801.png)

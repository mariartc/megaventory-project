# Megaventory project
This is a mini project developed for the hypothetical scenario of an eshop wanting to be connected to [Megaventory](https://www.megaventory.com/). Project uses Megaventory API to insert some data to the eshop's account in Megaventory. <br>
## Purpose
The purpose of this project is to insert the following data into a Megaventory account:
#### 1. Product
* SKU: 1112256
* Description: Nike Shoes
* Sales Price: 99.99
* Purchase Price: 44.99
#### 2. Client
* Name: babis   
* E-mail: babis@exampletest.com
* Shipping Address: Example 8, Athens
* Phone: 1235698967
#### 3. Warehouse
* Abbreviation: Main
* Name: Main Location
* Address: Example 20, Athens
#### 4. Tax
* Name: My shop tax
* Value: 24%
#### 5. Discount
* Name: Loyalty customers discount
* Value: 50%
#### 6. Sales order
* Client: Babis
* Product: Nike shoes
* Quantity: 2

## Development
This project was developed using node.js, and axios for the API calls. Also, dotenv module was used for the loading of the environmental variables needed.
## Requirements
* `npm` installed
* `node` installed
## Execution
In order to execute the project you need to:
* Clone the repository.
* Run `npm install` in the main directory.
* Go to [www.megaventory.com](https://www.megaventory.com/) and create an account. Then, you can generate your own API key in order to provide authentication to your API calls.
* Fill out your own API key into the `.env` file. You can change the file's urls if you wish to use another similar API.
* Run `npm run test_api_key` in the terminal, if you want to check if your API key is valid.
* Run `npm run insert` in the terminal to insert the above data to your Megaventory account.

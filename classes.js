require("dotenv").config();
const axios = require('axios');

class Product {
    constructor(sku, description, sales_price, purchase_price) {
        this.sku = sku;
        this.description = description;
        this.sales_price = sales_price;
        this.purchase_price = purchase_price;
    }

    async addProduct() {
        const details = {
            method: 'post',
            url: `${process.env.PRODUCT_INSERT_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "mvProduct": {
                    "ProductSKU": this.sku,
                    "ProductDescription": this.description,
                    "ProductSellingPrice": this.sales_price,
                    "ProductPurchasePrice": this.purchase_price,
                },
                "mvRecordAction": "Insert"
            }
        }
        return await axios(details)
            .then( (response) => {
                console.log(response.data);
                return response.data.mvProduct.ProductID;
            })
            .catch( (error) => {
                console.log(error);
                return -1;
            })
    }

    deleteProduct(id) {
        const details = {
            method: 'post',
            url: `${process.env.PRODUCT_DELETE_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "ProductIDToDelete": id
            }
        }
        axios(details)
            .then( (response) => {
                console.log(response.data);
            })
            .catch( (error) => {
                console.log(error);
            })
    }
}

class Client {
    constructor(name, email, shipping_address, phone) {
        this.name = name;
        this.email = email;
        this.shipping_address = shipping_address;
        this.phone = phone;
    }

    async addClient() {
        const details = {
            method: 'post',
            url: `${process.env.CLIENT_INSERT_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "mvSupplierClient": {
                    "SupplierClientName": this.name,
                    "SupplierClientShippingAddress": this.shipping_address,
                    "SupplierClientPhone1": this.phone,
                    "SupplierClientEmail": this.email
                },
                "mvRecordAction": "Insert"
            }
        }
        return await axios(details)
            .then( (response) => {
                console.log(response.data);
                return response.data.mvSupplierClient.SupplierClientID;
            })
            .catch( (error) => {
                console.log(error);
                return -1;
            })
    }

    deleteClient(id) {
        console.log(id)
        const details = {
            method: 'post',
            url: `${process.env.CLIENT_DELETE_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "SupplierClientIDToDelete": id
            }
        }
        axios(details)
            .then( (response) => {
                console.log(response.data);
            })
            .catch( (error) => {
                console.log(error);
            })
    }
}

class Warehouse {
    constructor(abbreviation, name, address) {
        this.abbreviation = abbreviation;
        this.name = name;
        this.address = address;
    }

    async addWarehouse() {
        const details = {
            method: 'post',
            url: `${process.env.WAREHOUSE_INSERT_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "mvInventoryLocation": {
                    "InventoryLocationName": this.name,
                    "InventoryLocationAbbreviation": this.abbreviation,
                    "InventoryLocationAddress": this.address
                },
                "mvRecordAction": "Insert"
            }
        }
        return await axios(details)
            .then( (response) => {
                console.log(response.data);
                return response.data.mvInventoryLocation.InventoryLocationID;
            })
            .catch( (error) => {
                console.log(error);
                return -1;
            })
    }

    deleteWarehouse(id) {
        console.log(id)
        const details = {
            method: 'post',
            url: `${process.env.WAREHOUSE_DELETE_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "InventoryLocationIDToDelete": id
            }
        }
        axios(details)
            .then( (response) => {
                console.log(response.data);
            })
            .catch( (error) => {
                console.log(error);
            })
    }
}

module.exports.Product = Product;
module.exports.Client = Client;
module.exports.Warehouse = Warehouse;
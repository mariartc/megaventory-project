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

module.exports.Product = Product;
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
    constructor(name, email, shipping_address, phone, is_loyalty_client) {
        this.name = name;
        this.email = email;
        this.shipping_address = shipping_address;
        this.phone = phone;
        this.is_loyalty_client = is_loyalty_client;
    }

    isLoyaltyClient() {
        return this.is_loyalty_client;
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

class Tax {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    async addTax() {
        const details = {
            method: 'post',
            url: `${process.env.TAX_INSERT_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "mvTax": {
                "TaxName": this.name,
                "TaxValue": this.value
            },
            "mvRecordAction": "Insert"
            }
        }
        return await axios(details)
            .then( (response) => {
                console.log(response.data);
                return response.data.mvTax.TaxID;
            })
            .catch( (error) => {
                console.log(error);
                return -1;
            })
    }

    deleteTax(id) {
        console.log(id)
        const details = {
            method: 'post',
            url: `${process.env.TAX_DELETE_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "TaxIDToDelete": id
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

class Discount {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    async addDiscount() {
        const details = {
            method: 'post',
            url: `${process.env.DISCOUNT_INSERT_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "mvDiscount": {
                    "DiscountName": this.name,
                    "DiscountValue": this.value
                },
                "mvRecordAction": "Insert"
            }
        }
        return await axios(details)
            .then( (response) => {
                console.log(response.data);
                return response.data.mvDiscount.DiscountID;
            })
            .catch( (error) => {
                console.log(error);
                return -1;
            })
    }

    deleteDiscount(id) {
        console.log(id)
        const details = {
            method: 'post',
            url: `${process.env.DISCOUNT_DELETE_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "DiscountIDToDelete": id
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

class SalesOrder {
    constructor(client_id, warehouse_id, product_sku, quantity, tax_id, discount_id= -1) {
        this.client_id = client_id;
        this.warehouse_id = warehouse_id;
        this.product_sku = product_sku;
        this.quantity = quantity;
        this.tax_id = tax_id;
        this.discount_id = discount_id;
    }

    async addSalesOrder() {
        const data_body = this.discount_id === -1 ? {
            "APIKEY": `${process.env.API_KEY}`,
            "mvSalesOrder": {
                "SalesOrderClientId": this.client_id,
                "SalesOrderInventoryLocationID": this.warehouse_id,
                "SalesOrderStatus": "Verified",
                "SalesOrderDetails": [
                    {
                        "SalesOrderRowProductSKU": this.product_sku,
                        "SalesOrderRowQuantity": this.quantity,
                        "SalesOrderRowTaxID": this.tax_id
                    }
                ]
            },
            "mvRecordAction": "Insert"
        } : {
            "APIKEY": `${process.env.API_KEY}`,
            "mvSalesOrder": {
                "SalesOrderClientId": this.client_id,
                "SalesOrderInventoryLocationID": this.warehouse_id,
                "SalesOrderStatus": "Verified",
                "SalesOrderDetails": [
                    {
                        "SalesOrderRowProductSKU": this.product_sku,
                        "SalesOrderRowQuantity": this.quantity,
                        "SalesOrderRowTaxID": this.tax_id,
                        "SalesOrderRowDiscountID": this.discount_id,
                    }
                ]
            },
            "mvRecordAction": "Insert"
        };
        const details = {
            method: 'post',
            url: `${process.env.SALES_ORDER_INSERT_URL}`,
            headers: {},
            data: data_body
        }
        return await axios(details)
            .then( (response) => {
                console.log(response.data);
                return response.data.mvSalesOrder.SalesOrderId;
            })
            .catch( (error) => {
                console.log(error);
                return -1;
            })
    }

    deleteSalesOrder(id) {
        console.log(id)
        const details = {
            method: 'post',
            url: `${process.env.SALES_ORDER_DELETE_URL}`,
            headers: {},
            data: {
                "APIKEY": `${process.env.API_KEY}`,
                "mvSalesOrderNoToCancel": id
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
module.exports.Tax = Tax;
module.exports.Discount = Discount;
module.exports.SalesOrder = SalesOrder;
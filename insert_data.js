let a = require('./classes');

async function insert() {
    let product = new a.Product("1112256", "Nike shoes", 99.99, 44.99)
    let client = new a.Client("babis", "babis@exampletest.com", "Example 8, Athens", 1235698967, true)
    let warehouse = new a.Warehouse("Main", "Main Location", "Example 20, Athens")
    let tax = new a.Tax("My shop tax", 24)
    let discount = new a.Discount("Loyalty customers discount", 50)
    await product.addProduct()
    let client_id = await client.addClient()
    let warehouse_id = await warehouse.addWarehouse()
    let tax_id = await tax.addTax()
    let discount_id = await discount.addDiscount()
    let sales_order;
    if(client.is_loyalty_client) sales_order = new a.SalesOrder(client_id, warehouse_id, "1112256", 2, tax_id, discount_id)
    else sales_order = new a.SalesOrder(client_id, warehouse_id, "1112256", 2, tax_id)
    sales_order.addSalesOrder()
}


insert();

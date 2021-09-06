import { Client } from 'pg';
//const { Client } = require("pg");

const handleResponse = (products = {}, status = 200) => ({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
  },
  statusCode: status,
  body: JSON.stringify(products),
});

const credentials = {

};

async function getProductList() {
  const client = new Client(credentials);
  await client.connect();
  const data = await client.query('SELECT products.*, stocks.count FROM products LEFT JOIN stocks ON products.id = stocks.product_id');
  const rows = data.rows
  await client.end();

  return rows;
}

//(async () => {
//  const clientResult = await getProductList();
//  console.log("ProductList: " + JSON.stringify(await getProductList()  ))
//})();

export const handler = async event => await handleResponse(await getProductList());

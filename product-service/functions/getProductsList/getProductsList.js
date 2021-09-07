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

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

const credentials = {
  user: PG_USERNAME,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
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

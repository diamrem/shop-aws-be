
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
  user: "postgres",
  host: "task-4.citzxb6pxpgh.eu-central-1.rds.amazonaws.com",
  database: "productList",
  password: "wD2i3pq31Ou7mqNQO5e4",
  port: 5432,
};

async function getProductList() {
  const client = new Client(credentials);
  await client.connect();
  const rows = await client.query('select * from products');
  await client.end();

  return rows;
}

//(async () => {
//  const clientResult = await getProductList();
//  console.log("ProductList: " + JSON.stringify(handleResponse(clientResult)));
//})();

export const handler = async event => await handleResponse(await getProductList());

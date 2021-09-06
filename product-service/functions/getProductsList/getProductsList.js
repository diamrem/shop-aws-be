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
  database: "postgres",
  password: "wD2i3pq31Ou7mqNQO5e4",
  port: 5432,
};

async function getProductList() {
  const client = new Client(credentials);
  await client.connect();
  const data = await client.query('select products.* from products');
  const rows = data.rows
  await client.end();

  return rows;
}

//(async () => {
//  const clientResult = await getProductList();
//  console.log("ProductList: " + JSON.stringify(await getProductList()  ))
//})();

export const handler = async event => await handleResponse(await getProductList());

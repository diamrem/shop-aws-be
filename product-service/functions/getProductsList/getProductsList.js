import { Client } from 'pg';

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
        client.on('notice', msg => console.warn('notice:', msg))
        client.on('error', err => { console.error('Error:', err.stack);  })

    await client.connect()
                .then(() => console.log('DB has connected'))
                .catch(err => console.error('Connection DB error', err.stack));



    const data = await client.query('SELECT products.*, stocks.count FROM products LEFT JOIN stocks ON products.id = stocks.product_id')
                .then(result => console.log(result))
                .catch(e => console.error(e.stack))
                .then(() => client.end());
    
  return data.rows;
}

export const handler = async event => await handleResponse(await getProductList());
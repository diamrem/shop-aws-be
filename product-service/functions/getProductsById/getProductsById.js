 
import products from '../productList.json';


const response = (products = {}, status = 200) => ({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
  },
  statusCode: status,
  body: JSON.stringify(products),
});

export const handler = async event => {
        const { productId } = event.pathParameters || {};
        const product = products.find(({ id }) => id === productId);

          if (!productId) { return response({ message: "You missed product id!" }, 400);}
          if (!product)   { return response({ message: `Wrong product id! No product with ${id}.` }, 400);
          }
    return response({ ...product }, 200);
};
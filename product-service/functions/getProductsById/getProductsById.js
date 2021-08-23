 
import products from '../productList.json';


const handleResponse = (products = {}, status = 200) => ({
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

  if (!productId) {
    return handleResponse({ message: "API_ERRORS.NO_ID" }, 400);
  }

  const product = products.find(({ id }) => id === productId);

  if (!product) {
    return handleResponse({ message: "API_ERRORS.NO_ITEM_IN_DB" }, 400);
  }

  return handleResponse({ ...product }, 200);
};
import {handler as getProductsById } from './getProductsById'
import genRequest from '../rqStructure.js'
import productList from '../productList.json';

describe('Function getProductsById',()=>{
	test(' should return product with firs product id', async ()=> {
		const firstProduct  = productList[0]
		
		const event = genRequest({
      		pathParametersObject: {
        	productId: firstProduct.id,
      },
    });

    const res = await getProductsById(event);
    const receivedData = JSON.parse(res.body);

    expect(res).toBeDefined();
    expect(receivedData).toEqual(firstProduct);
    expect(res.statusCode).toBe(200);
  });
  test('should return an error if no product with id== 777', async ()=>{
    const failId = '777'

    const event = genRequest({
      pathParametersObject: {
        productId: failId
      },
    })

    const res = await getProductsById(event);
    const {message} = JSON.parse(res.body) || {}

    expect(res.statusCode).toBe(400)
    expect(message).toEqual('Product not found')

    })
  })
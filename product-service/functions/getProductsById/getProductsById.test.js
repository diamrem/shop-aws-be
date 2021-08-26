import {handler as getProductsById } from './getProductsById'
import genRequest from '../rqStructure.js'
import productList from '../productList.json';

describe('Function getProductsById should return',()=>{
	test('product with exact id', async ()=> {
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
})
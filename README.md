# __Task 3__

Task [description here](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/task3-product-magamanent-api/task.md)

Task due date / deadline date - 23.08.2021 / 29.08.21 23:59(GMT+3)

Self check:
 
 TOTAL POINTS - _**7 points**_
 
-----------
## __Evalution Criteria__

- [x] 1 - poiproduct-service serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct
- [x] 2 - The getProductsList OR getProductsById lambda function returns a correct response (POINT1)
- [x] 3 - The getProductsById AND getProductsList lambda functions return a correct response code (POINT2)
- [ ] 4 - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend. AND POINT1 and POINT2 are done.

## __Additional options__

- [x] Async/await is used in lambda functions.
- [x] ES6 modules are used for product-service implementation.
- [x] Webpack is configured for product-service.
- [ ] SWAGGER documentation is created for product-service.
- [ ] Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered)
- [x] Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
- [ ] Main error scenarious are handled by API ("Product not found" error).
------------
# __FrontEnd__

All product images and productList file are stored in a separate S3 bucket, simulating a product database.

FrontEnd : 
FrontEnd Task-3 Pull Request : -

# __BackEnd__

Lambda | Description | Method | URL 
-------|-------------|--------|-----
getProductsList | get ALL products in JSON | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products
getProductsById* | get ONE product in JSON by id | GET | https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/7567ec4b-b10c-48c5-9345-fc73348a80a1

* - You can get any ONE product substituting productID instead of {productId} in URL https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/_{productId}_

------------

# __Swagger documentation__

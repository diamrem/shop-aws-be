Task [description here](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/task3-product-magamanent-api/task.md)

Task due date / deadline date - 23.08.2021 / 29.08.21 23:59(GMT+3)

Self check:
 
 * manual deployment - _done_
 * automated deployment - _done_
 * TOTAL - _**5 points**_
 


__#FRONTEND#__

----------------

FE task-3 PR: ------------------

Dedicated S3 Bucket hosts product`s images

#EVALUATION CRITERIA

1 - poiproduct-service serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct - ..#Done
2 - The getProductsList OR getProductsById lambda function returns a correct response (POINT1) - ..#Done
3 - The getProductsById AND getProductsList lambda functions return a correct response code (POINT2) - ..#Done
4 - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend. AND POINT1 and POINT2 are done.

#Additional options
- [x] This is a complete item
- [ ] This is an incomplete item

+1 - Async/await is used in lambda functions - ..__Done__
+1 - ES6 modules are used for product-service implementation - __Done__
+1 - Webpack is configured for product-service - ..__Done__
+1 (All languages) - SWAGGER documentation is created for product-service
+1 (All languages) - Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered)
+1 (All languages) - Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase. - ..__Done__
+1 (All languages) - Main error scenarious are handled by API ("Product not found" error).
------------
__#Endpoints#__

getProductsList - get ALL products in JSON
GET - https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products

getProductsById - get ONE product in JSON by id
GET - https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/{productId}

Exemple - https://8kbhxjy1vk.execute-api.eu-central-1.amazonaws.com/dev/products/7567ec4b-b10c-48c5-9345-fc73348a80a1
------------

Swagger documentation

import { CartService } from "./services/cart.service.js"
import { ProductService } from "./services/product.service.js"

angular.module("e-shop", [])
    .factory("productService", ProductService)
    .factory("cartService", CartService);
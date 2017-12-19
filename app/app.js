import {CartService} from "./services/cart.service.js"

angular.module("e-shop", [])
    .factory("cartService", CartService);
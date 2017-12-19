import {CartController} from "./cart.ctrl.js";

angular.module("e-shop")
    .component("cart", {
        templateUrl: "/app/components/cart/cart.html",
        controller: CartController
    })
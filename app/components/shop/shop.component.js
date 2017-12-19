import {ShopController} from "./shop.ctrl.js";

angular.module("e-shop")
    .component("shop", {
        templateUrl: "/app/components/shop/shop.html",
        controller: ShopController
    })
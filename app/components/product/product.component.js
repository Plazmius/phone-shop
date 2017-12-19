import {ProductController} from "./product.ctrl.js";

angular.module("e-shop")
    .component("product", {
        templateUrl: "/app/components/product/product.html",
        controller: ProductController,
        bindings: {
            data: '='
        }
    });

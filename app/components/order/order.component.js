import {OrderController} from "./order.ctrl.js";

angular.module("e-shop")
    .component("order", {
        templateUrl: "/app/components/order/order.html",
        controller: OrderController,
        bindings: {
            data: '='
        }
    })
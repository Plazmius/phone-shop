export class CartController {
    constructor($scope, cartService) {
        $scope.cart = cartService.cart;
        $scope.getTotal = cartService.getTotal;
        $scope.IMAGE_URL = "http://apeps.kiev.ua/images/phones";
        $scope.deleteProduct = (productId) => {
            cartService.deleteProduct(productId);
        }
        $scope.order = {name:"", surname: "", phone:"", email:"", cardNumber: "", cardDate: "", cardCVV: ""};
        $scope.sendOrder = () => {
            let orderFields = Object.keys($scope.order);
            console.log($scope.order);
            if (orderFields.every(field => $scope.order[field] != "")) {
                $scope.order = {};
                cartService.clear();
                console.log(cartService);
                $("#close-modal").click();
                $.notify(`Your order has been sent!`, {
                    position: "top left",
                    className: "success"
                });
            }
            else {
                $.notify(`Please, fill all order fields`, {
                    position: "top left",
                    className: "warn"
                });
            }
        }
    }
}
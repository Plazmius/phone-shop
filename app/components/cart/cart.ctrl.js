export class CartController {
    constructor($scope, cartService) {
        $scope.cart = cartService.cart;
        $scope.getTotal = cartService.getTotal;
        $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.paymentTypes = ["Cash", "Card"];
        $scope.validateName = (name, $event) => {

        };
    }
}
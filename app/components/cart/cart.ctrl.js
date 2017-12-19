export class CartController {
    constructor($scope, cartService) {
        $scope.cart = cartService.cart;
        $scope.getTotal = cartService.getTotal;

        $scope.form = {};
    }
}
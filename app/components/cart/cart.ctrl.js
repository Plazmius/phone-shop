export class CartController {
    constructor($scope, cartService) {
        $scope.cart = cartService.cart;
        $scope.getTotal = cartService.getTotal;
        $scope.IMAGE_URL = "http://apeps.kiev.ua/images/phones";
        $scope.deleteProduct = (productId) => {
            cartService.deleteProduct(productId);
        }
        
    }
}
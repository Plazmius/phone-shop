export class ProductController {
    constructor($scope, cartService) {
        this.cartService = cartService;
        $scope.IMAGE_URL = "http://apeps.kiev.ua/images/phones";
    }

    buy() {
        this.cartService.addProduct(this.data);
        $.notify(`${this.data.productName} was added to cart!`, {
            position: "top left",
            className: "info"
        });
    }
}
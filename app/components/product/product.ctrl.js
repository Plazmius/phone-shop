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
        this.data.countProducts--;
        console.log(this.data);
    }

    getAvailabeProductCount() {
        let productInCart = this.cartService.cart.groupedProducts.find(group => group.product.id == this.data.id);
        return productInCart ? this.data.productCount - productInCart.count : this.data.productCount;
    }
}
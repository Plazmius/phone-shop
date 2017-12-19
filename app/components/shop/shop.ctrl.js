export class ShopController {
    constructor($scope, $http) {
        // this.$scope = $scope;
        // this.$http = $http;

        this.GET_PHONES_URL = "http://apeps.kiev.ua/post/getphones";
        $http.get(this.GET_PHONES_URL)
            .then((response) => { 
                $scope.products = response.data.map(product => {
                    product.priceUAH = parseFloat(product.priceUAH);
                    product.countProducts = parseInt(product.countProducts);
                    return product;
                });
            });
    }
}
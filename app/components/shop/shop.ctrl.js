export class ShopController {
    constructor($scope, $http, productService) {
        // this.$scope = $scope;
        // this.$http = $http;

        $scope.store = productService.store;
    }
}
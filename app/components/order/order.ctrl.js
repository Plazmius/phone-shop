export class OrderController {
    constructor($scope) {
        $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.paymentTypes = ["Cash", "Card"];
        $scope.validateName = (name, $event) => {
        };

        // $("#cardNumber").mask("9999-9999-9999-9999");
        // $("#cardDate").mask("99/9999");
        // $("#phone").mask("(999)-999-99-99");
    }
}
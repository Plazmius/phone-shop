export class OrderController {
    constructor($scope, cartService) {
        $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.paymentTypes = ["Cash", "Card"];
        $scope.validateName = (name, $event) => {
        };
        $scope.order = {name:"", surname: "", phone:"", email:"", cardNumber: "", cardDate: "", cardCVV: ""};
        
        $scope.sendOrder = () => {
            let orderFields = Object.keys($scope.order);
            console.log($scope.order);
            if ($scope.form.$valid && orderFields.every(field => $scope.order[field] != "")) {
                $scope.order = {};
                cartService.clear();
                $("#close-modal").click();
                $.notify(`Your order has been sent!`, {
                    position: "top left",
                    className: "success"
                });
            } else if (!$scope.form.$valid) {
                $.notify(`Please, correct highlighted fields`, {
                    position: "top left",
                    className: "warn"
                });
            }
            else {
                $.notify(`Please, fill all order fields`, {
                    position: "top left",
                    className: "warn"
                });
            }
        }
        // $("#cardNumber").mask("9999-9999-9999-9999");
        // $("#cardDate").mask("99/9999");
        // $("#phone").mask("(999)-999-99-99");
    }
}
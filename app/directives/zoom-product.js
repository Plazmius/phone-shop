angular.module("e-shop")
    .directive('zoomProduct', function () {
        return function (scope, element, attrs) {
            $(element).find(".product-image").imagezoomsl({ 
                zoomrange: [2.12, 12],
                magnifiersize: [530, 440],
                scrollspeedanimate: 10,
                loopspeedanimate: 5,
                loadopacity: 0,
                zindex: 10,
                cursorshadeborder: "2px solid black",
                magnifiereffectanimate: "slideIn" 
             });
        };
    })
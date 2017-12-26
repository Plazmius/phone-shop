export class ProductService {
    constructor($http) {
        this.store = {
            products: []
        }
        this.$http = $http;
        this.get = () => {
            this.GET_PHONES_URL = "http://apeps.kiev.ua/post/getphones";
            let lsProds = window.localStorage.getItem("products");
            if (lsProds) {
                this.store.products = JSON.parse(lsProds);
            } else {
                this.$http.get(this.GET_PHONES_URL)
                    .then((response) => {
                        this.store.products = response.data.map(product => {
                            product.priceUAH = parseFloat(product.priceUAH);
                            product.countProducts = parseInt(product.countProducts);
                            return product;
                        });
                        window.localStorage.setItem("products", JSON.stringify(this.store.products));
                    });
            }
        };
        this.get();
    }

}
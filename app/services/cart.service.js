export class CartService {
    constructor(productService) {
        let lsCart = JSON.parse(window.localStorage.getItem("cart"));
        this.cart = {
            groupedProducts: []
        };
        if (lsCart) {
            this.cart = lsCart;
            this.cart.groupedProducts.forEach(group => {
                group.product = productService.store.products.find(pr => pr.id == group.product.id);
            });
        }
    }

    addProduct(product) {
        let res = this.cart.groupedProducts.find(group => group.product.id === product.id);
        if (!res) {
            this.cart.groupedProducts.push({ count: 1, product: product });
        }
        else {
            res.count += 1;
        }
        product.countProducts--;
        let lsProds = JSON.parse(window.localStorage.getItem("products"));
        if (lsProds) {
            lsProds.find(prod => prod.id === product.id).countProducts = product.countProducts;
        }
        window.localStorage.setItem("products", JSON.stringify(lsProds));
        window.localStorage.setItem("cart", JSON.stringify(this.cart));
    }

    deleteProduct(productId) {
        let res = this.cart.groupedProducts.find(group => group.product.id === productId);
        if (res.count > 1) {
            res.count--;
            console.log(this.cart);
        } else {
            this.cart.groupedProducts.splice(this.cart.groupedProducts.indexOf(res), 1);
            console.log(this.cart);
        }
        res.product.countProducts++;
        let lsProds = JSON.parse(window.localStorage.getItem("products"));
        lsProds.find(prod => prod.id === productId).countProducts = res.product.countProducts;
        window.localStorage.setItem("products", JSON.stringify(lsProds));
        window.localStorage.setItem("cart", JSON.stringify(this.cart));
    }

    clear() {
        this.cart.groupedProducts = [];
        window.localStorage.setItem("cart", JSON.stringify(this.cart));

    }

    getTotal() {
        return this.cart.groupedProducts.reduce((previousValue, group) =>
            previousValue + group.product.priceUAH * group.count, 0);
    }
}
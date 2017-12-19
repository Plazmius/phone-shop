export class CartService {
    constructor() {
        this.cart = {
            groupedProducts: []
        };
    }

    addProduct(product) {        
        let res = this.cart.groupedProducts.find(group => group.product.id === product.id);
        if (!res) {
            this.cart.groupedProducts.push({count: 1, product: product});
        }
        else {
            res.count += 1;
        }
    }

    deleteProduct(productId) {
        // let toDelete = this.cart.products.find(product => product.id === productId);
        // this.cart.products = this.cart.products.slice(this.cart.products.indexOf(toDelete), 1);
    }

    getTotal() {
        return this.cart.groupedProducts.reduce((previousValue, group) => 
            previousValue + group.product.priceUAH * group.count, 0);
    }
}
export default {
    
    methods: {
        addToWishlists(product) {
            let productBD = JSON.parse(localStorage.getItem('wishlists')) || [];
            let productObject = {
                id: this.productDetail.id,
                title: this.productDetail.title,
                description: this.productDetail.description,
                price: this.productDetail.price,
                image: this.productDetail.image
            }

            let indexOfExistingProduct = productBD.findIndex(
                (el) => el.id === productObject.id
            );
            if(indexOfExistingProduct !== -1) {
                this.$alert("This product is already on your list","","warning")
            }
            else {
                productBD.push(productObject)
                this.$alert(
                    "",
                    "Success",
                    "success"
                  ).then(() => console.log("Closed"));
                console.log("success")
            }

            localStorage.setItem('wishlists', JSON.stringify(productBD));
        },
        getProductWishlists() {
            let productBD = JSON.parse(localStorage.getItem('wishlists'));
            return productBD;
        },
        clearWishlists() {
            localStorage.removeItem('wishlists');
        },
        removeProduct(product) {
            let productBD = JSON.parse(localStorage.getItem('wishlists'))
            let indexOfExistingProduct = productBD.findIndex(
                (el) => el.id === product.id
            )

            if(productBD.length > 1) {
                productBD.splice(indexOfExistingProduct, 1)
                location.reload();
                console.log("supprimé")
            }
            else {
                productBD = []
                location.reload();
            }
            localStorage.setItem('wishlists', JSON.stringify(productBD));
        }
    }
}
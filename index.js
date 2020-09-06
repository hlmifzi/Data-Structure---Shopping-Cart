class helper {

    /**
     * @param {String} kodeProduk 
     * @param {number} kuantitas 
     * @param {Object} dataCart 
    */
    checkAvailableProduct(...args) {
        const [kodeProduk, kuantitas, dataCart] = args
        if (kodeProduk in dataCart) {
            this.dataCart[kodeProduk] += kuantitas
        } else {
            this.dataCart[kodeProduk] = kuantitas
        }
    }

    /**
     * @param {string[]} objToArrdataCart 
     * @param {Object} dataCart  
    */

    listsCart(...args) {
        const [objToArrdataCart, dataCart] = args
        const res = objToArrdataCart.map((v, i) => `${v} (${dataCart[v]}) <br/>`).join('')
        document.getElementById("header").innerHTML = res;

    }
}


class Cart extends helper {
    constructor(dataCart = {}) {
        super()
        this.dataCart = dataCart;
    }

    /**
     * @param {string} kodeProduk 
     * @param {number} kuantitas 
    */

    tambahProduk(kodeProduk, kuantitas) {
        this.checkAvailableProduct(kodeProduk, kuantitas, this.dataCart)
    }

    /**
     * @param {string} kodeProduk
    */

    hapusProduk(kodeProduk) {
        delete this.dataCart[kodeProduk];
    }

    tampilkanCart() {
        const objToArrdataCart = Object.keys(this.dataCart)
        this.listsCart(objToArrdataCart, this.dataCart)
        console.log(this.dataCart)
    }
}

const keranjang = new Cart();
keranjang.tambahProduk("Pisang Hijau", 2);
keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");
keranjang.hapusProduk("Semangka Merah");
keranjang.tampilkanCart();

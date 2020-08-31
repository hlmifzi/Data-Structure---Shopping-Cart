class helper {
    setState(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    state(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    checkAvailableProduct(...args) {
        const [kodeProduk, kuantitas, dataCart] = args
        if (kodeProduk in dataCart) {
            dataCart[kodeProduk] += kuantitas
        } else {
            dataCart[kodeProduk] = kuantitas
        }
    }

    listsCart(...args) {
        const [objToArrdataCart, dataCart] = args
        const res = objToArrdataCart.map((v, i) => `${v} (${dataCart[v]}) <br/>`).join('')
        document.getElementById("header").innerHTML = res;

    }
}

class Cart extends helper {
    constructor(kodeProduk, kuantitas) {
        super()
        this.kodeProduk = kodeProduk;
        this.kuantitas = kuantitas;
    }

    tambahProduk(kodeProduk, kuantitas) {
        const dataCart = this.state('shoppingCart') || {}
        this.checkAvailableProduct(kodeProduk, kuantitas, dataCart)
        this.setState('shoppingCart', dataCart)
    }

    hapusProduk(kodeProduk) {
        const dataCart = this.state('shoppingCart') || {}
        delete dataCart[kodeProduk];
        this.setState('shoppingCart', dataCart)
    }

    tampilkanCart() {
        const dataCart = this.state('shoppingCart') || {}
        const objToArrdataCart = Object.keys(dataCart)
        this.listsCart(objToArrdataCart, dataCart)
    }
}

const keranjang = new Cart();
keranjang.tambahProduk("Pisang Hijau", 2);
keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);
keranjang.hapusProduk()
keranjang.hapusProduk("Semangka Kuning");
keranjang.hapusProduk("Semangka Merah");
keranjang.tampilkanCart();

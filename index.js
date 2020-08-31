class Cart extends helper {
    constructor(kodeProduk, kuantitas) {
        this.kodeProduk = kodeProduk;
        this.kuantitas = kuantitas;
    }

    tambahProduk(kodeProduk, kuantitas) {
        const tableCart = JSON.parse(localStorage.getItem('shoppingCart')) || {}

        if (kodeProduk in tableCart) {
            tableCart[kodeProduk] += kuantitas
        } else {
            tableCart[kodeProduk] = kuantitas
        }

        localStorage.setItem('shoppingCart', JSON.stringify(tableCart))
    }

    hapusProduk(kodeProduk) {
        const tableCart = JSON.parse(localStorage.getItem('shoppingCart')) || {}
        delete tableCart[kodeProduk];
        localStorage.setItem('shoppingCart', JSON.stringify(tableCart))
    }

    tampilkanCart() {
        const tableCart = JSON.parse(localStorage.getItem('shoppingCart')) || {}
        const res = Object.keys(tableCart).map((v, i) => `${v} (${tableCart[v]})`)
        return res
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


const result = keranjang.tampilkanCart();
console.log(result)
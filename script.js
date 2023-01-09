// const adalah salah satu kode untuk memuat variable di javascript
// ada 3 kode pembuatan javascript seperti: const, let dan var
// masing masing kode pembuatan variable mempunyai kelebihan dan kekurangan 
// saya memakai const untuk mengambil element karna saya tau bahwa tag ini 
// tidak akan berubah ketika di klik

// tag yang memiliki id burger-page akan masuk ke dalam variable
// burgerPage
const burgerPage = document.getElementById('burger-page')

// tag yang memiliki id tombol-burger akan masuk ke dalam variable
// burgerBotton
const burgerButton = document.getElementById('tombol-burger')


// ! ingat !, pembuatan nama variable tidak bisa diisi dengan spasi dan nomor di bagian awal
// contoh: 1variable, 593variable             X
// contoho penulisan yang benar:
// variable1, variable593, variableSatu       √


// tambahkan aksi ketika tombol di klik
burgerButton.addEventListener('click', () => {

    // ubah top nya menjadi 0
    // karena sebenarnya halaman burgernya ada diluar layar bagian atas
    // jadi kita isi 0 agar dia turun
    burgerPage.style.top = '0';
})


// tag yang memiliki id tombol-burger akan masuk ke dalam variable
// burgerBotton
const burgerBack = document.getElementById('burger-back')


// kita kembalikan halaman burgernya ke luar atas kembali ketika di klik
burgerBack.addEventListener('click', () => {
    burgerPage.style.top = '-100%';
})
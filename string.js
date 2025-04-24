// Sting adalah Text

// log berfungsi untuk print ke terminal / ke console web browser
// String bisa menggunakan tanda petik satu (' ') atau tanda petik dua (" ")
// console.log berfungsi untuk menampilkan string ke terminal
console.log('Bima Fadi Lana')

// variable ( const, let, var )
// variable berfungsi untuk menyimpan data untuk menghindari repetisi
// agar mudah dibaca dan mudah diubah

// let adalah variable yang bisa diubah
const myName = 'Bima Fadi Lana';
console.log(myName)

// const adalah variable yang tidak bisa diubah
// kita tidak bisa mengubah errorMyName ketika menggunakan const 
const constMyName = 'Bima Fadi Lana';
constMyName = 'Bima Batu Gana';
console.log(constMyName)

// let adalah variable yang bisa diubah
// kita bisa mengubah letMyName ketika menggunakan let
let letMyName = 'Bima Fadi Lana';
letMyName = 'Bima Batu Batuan';
console.log(letMyName)


// Latihan 1
// menggabungkan variable const
const namaDepan = 'Bima';
const namaTengah = 'Fadi'
const namaBelakang = 'Lana';
const namaLengkap = namaDepan + ' ' + namaTengah + ' ' + namaBelakang;
console.log(namaLengkap)


// Latihan 2
const namaSaya = 'Bima Fadi Lana';
const makananFavorit = 'Bakso';
const text = 'Halo namaku' + ' ' + namaSaya + ' ' + 'makanan favoritku adalah' + ' ' + makananFavorit
console.log(text)


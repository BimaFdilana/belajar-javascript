// Number adalah Angka
// Arithmetic Operator adalah operator yang digunakan untuk melakukan operasi matematika

// Penjumlahan ( + )
const a = 10;
const b = 5;
const c = a + b;
console.log(c)

// Pengurangan ( - )
const e = 5;
const d = 10;
const f = d - e;
console.log(f)

// Perkalian ( * )
const g = 10;
const h = 5;
const i = g * h;
console.log(i)

// Pembagian ( / )
const j = 10;
const k = 5;
const l = j / k;
console.log(l)

// Modulus ( % )
// modulus adalah sisa dari pembagian 
// ex = 5 % 2 = 1, 3 % 2 = 1, 4 % 2 = 0
const m = 5;
const n = 2;
const o = m % n;
console.log(o)

// operator precedence
// operator precedence adalah urutan operator yang digunakan dalam operasi matematika -  
// - yang mana prioritas operator yang lebih tinggi akan dieksekusi terlebih dahulu
// urutan operator precedence adalah sebagai berikut:
// 1. ()
// 2. **
// 3. *, /, %
// 4. +, -
// contoh operator precedence
const p = 10 + 10 * 10;
const q = (10 + 10) * 10;
console.log(p, q)

// Floating Point Number
// Floating Point Number adalah angka desimal
// ( . ) adalah pemisah antara angka bulat dan angka desimal
const r = 10.5;
console.log(r)

// Latihan 1 
const apple = 5000;
const pisang = 10000;
const customersApple = 3;
const customersPisang = 2;
const kuppon = 10000;
const total = (apple * customersApple) + (pisang * customersPisang) - kuppon;
console.log(total)

// Latihan 2
const applePrice = 5000;
const pisangPrice = 10000;
const totalApple = 3;
const totalPisang = 2;
// discount = 10%
const discount = 0.1
const originalPrice = applePrice * totalApple + pisangPrice * totalPisang;
const price = originalPrice - originalPrice * discount;
console.log(price)



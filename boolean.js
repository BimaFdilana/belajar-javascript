// boolean adalah benar atau salah / iya atau tidak
// boolean adalah tipe data yang hanya memiliki dua nilai yaitu true dan false
// boolean adalah tipe data yang digunakan untuk membandingkan dua nilai

// comparison operators
// comparison operators adalah operator yang digunakan untuk membandingkan dua nilai
// comparison operators adalah operator yang menghasilkan nilai boolean
// macam macam comparison operators adalah sebagai berikut:
// 1. sama dengan ( === )
// 2. tidak sama dengan ( !== )
// 3. lebih besar dari ( > )
// 4. lebih kecil dari ( < )
// 5. lebih besar sama dengan ( >= )
// 6. lebih kecil sama dengan ( <= )

const boolean = 10 === 10;
const boolean2 = 9 !== 10;
const boolean3 = 10 >= 10;
console.log(boolean, boolean2, boolean3)


// Logical Operator
// Logical Operator adalah operator yang digunakan untuk menggabungkan dua nilai boolean    
// macam macam Logical Operator adalah sebagai berikut:
// 1. AND ( && ) - true jika kedua nilai boolean true
// 2. OR ( || ) - true jika salah satu nilai boolean true
// 3. NOT ( ! ) - true jika nilai boolean false


// latihan 1
const umur = 24;
const mengendaraMotor = 18;
const sedangBelajar = true;
const punyaSim = false;
const mabuk = true;
const pesanBoleh = 'Kamu boleh mengendarai motor';
const pesanTidakBoleh = 'Kamu tidak boleh mengendarai motor';
if (umur >= mengendaraMotor && punyaSim === true || sedangBelajar === true && !mabuk) {
    console.log(pesanBoleh);
} else {
    console.log(pesanTidakBoleh);
}

// Latihan 2
const umurAnna = 15;
const umurAvailable = 17;
const denganOrangTua = true;
const pesanUmurOke = 'Anna boleh menonton film gore karena cukup umur';
const pesandenganOrangTua = 'Anna boleh menonton film gore karena dengan orang tua';
const pesantidak = 'Anna belum cukup umur dan tidak dengan orang tua'
if (umurAnna >= umurAvailable) {
    console.log(pesanUmurOke)
} else if ( denganOrangTua === true) {
    console.log(pesandenganOrangTua)
} else {
    console.log(pesantidak)
}
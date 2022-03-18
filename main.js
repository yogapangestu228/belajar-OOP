// function kenalanDong(nama, umur) {
//     console.log(`Halo, nama saya ${nama}`)
//     console.log(`Umur saya ${umur}`)
// }

// kenalanDong("Sabrina binar", 20)

// function luasPersegiPanjang (panjang, lebar) {
//     const hasil = panjang * lebar;
//     return hasil;
// }

// const hitung1 = luasPersegiPanjang(20, 5)
// console.log(hitung1)

function jumlahVolumeDuaKubus (a, b) {
    let volumeA;
    let volumeB;
    let total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

console.log(jumlahVolumeDuaKubus(8, 3))


class Mahasiswa {
    constructor(nama, fakultas, semester){
        this.nama = nama;
        this.fakultas = fakultas;
        this.semester = semester;
    }

    grup() {
        console.log(this.nama + ' semester ' + this.semester + ' telah bergabung pada fakultas ' + this.fakultas);
    }
}

const tambahMahasiswa = new Mahasiswa ("Dr. Strange", "Kedokteran", 2);
tambahMahasiswa.grup();

class Organisasi extends Mahasiswa {
    constructor(nama, fakultas, semester, unitKemahasiswaan) {
    super(nama, fakultas, semester);
    this.unitKemahasiswaan = unitKemahasiswaan;

    }

    ukm() {
        console.log(' Hallo perkenalkan nama saya ' + this.nama + ' saya semester ' + this.semester + ' dari fakultas ' + this.fakultas + ' dan saya ingin bergabung dengan organisai ' + this.unitKemahasiswaan);
    }
}

const tambahMahasiswaUkm = new Organisasi ("Dr. Strange", "Kedokteran", 2 , "MAPALA");
tambahMahasiswaUkm.ukm();
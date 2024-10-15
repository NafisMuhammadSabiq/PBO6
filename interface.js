// Definisi antarmuka melalui pola objek
const KendaraanInterface = {
    bergerak: function() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
};

// Kelas yang mengimplementasikan antarmuka
class Pesawat {
    constructor() {
    }

    bergerak() {
        console.log("Pesawat terbang di udara.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Sepeda {
    constructor() {
    }

    bergerak() {
        console.log("Sepeda bergerak dengan pedal.");
    }
}
// Kelas yang mengimplementasikan antarmuka
class Motor {
    constructor() {
    }

    bergerak() {
        console.log("Motor berjalan di aspal.");
    }
}
// Kelas yang mengimplementasikan antarmuka
class Mobil {
    constructor() {
    }

    bergerak() {
        console.log("Mobil melaju di jalanan.");
    }
}
// Penggunaan
const pesawat = new Pesawat();
pesawat.bergerak(); // Output: Pesawat terbang di udara.

const sepeda = new Sepeda();
sepeda.bergerak(); // Output: Sepeda bergerak dengan pedal.

const motor = new Motor();
motor.bergerak(); // Output: Motor berjalan di aspal.

const mobil = new Mobil();
mobil.bergerak(); // Output: Mobil melaju di jalanan. 
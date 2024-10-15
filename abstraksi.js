// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Kendaraan {
    constructor(jenis) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Mobil extends Kendaraan {
    constructor() {
        super('Mobil');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda.`);
    }
}

class Kapal extends Kendaraan {
    constructor() {
        super('Kapal');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di atas air.`);
    }
}

class Becak extends Kendaraan {
    constructor() {
        super('Becak');
    }

    bergerak() {
        console.log(`${this.jenis} berjalan dengan gowes.`);
    }
}

class Kereta extends Kendaraan {
    constructor() {
        super('Kereta');
    }

    bergerak() {
        console.log(`${this.jenis} berjalan di atas rel.`);
    }
}

// Penggunaan
const mobil = new Mobil();
mobil.bergerak(); // Output: Mobil bergerak dengan roda.

const kapal = new Kapal();
kapal.bergerak(); // Output: Kapal bergerak di atas air.

const becak = new Becak();
becak.bergerak(); // Output: Becak berjalan dengan gowes.

const kereta = new Kereta();
kereta.bergerak(); // Output: Kereta berjalan di atas rel.
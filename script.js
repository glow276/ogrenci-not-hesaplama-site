function hesapla() {
    let vize = Number(document.getElementById("vize").value);
    let finall = Number(document.getElementById("final").value);
    let vizeYuzde = Number(document.getElementById("vizeYuzde").value);
    let finalYuzde = Number(document.getElementById("finalYuzde").value);
    let sonuc = document.getElementById("sonuc");

    if (vize < 0 || vize > 100 || finall < 0 || finall > 100) {
        sonuc.innerText = "Notlar 0-100 arasında olmalıdır.";
        return;
    }

    let ortalama =
        (vize * vizeYuzde / 100) +
        (finall * finalYuzde / 100);

    if (ortalama >= 60) {
        sonuc.innerText =
            "Ortalama: " + ortalama.toFixed(2) + " → Geçtiniz.";
    } else {
        sonuc.innerText =
            "Ortalama: " + ortalama.toFixed(2) + " → Kaldınız.";
    }
}


document.getElementById("vizeYuzde").addEventListener("change", guncelle);

function guncelle() {
    let vizeYuzde = Number(document.getElementById("vizeYuzde").value);
    let finalYuzde = 100 - vizeYuzde;

    document.getElementById("finalYuzdeText").innerText =
        "Final Etki Yüzdesi: %" + finalYuzde;
}

function hesapla() {
    let vize = Number(document.getElementById("vize").value);
    let finall = Number(document.getElementById("final").value);
    let vizeYuzde = Number(document.getElementById("vizeYuzde").value);
    let finalYuzde = 100 - vizeYuzde;

    if (vize < 0 || vize > 100 || finall < 0 || finall > 100) {
        document.getElementById("sonuc").innerText =
            "Lütfen notları 0-100 arasında giriniz ❗";
        return;
    }

    let ortalama =
        (vize * vizeYuzde / 100) +
        (finall * finalYuzde / 100);

    if (ortalama >= 60) {
        document.getElementById("sonuc").innerText =
            "Ortalama: " + ortalama.toFixed(2) + " → Geçtiniz ✅";
    } else {
        document.getElementById("sonuc").innerText =
            "Ortalama: " + ortalama.toFixed(2) + " → Kaldınız ❌";
    }
}


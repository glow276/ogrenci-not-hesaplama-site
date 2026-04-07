function hesapla() {
    let vize = Number(document.getElementById("vize").value);
    let finall = Number(document.getElementById("final").value);
    let vizeYuzde = Number(document.getElementById("vizeYuzde").value);
    let finalYuzde = Number(document.getElementById("finalYuzde").value);
    let sonuc = document.getElementById("sonuc");
    let vize2 = Number(document.getElementById("vize2").value);
    let vize2Yuzde = Number(document.getElementById("vize2Yuzde").value);
    let quiz = Number(document.getElementById("quiz").value);
    let quizYuzde = Number(document.getElementById("quizWeight").value);

    let vizeInput = document.getElementById("vize").value;
    let finalInput = document.getElementById("final").value;
    let vize2Input = document.getElementById("vize2").value;
    let quizInput = document.getElementById("quiz").value;

    if (
        (vizeInput !== "" && (vize < 0 || vize > 100)) ||
        (finalInput !== "" && (finall < 0 || finall > 100)) ||
        (vize2Input !== "" && (vize2 < 0 || vize2 > 100)) ||
        (quizInput !== "" && (quiz < 0 || quiz > 100))
    ) {
        sonuc.innerHTML = "<span style='color: red;'>Notlar 0-100 arasında olmalıdır.</span>";
        return;
    }

    let toplamYuzde = 0;
    if (!isNaN(vizeYuzde)) toplamYuzde += vizeYuzde;
    if (!isNaN(vize2Yuzde)) toplamYuzde += vize2Yuzde;
    if (!isNaN(quizYuzde)) toplamYuzde += quizYuzde;
    if (!isNaN(finalYuzde)) toplamYuzde += finalYuzde;

    if (toplamYuzde !== 100) {
        sonuc.innerHTML = `<span style='color: red;'>Seçtiğiniz yüzdelerin toplamı 100 olmalıdır! (Şu an: %${toplamYuzde})</span>`;
        return;
    }

    let ortalama = 0;

    if (!isNaN(vize) && !isNaN(vizeYuzde)) {
        ortalama += (vize * vizeYuzde) / 100;
    }

    if (!isNaN(vize2) && !isNaN(vize2Yuzde)) {
        ortalama += (vize2 * vize2Yuzde) / 100;
    }

    if (!isNaN(quiz) && !isNaN(quizYuzde)) {
        ortalama += (quiz * quizYuzde) / 100;
    }

    if (!isNaN(finall) && !isNaN(finalYuzde)) {
        ortalama += (finall * finalYuzde) / 100;
    }

    let harfNotu = "";
    let durum = "";
    let renk = "";

    if (ortalama >= 90) { harfNotu = "AA"; durum = "Geçti"; renk = "green"; }
    else if (ortalama >= 85) { harfNotu = "BA"; durum = "Geçti"; renk = "green"; }
    else if (ortalama >= 80) { harfNotu = "BB"; durum = "Geçti"; renk = "green"; }
    else if (ortalama >= 75) { harfNotu = "CB"; durum = "Geçti"; renk = "green"; }
    else if (ortalama >= 70) { harfNotu = "CC"; durum = "Geçti"; renk = "green"; }
    else if (ortalama >= 60) { harfNotu = "DC"; durum = "Koşullu Geçti"; renk = "orange"; }
    else if (ortalama >= 50) { harfNotu = "DD"; durum = "Koşullu Geçti"; renk = "orange"; }
    else { harfNotu = "FF"; durum = "Kaldı"; renk = "red"; }

    sonuc.innerHTML = `
        <strong style="font-size: 1.2rem;">Ortalama: ${ortalama.toFixed(2)}</strong> <br><br>
        Harf Notu: <strong>${harfNotu}</strong> <br>
        Durum: <strong style="color: ${renk};">${durum}</strong>
    `;
}

const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("tema") === "karanlik") {
    document.body.classList.add("dark-mode");
}

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "karanlik");
    } else {
        localStorage.setItem("tema", "aydinlik");
    }
});

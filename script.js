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

    if (
        (vize && (vize < 0 || vize > 100)) ||
        (finall && (finall < 0 || finall > 100)) ||
        (vize2 && (vize2 < 0 || vize2 > 100)) ||
        (quiz && (quiz < 0 || quiz > 100))
    ) {
        sonuc.innerText = "Notlar 0-100 arasında olmalıdır.";
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

    sonuc.innerText = "Ortalama: " + ortalama.toFixed(2);
}
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


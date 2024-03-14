const form = document.getElementById('bmi-form');
const hasilBmi = document.getElementById('hasil-bmi');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('berat-badan').value);
    const height = parseFloat(document.getElementById('tinggi-badan').value);

    const bmi = weight / (height * height / 10000);

    let resultHtml = `<h2>Hasil BMI Anda: ${bmi.toFixed(2)}</h2>`;
    resultHtml += `<p>Kategori BMI: `;

    if (bmi < 18.5) {
        resultHtml += '<span id="kekurangan">Kekurangan berat badan</span>';
    } else if (bmi < 25) {
        resultHtml += '<span id="normal">Berat badan normal</span>';
    } else if (bmi < 30) {
        resultHtml += '<span id="kelebihan">Kelebihan berat badan</span>';
    } else {
        resultHtml += '<span id="obesitas">Obesitas</span>';
    }

    resultHtml += `</p>`;

    if ((gender === 'pria' || gender === 'wanita') && bmi < 18.5) {
        resultHtml += `<p>Anda disarankan untuk menambah berat badan. Konsultasikan dengan ahli gizi untuk mendapatkan saran diet yang tepat.</p>`;
    } else if ((gender === 'pria' || gender === 'wanita') && bmi >= 25) {
        resultHtml += `<p>Anda disarankan untuk menurunkan berat badan. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan program penurunan berat badan yang aman dan sehat.</p>`;
    }

    hasilBmi.innerHTML = resultHtml;
});

function resetForm() {
    form.reset();
    hasilBmi.innerHTML = '';
}

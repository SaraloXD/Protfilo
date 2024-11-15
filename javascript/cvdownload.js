document.getElementById('download-cv').addEventListener('click', (e) => {
    e.preventDefault();
    alert('CV download started!');

    const element = document.getElementById('cv-content');
    const options = {
        filename: 'Saral-CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
});

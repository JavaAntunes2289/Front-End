
document.getElementById('form-numbers').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let campoA = parseInt(document.getElementById('campoA').value);
    let campoB = parseInt(document.getElementById('campoB').value);

    if (campoB > campoA) {
        document.querySelector('.sucess-message').textContent = 'Formulário Aceito';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.sucess-message').style.display = 'block';
    } else {
        document.querySelector('.error-message').textContent = 'Tente Novamente';
        document.querySelector('.sucess-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'block';
    }
    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';
    
});
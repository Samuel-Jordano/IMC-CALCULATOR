const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Formulário enviado!');

    const  weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const IMC = (weight / (height*height)).toFixed(2);
    
    const value = document.getElementById('value');
    let description = "";

    document.getElementById('info').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('info').classList.add('visible');
    }, 100);
    

    if (IMC <= 18.5) {
        description = "Cuidado, voce esta abaixo do peso";
        value.style.color = '';
    }else if (IMC >= 18.6 && IMC <= 24.9 ) {
        description = "Você está em seu peso ideal.";
        value.style.color = '';
    }else if(IMC >= 25 && IMC <= 29.9) {
        description = "Você está levemente acima de seu peso ideal.";
        value.style.color = '';
    }else if(IMC >= 30 && IMC <= 34.9){
        description = "Você está com obesidade Grau 1°";
        value.style.color = 'red';
    }else if(IMC >= 35 && IMC <= 39){
        description = "Você está com Obesidade Grau 2°";
        value.style.color = 'red';
    }else if(IMC >= 40){
        description = "Você está com Obesidade Mórbida. Procure um médico imediatamente";
        value.style.color = 'red';
    }else{
        value.style.color = '';
    }

    value.textContent = IMC.replace('.', ',');
    document.getElementById('description').textContent = description;
});
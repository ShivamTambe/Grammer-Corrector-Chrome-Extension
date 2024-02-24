const url = 'https://ai-based-spelling-and-grammar-correction.p.rapidapi.com/data';

let resultElement = document.getElementById('result');

async function sendText() {
    let textValue = document.getElementById('grammer_text').value;
    let resultTextarea = document.getElementById('result');
    resultTextarea.style.display = 'block';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'fd4f21fe50msh1ef72472e739f65p1fae9ajsn6d6ea529e9ae',
            'X-RapidAPI-Host': 'ai-based-spelling-and-grammar-correction.p.rapidapi.com'
        },
        body: new URLSearchParams({
            text: textValue
        })
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        resultElement.value = result;
        console.log(result);
    } catch (error) {
        console.error(error);
        resultElement.value = "Erro";
    }
}
const btn = document.getElementById('btn');
btn.addEventListener('click', sendText);
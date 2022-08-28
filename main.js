



const loadQuote = () => {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => showQuote(data))
}

const showQuote = quote => {
    const blockQoute = document.getElementById("quote");
    blockQoute.innerText = quote.quote;
}

function checkChocolate() {
    // Kinukuha ang value mula sa input box
    const input = document.getElementById('chocolateInput').value.toLowerCase().trim();
    
    // Logic para sa tamang chocolate
    if (input === "twix") {
        document.getElementById('setup').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        alert("Oops! Wrong chocolate. Try again!");
    }
}

function toggleLetter() {
    const wrapper = document.getElementById('envelopeWrapper');
    const hint = document.getElementById('hint-text');
    
    // Dinadagdag o tinatanggal ang 'open' class
    wrapper.classList.toggle('open');
    
    if(wrapper.classList.contains('open')) {
        hint.innerText = "Happy Valentine's! ❤️";
    } else {
        hint.innerText = "Click the envelope to open!";
    }
}
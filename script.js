document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "pagina2.html";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

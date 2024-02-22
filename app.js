const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    ul.innerHTML = "";
    
    for(let i = 0; i < 10; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = `${i + 1}. I am awesome!`;
        ul.appendChild(newLi);
    };
});
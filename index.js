const addBtn = document.getElementById("addBtn");
const container = document.querySelector(".container");

addBtn.addEventListener("click", () => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
        <div id="headerNote">
        <p class="noteHeading">Note</p>
        <button class="x">X</button>
        </div>
        <div class="textarea">
        <textarea cols="30" rows="6" placeholder="You can write ur notes here.."></textarea>
        </div>
        `;
    const xButton = newCol.querySelector(".x");
    xButton.addEventListener("click", () => {
        newCol.remove();
    });

    container.querySelector(".row").appendChild(newCol);
});
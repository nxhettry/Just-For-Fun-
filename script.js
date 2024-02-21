let msz = document.querySelector(".message");
let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let head = document.querySelector(".top");

let toPrint = ["Initializing hacking .....", "Reading your files ......", "Password files detected ......", "Sending all passwords and personal files to the server .......", "Cleaning up ........"]

btn.addEventListener("click", async () => {
    btn.remove();
    head.classList.remove("top");
    body.classList.remove("center", "body-before");
    body.classList.add("body-after");
    for (let item of toPrint) {
        await showRes(item);
    }

})

const showRes = async (item) => {
    await delay();
    let p = document.createElement("p");
    p.innerText = item;
    msz.appendChild(p);
}

const delay = () => {
    let time = Math.floor(Math.random() * 8000);
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};
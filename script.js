let msz = document.querySelector(".message");
let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let h = document.querySelector(".top");
btn.addEventListener("click", () => {
    btn.remove();
    body.classList.remove("body-before", "center");
    h.classList.remove("top");
    printMsz();
})

let text = ["Initializing hacking .....", "Reading your files ......", "Password files detected ......", "Sending all passwords and personal files to the server .......", "Cleaning up ........"]

const delayText = () => {
    return new Promise ((resolve, reject) => {
        let time = Math.floor(Math.random() * 7000) +1;
        setTimeout(() => {
            resolve();
        }, time);
    });
}

const startHack = async (items) => {
    await delayText();
    let newMsz = document.createElement("p");
    newMsz.innerText = items;
    msz.append(newMsz);
};

const printMsz = async () => {
    for (let items of text) {
        await startHack(items);
    }  
};


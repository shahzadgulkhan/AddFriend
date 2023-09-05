let istatus = document.querySelector("h3");

let btn = document.querySelector("#Add");
let check = 0;



btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerText = "Friends";
        btn.innerHTML = "Remove Friend";
        istatus.style.color = "green";
        check = 1;

    } else {
        istatus.innerText = "Stranger"
        btn.innerHTML = "Add Friend";
        istatus.style.color = "red"
        check = 0;
    }
    
})
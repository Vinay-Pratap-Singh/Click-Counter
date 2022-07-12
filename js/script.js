// one.onclick = () => {
//     if(one.innerText == ""){
//         one.innerText = 1;
//     }
//     else{
//         one.innerText = Number(one.innerText) + 1;
//     }
// }
// two.onclick = () => {
//     if(two.innerText == ""){
//         two.innerText = 1;
//     }
//     else{
//         two.innerText = Number(two.innerText) + 1;
//     }
// }
// three.onclick = () => {
//     if(three.innerText == ""){
//         three.innerText = 1;
//     }
//     else{
//         three.innerText = Number(three.innerText) + 1;
//     }
// }

// btn.onclick = () => {
//     one.innerText = "";
//     two.innerText = "";
//     three.innerText = "";
// }

setInterval(() => {
    
}, );

let blocks = document.querySelectorAll(".block");
blocks.forEach(element => {
    element.addEventListener("click", () => {
        if(element.innerText == ""){
            element.innerText = 1;
        }
        else{
            element.innerText = Number(element.innerText) + 1;
        }
    });
});

btn.onclick = () => {
    blocks.forEach(element => element.innerText = "");
}
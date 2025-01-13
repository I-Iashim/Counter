let count = document.querySelector("#count")
let resetBtn = document.querySelectorAll(".resetBtn")
let addBtn = document.querySelectorAll(".addBtn")


let i = 0
resetBtn.forEach((resetBtn)=>{
    resetBtn.addEventListener("click",()=>{
        count.innerText = 0;
        i = 0
    })
})

addBtn.forEach((addBtn) => {
    addBtn.addEventListener("click",()=>{
        i++;
        count.innerText = i
    })
});
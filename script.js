const inputbtn=document.querySelector('#input-btn')

let myleads=[]
const inputEl=document.querySelector('#input-el')
const ulel=document.querySelector("#ulEl")

inputbtn.addEventListener('click',function(){
    
    myleads.push(inputEl.value)
    inputEl.value=''
    renderleads()
    
    
})

function renderleads(){
    listitems=''
    for (let i=0;i<myleads.length;i++){
        listitems+=`
        <li>
            <a target=_main href='${myleads[i]}'>
            ${myleads[i]}
            </a>
        </li>`

        console.log(listitems)
    }
    ulel.innerHTML=listitems
}

// function renderlead(){
//     let listitems="<li>"+inputEl.value+"</li>"      
//     ulel.innerHTML+=listitems
// }
// its better to put this outside cause DOM comes with a cost
//instead of renderind it out again and again better to put outside


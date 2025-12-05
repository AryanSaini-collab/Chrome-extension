const inputbtn=document.querySelector('#input-btn')

let myleads=[]
const inputEl=document.querySelector('#input-el')
const deletebtn=document.querySelector('#del-btn')
const ulel=document.querySelector("#ulEl")
const tabbtn=document.querySelector('#tab-btn')
const leadsfromlocalStorage= JSON.parse(localStorage.getItem("myleads"))
console.log(leadsfromlocalStorage)



tabbtn.addEventListener('click',function(){
    // API THINGS
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleads(myleads)
    })
    
})


inputbtn.addEventListener('click',function(){
    
    myleads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleads(myleads)
    
    
})




deletebtn.addEventListener('dblclick',function(){
    localStorage.clear()
    myleads=[]
    renderleads(myleads)
    

})



if(leadsfromlocalStorage){
    myleads=leadsfromlocalStorage
    renderleads(myleads)
}



function renderleads(leads){
    listitems=''
    for (let i=0;i<leads.length;i++){
        listitems+=`
        <li>
            <a target=_main href='${leads[i]}'>
            ${leads[i]}
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


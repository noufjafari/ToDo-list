let list = []
let inputbox = document.getElementById("inputbox")
let listcontainer = document.getElementById("listcontainer")

document.getElementById("btn").addEventListener("click",function(){
list.push(inputbox.value)
localStorage.setItem("inputbox", inputbox.value)
inputbox.value=""
showList();

})

function showList(){
    listcontainer.innerHTML=""
    list.forEach(function(x){
        listcontainer.innerHTML += "<li><img src=uncheked.svg width=20px >"+x+"</li>"

    })

}


var button = document.getElementById("btn")
var input = document.getElementById("text1")
var ul = document.getElementsByTagName("ul")[0]

button.addEventListener("click", function(){
    if (input.value.length>0){
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li)
        input.value=""
    }
})

input.addEventListener("keypress", function(){
    if (input.value.length>0 && event.keyCode===13)
    {
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li)
        input.value=""
    }
})
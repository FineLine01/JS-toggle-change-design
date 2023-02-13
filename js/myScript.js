const changeStyle = document.querySelector("button")

changeStyle.addEventListener('click', function(){
    if (changeStyle.classList.contains("st-1")) {
        changeStyle.classList.remove("st-1");
        changeStyle.classList.add("st-2");
    }
    else if (changeStyle.classList.contains("st-2")) {
        changeStyle.classList.add("st-1");
        changeStyle.classList.remove("st-2")
    }
})
const title = document.querySelector("#title");

const BASE_COLOR = "peru";
const OTHER_COLOR ="#2c3e50"

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

function handleClick(){
    const hasclass = title.classList.contains(CLICKED_CLASS);
    if(hasclass){
        title.classList.remove(CLICKED_CLASS);
    } else{
        title.classList.add(CLICKED_CLASS);
    }
}


function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init()
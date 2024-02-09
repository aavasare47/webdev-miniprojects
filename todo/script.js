const addButton = document.getElementById("addTask");
const inputBox = document.getElementById("taskInput");
const tasklist = document.getElementById("tasklist");

addButton.addEventListener("click", ()=>{
    if( inputBox.value !== ""){
        var li = document.createElement('li');
        li.innerHTML = inputBox.value;
        tasklist.appendChild(li);
        inputBox.value = "";

        li.addEventListener('click', ()=>{
            // tasklist.removeChild(li);
            if (li.style.textDecorationLine === "line-through") {
                li.style.textDecorationLine = "none";
            } else {
                li.style.textDecorationLine = "line-through";
            }
        })
    }else{
        alert("Are you dumb or something?");
    }
})

function removeTask(li){
    li.parentNode.removeChild(li);
}

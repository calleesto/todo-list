function addToList() {
    var list= document.getElementById("myList");

    var item = document.createElement("li");
    var input = document.createElement("input");
    
    item.appendChild(input);
    list.appendChild(item);

    input.type = "text";
    input.size = "20";
}

function alert() {
    alert("First add all your tasks, then take a screenshot.\nDone!\nYour TO-DO LIST is ready in you photo gallery ;P");
}

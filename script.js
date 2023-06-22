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
    msg = "First add all your tasks, then take a screenshot. Done, quick and easy! Your TO-DO LIST is ready in you photo gallery ;P"
    var list= document.getElementById("myList");    

    var item = document.createElement("li");
    var input = document.createElement("p");
    input.style = "background-color: white; font-size: 30px;"
    
    item.appendChild(input);
    list.appendChild(item);
    input.innerHTML = msg
}

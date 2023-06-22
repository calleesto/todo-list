function addToList() {
    var list= document.getElementById("myList");

    var item = document.createElement("li");
    var input = document.createElement("input");
    
    item.appendChild(input);
    list.appendChild(item);

    input.type = "text";
    input.size = "60";
}

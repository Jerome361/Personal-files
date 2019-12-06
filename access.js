//assigning all elements to their appropriate methods.
const demoId = document.getElementById("demo");
const demoClass = document.getElementsByClassName("demo");
const demoTag = document.getElementsByTagName("article");
const demoQuery = document.querySelector("#demo-query"); //picks on the first id/class/tag
const demoQueryAll = document.querySelectorAll(".demo-query-all"); //selects all id/class/tag
//changing the border color of id demo to purple
demoId.style.border="2px solid purple"

//changing border color of all elements with class borderClass
for (i=0; i<demoClass.length; i++){               //index i is a counter
    demoClass[i].style.border = "2px solid orange"
}

//changing border of all tags
for (i=0; i<demoTag.length; i++){
    demoTag[i].style.border="2px solid blue"
}

//changing
demoQuery.style.border= "2px solid red"
//change boarder of class query-all
demoQueryAll.forEach(
    query=>{
        query.style.border= "2px solid green"
    }
);
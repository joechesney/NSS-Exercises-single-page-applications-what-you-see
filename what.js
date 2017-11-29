let celebs = [
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
},
    {
    title: "Knight",
    name: "Ian McKellen",
    bio: "Legendary actor and cultural icon.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1946,
      death: "-"
    }
},
    {
    title: "Musician",
    name: "Andy Williams",
    bio: "Shredder, Lover, and mover of weights.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1977,
      death: "-"
    }
},
    {
    title: "Singer",
    name: "Keith Buckley",
    bio: "Master of lyricism and vocals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1977,
      death: "-"
    }
}]; // end of array

let containerDiv = document.getElementById("container");
// loop to produce the cards

for (let i = 0; i < celebs.length; i++) {
    let newContent = "<header>" + celebs[i].name + ", " + celebs[i].title + "</header>";
    newContent += `<bio id="bio${i}">${celebs[i].bio}</bio><br><img src="${celebs[i].image}"/>`;
    newContent += `<br><lifespan>Born: ${celebs[i].lifespan.birth}<br>`;
    newContent += `Died: ${celebs[i].lifespan.death}</lifespan>`;

    //place content inside of the new card
    // let contentHolder = document.createTextNode(newContent);
    let newCard = document.createElement("div");
    newCard.innerHTML = newContent;
    newCard.setAttribute("class", "oneCard");
    containerDiv.appendChild(newCard);
}; // end of loop

// declare textBox and assign en event listener to every element in the container
const textBox = document.getElementById("inputBox");
const containerDivElements = document.getElementsByClassName("oneCard");
for (var j = 0; j < containerDivElements.length; j++) {
    containerDivElements[j].addEventListener("click", function (event) {
        textBox.value = "";
        for (var y = 0; y < containerDivElements.length; y++){
            containerDivElements[y].setAttribute("style", "border: none;");
            console.log("border removed");
        }
        this.setAttribute("style", " border: 3px dotted black;"); // 'this' fixed everything!!!
        textBox.focus();
        console.log("before focus");
    });
    
};


// const bioInEl = document.getElementById();
// // textbox sync with bio
// textBox.addEventListener("click")
// textBox.value;

textBox.addEventListener("keyup", syncBio);
 
function syncBio() {
    for (let d = 0; d < containerDivElements.length; d++){
        if (document.getElementById(`bio${d}`).parentElement.style.border != "none"){
            var bioBox = document.getElementById(`bio${d}`);
        }
    }
    if(event.keyCode != 13) {
        bioBox.innerHTML = textBox.value;
    }else if(event.keyCode === 13){
        textBox.value = "";
    }
}


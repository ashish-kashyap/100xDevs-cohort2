// let globalId = 1;

// function markAsDone(todoId) {
//     const parent = document.getElementById(todoId);
//     parent.children[2].innerHTML = "Done!";
// }

function updateDomAccToState(state) {
    const parent = document.getElementById("container");
    parent.innerHTML = "";  //clears the element
    for(let i=0; i<state.length; i++) {
        //every element in the state calls createChild in them
        const child = createChild(state[i].title, state[i].description, state[i].id);
        parent.appendChild(child);
    }
}
window.setInterval(async function() {
    const res = await fetch("http://localhost:3000/todos")
    const json = await res.json();
    updateDomAccToState(json.todos)
}, 5000)

updateDomAccToState([{
    Id: 1,
    title: "Go to gym",
    description: "Go to gym from 7 - 9 PM"
}, 
{
    Id: 2,
    title: "Go to gym2",
    description: "Go to gym2 from 7 - 9 PM"
},])

function createChild(title, description, id) {
    const child = document.createElement("div");
    const firstGrandChild = document.createElement("div");
    firstGrandChild.innerHTML = title;
    const secondGrandChild = document.createElement("div");
    secondGrandChild.innerHTML = description;
    const thirdGrandChild = document.createElement("button");
    thirdGrandChild.innerHTML = "Mark as done";
    thirdGrandChild.setAttribute("onClick", `markAsDone(${id})`);
    child.appendChild(firstGrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);
    child.setAttribute("id", id);
    return child;
}



// function addTodo() {
//     const title = document.getElementById("title").value;
//     const description = document.getElementById("description").value;
//     const parent = document.getElementById("container");

//     parent.appendChild(createChild(title, description, globalId++));  
// }



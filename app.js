function func() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  var email1 = localStorage.getItem("email1");
  var pass1 = localStorage.getItem("pass1");

  if (email == email1 && pass == pass1) {
    window.location.href = "home.html";

  } else {
    alert("email or password incorrect")
  }
}


// todo app




var pass = document.getElementById("pass");
function func5() {
    var addText = document.getElementById("add");
    var li = document.createElement("li");
    var liText = document.createTextNode(add.value)
    li.appendChild(liText)

    // create deletebtn
 var delBtn = document.createElement("button");
 var delText = document.createTextNode("DELETE")
 delBtn.appendChild(delText)
 delBtn.setAttribute("class","btn")
 delBtn.setAttribute("onClick","myFunc(this)")

 li.appendChild(delBtn)

 // create editbtn

 var editBtn = document.createElement("button");
 var editText = document.createTextNode("edit")
 editBtn.appendChild(editText)
 editBtn.setAttribute("class","edit")
 editBtn.setAttribute("onClick","abc(this)")
li.appendChild(editBtn)

    pass.appendChild(li)
    add.value = ""
    console.log(li)
}
function myFunc(e) {
    console.log(e.parentNode.remove())
}

function delelteAll(){
    pass.innerHTML = ""
    
}

function abc(e) {
   var val = e.parentNode.firstChild.nodeValue
   var editValue = prompt("enter a text value","val")
   e.parentNode.firstChild.nodeValue = editValue
}



// pop up


function myFunction() {
  let text;
  let person = prompt("Team name:", "name");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = text;
  window.location.href = "hom1.html";
}


// save  button

function func6() {
  var add2 = document.getElementById("add2").value;
 
  var add2 = localStorage.getItem("add2");
  localStorage.setItem("add3",add2)
  // localStorage.setItem("email1",email)
  // localStorage.setItem("pass1",pass)
}


function show1() {
    document.getElementById("card1").style.display = "unset";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("show1").style.color = "rgb(127, 22, 24)";
    document.getElementById("SecondSectionLi1").style.borderColor = "rgb(127, 22, 24)";
    document.getElementById("SecondSectionbtn2").style.color = "";
    document.getElementById("SecondSectionLi2").style.borderColor = "";
    document.getElementById("btn3").style.color = "";
    document.getElementById("SecondSectionbtn3").style.borderColor = "";
}

function show2() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "unset";
    document.getElementById("card3").style.display = "none";
    document.getElementById("SecondSectionbtn2").style.color = "rgb(127, 22, 24)";
    document.getElementById("SecondSectionLi2").style.borderColor = "rgb(127, 22, 24)";
    document.getElementById("show1").style.color = "";
    document.getElementById("SecondSectionbtn2").style.borderColor = "";
    document.getElementById("btn3").style.color = "";
    document.getElementById("SecondSectionbtn3").style.borderColor = "";
}

function show3() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "unset";
    document.getElementById("btn3").style.color = "rgb(127, 22, 24)";
    document.getElementById("SecondSectionbtn3").style.borderColor = "rgb(127, 22, 24)";
    document.getElementById("show1").style.color = "";
    document.getElementById("SecondSectionLi1").style.borderColor = "";
    document.getElementById("SecondSectionbtn2").style.color = "";
    document.getElementById("SecondSectionLi2").style.borderColor = "";
}

let UserInput = document.querySelector("[name= 'User']"); // get attribute in form
let email = document.querySelector("[name= 'Email']"); // get attribute in form
let s = document.getElementById("sub");

s.addEventListener("click", function(e) {
    if (UserInput.value === "") {
        window.alert("name is empty");
        e.preventDefault();
    } else if (!isNaN(UserInput.value)) {
        window.alert("name is cant be number");
        e.preventDefault();
    }
    if (email.value === "" || !isNaN(email.value)) {
        window.alert("email is empty");
        e.preventDefault();
    }
})
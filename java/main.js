// popup overley
// popup login
// popup sign up

var popupoverly = document.querySelector(".overly")
var popuplogin = document.querySelector(".login")
var popupsignup = document.querySelector(".signup")

function log()
{
 popuplogin.style.display="block"
 popupoverly.style.display="block"
}
function sign()
{
    popupsignup.style.display="block"
    popupoverly.style.display="block"

}
function clo()
{
   popuplogin.style.display="none"
   popupoverly.style.display="none"
}
function ose(){
    popupsignup.style.display="none"
    popupoverly.style.display="none"
}

// login alret

function validateInput() {
    var use = document.getElementById("user1").value;
    var pass = document.getElementById("pass1").value;
    var overlay = document.getElementById("overlay1");
    var alertBox = document.getElementById("customAlert");
    var message = document.getElementById("alertMessage");

    if (use,pass.trim() === "") {
      alertBox.className = "error";
      message.textContent = "Invalid: Input box is empty!";
    } else {
      alertBox.className = "success";
      message.textContent = "Successful: Welcome back!";
    }

    overlay.style.display = "block";
  }

  function closeAlert() {
    document.getElementById("overlay1").style.display = "none";
  }
//   signup alret
function third() {
    var inuput = [ 
    document.getElementById("first").value.trim(),
    document.getElementById("last").value.trim(),
    document.getElementById("used").value.trim(),
    document.getElementById("pased").value.trim()
    ];
    var allFilled = inuput .every (value => value !=="");


    var overlay = document.getElementById("over2");
    var alertBox = document.getElementById("custom4");
    var message = document.getElementById("alertMes");

    if (allFilled) {
        alertBox.className = "success";
      message.textContent = "Successful: Welcome to Book my Journey!";
    
    } else {
        alertBox.className = "error";
        message.textContent = "Invalid: Input box is empty!";
    
    }

    overlay.style.display = "block";
  }

  function thr() {
    document.getElementById("over2").style.display = "none";
  }

  //  search bar function js

  const pairs = {
    "Coimbatore-Chennai": "pair1.html",
    "Chennai-Coimbatore": "pair1.html",

    "Chennai-Bangalore": "pair2.html",
    "Bangalore-Chennai": "pair2.html",

    "Coimbatore-Kochin": "pair3.html",
    "Kochin-Coimbatore": "pair3.html",

    "Bangalore-Kochin": "pair4.html",
    "Kochin-Bangalore": "pair4.html",

    "Chennai-Kochin": "pair5.html",
    "Kochin-Chennai": "pair5.html",

    "Chennai-Tiruvanrum": "pair6.html",
    "Tiruvanrum-Chennai": "pair6.html",

    "Coimbatore-Tiruvanrum": "pair7.html",
    "Tiruvanrum-Coimbatore": "pair7.html",

    "Bangalore-Tiruvanrum": "pair8.html",
    "Tiruvanrum-Bangalore": "pair8.html",

    "Bangalore-Coimbatore": "pair9.html",
    "Coimbatore-Bangalore": "pair9.html",
  
  };

  function searchPair() {
    const city1 = document.getElementById("city1").value;
    const city2 = document.getElementById("city2").value;

    if (city1 && city2 && city1 !== city2) {
      const key =`${city1}-${city2}`;
      if (pairs[key]) {
        window.location.href = pairs[key];
      } else {
        alert("No page exists for this pair.");
      }
    } else {
      alert("Please select two different cities.");
    }
  
      


  }

  



// calaendar

function showDay(dateStr, targetId) {
const date = new Date(dateStr);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.getElementById(targetId).textContent = "Day: " + days[date.getDay()];

}



flatpickr("#departure", {
dateFormat: "Y-m-d",
onChange: function(selectedDates, dateStr) {
showDay(dateStr, "departureDay");

}

});

flatpickr("#return", {
dateFormat: "Y-m-d",
onChange: function(selectedDates, dateStr) {
showDay(dateStr, "returnDay");
}
});




// traveller

const options = [
'1 Traveller', '2 Travellers', '3 Travellers', '4 Travellers', '5 Travellers',
'6 Travellers', '7 Travellers', '8 Travellers', '9 Travellers', '10 Travellers',

];

const input = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdownList');

function filterDropdown(value) {
dropdown.innerHTML = '';
const filtered = options.filter(option =>
option.toLowerCase().includes(value.toLowerCase())
);

if (filtered.length === 0) {
dropdown.style.display = 'none';
return;
}

filtered.forEach(option => {
const item = document.createElement('div');
item.textContent = option;
item.onclick = () => {
  input.value = option;
  dropdown.style.display = 'none';
};
dropdown.appendChild(item);
});

dropdown.style.display = 'block';
}

input.addEventListener('input', () => {
const value = input.value.trim();
if (value === '') {
dropdown.style.display = 'none';
} else {
filterDropdown(value);
}
});

input.addEventListener('click', () => {
if (input.value.trim() !== '') {
filterDropdown(input.value);
}
});

document.addEventListener('click', (e) => {
if (!document.querySelector('.dropdown-container').contains(e.target)) {
dropdown.style.display = 'none';
}
});



// second page



// icon   



   
  
    
     
  
  
  

  


  

  
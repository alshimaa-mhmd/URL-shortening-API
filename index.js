// variables 
var icon = document.querySelector(".menu-icon"),
    menu = document.querySelector(".menu"),
    myBtn = document.querySelector(".shorten-btn"),
    myInput = document.querySelector(".shorten-input"),
    responseField = document.querySelector(".response"),
    result1 = document.querySelector("#result1"),
    result2 = document.querySelector("#result2"),
    result3 = document.querySelector("#result3"),
    url = "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html",
    errMsg = document.querySelector(".err-msg"),
    copy1 = document.createElement("button"),
    copy2 = document.createElement("button"),
    copy3 = document.createElement("button");


// copy function 
copy1.className = "copy";
copy1.innerHTML = "Copy";
copy1.style.backgroundColor = "#2dcfd1";
copy1.onclick = () => {
  document.execCommand("copy");
  copy1.innerHTML = "Copied!";
  copy1.style.backgroundColor = "rgb(58, 49, 80)";
};

copy2.className = "copy";
copy2.innerHTML = "Copy";
copy2.style.backgroundColor = "#2dcfd1";
copy2.onclick = () => {
  document.execCommand("copy");
  copy2.innerHTML = "Copied!";
  copy2.style.backgroundColor = "rgb(58, 49, 80)";
};

copy3.className = "copy";
copy3.innerHTML = "Copy";
copy3.style.backgroundColor = "#2dcfd1";
copy3.onclick = () => {
  document.execCommand("copy");
  copy3.style.backgroundColor = "rgb(58, 49, 80)";
  copy3.innerHTML = "Copied!"; 
}; 



// menu for min-screens 
icon.onclick = () => {
  menu.classList.toggle("open");
  menu.style.height = "auto" ;
}; 


// fetch data 
function getURL(){
  const val = myInput.value;
  const requestURL = `${url}${val}`;
  fetch(requestURL)
    .then((response) => {
    return response.json();
  })
    .then((myJson) => {
    console.log("processing");
    result1.innerHTML = myJson.result.full_short_link;
    result1.appendChild(copy1);
    result2.innerHTML = myJson.result.full_short_link2;    result2.appendChild(copy2);
    result3.innerHTML = myJson.result.full_short_link3;     result3.appendChild(copy3);    console.log("Done");
  })
  .catch((err) => {
    console.log('Fetch Error', err);
  });
}


// shorten function 
function shorten(){
  if(!myInput.value){
    myInput.classList.add("empty");
    errMsg.classList.add("error");
    myInput.classList.add("my-placeholder"); 
  };
  if(myInput.value){
  myInput.classList.remove("empty");
  errMsg.classList.remove("error");
  myInput.classList.remove("my-placeholder");
   responseField.style.display = "block";
    getURL();
  }
}

// calling shorten
myBtn.addEventListener("click", shorten);
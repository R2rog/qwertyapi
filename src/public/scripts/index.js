const modal = document.getElementById("myModal");
const btn = document.getElementById("download-btn");
const cancelTerms = document.getElementById("cancel-terms");
const acceptTerms = document.getElementById("accept-terms");
const span = document.getElementsByClassName("close")[0];
let downloads = 0;
//This section is in charge of displaying the terms and conditions when the user clicks download
btn.addEventListener("click", (e) => {
  let url = "";
  modal.style.display = "block";
  downloads += 1;
  if (navigator.appVersion.indexOf('Win') != -1) url = "https://github.com/R2rog/qwertyapp/releases/download/v1.0.4/qwerty-Setup-1.0.4.exe";
  else if (navigator.appVersion.indexOf('Mac')!= -1) url = "https://github.com/R2rog/qwertyapp/releases/download/v1.0.4/qwerty-1.0.4.dmg";
  else url = "https://github.com/R2rog/qwertyapp/releases/download/v1.0.4/qwerty_1.0.4_amd64.deb";
  acceptTerms.setAttribute('href', url);
});

span.addEventListener("click",(e)=>{
    modal.style.display = "none";
});

cancelTerms.addEventListener("click",(e)=>{
  modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*Function that calls to the server to download the installer.
acceptTerms.addEventListener('click',()=>{
    /*fetch('http://localhost:8080/download') //Path relative to the server
    .then(data => {
        alert("File downloaded successfully!");
        modal.style.display = "none";
      }).catch(error => {
        alert("Seems like something went wrong. Please try later.");
        modal.style.display = "none";
    });
    fetch('https://github.com/R2rog/qwertyapp/releases/download/1.0.0/ss4qG4qDfap4yxHu6TPKW8BKzNM2qD.dmg')
    .then(response=> console.log('Status: ',response.json()))
    .catch(error=> console.log('Error: ',error));
});*/

acceptTerms.addEventListener('click',()=>{
  modal.style.display = "none";
})

$(function () {
    // init feather icons
    feather.replace();
});
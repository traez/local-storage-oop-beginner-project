(function(){
  let store = document.querySelector("#store");
  let retrieve = document.querySelector("#retrieve");
  let removeBut = document.querySelector("#removeBut");
  let clearBut = document.querySelector("#clearBut");
  let input = document.querySelectorAll("input");

store.addEventListener("click", () => {
  let carBrand = document.getElementById('carBrand').value;
  let carPrice = document.getElementById('carPrice').value;
  let carKey = document.getElementById('carKey').value;
  
  const car = {
    carBrand: carBrand,
    carPrice: carPrice,
  }

  localStorage.setItem(carKey, JSON.stringify(car));

  input.forEach(inp => {
    inp.value = "";
  })
});  

retrieve.addEventListener("click", () => {
  let carKeyReq = document.getElementById('retrieveKey').value;
  let records = localStorage.getItem(carKeyReq);
  let paragraph = document.createElement("p");
  let infor = document.createTextNode(records);
  paragraph.appendChild(infor);
  let element = document.getElementById("display");
  element.appendChild(paragraph);
  input.forEach(inp => {
    inp.value = "";
  })
});

removeBut.addEventListener("click", () => {
  let key = document.getElementById('removeKey').value; //gets key from user
  localStorage.removeItem(key);
  input.forEach(inp => {
    inp.value = "";
  })
});

clearBut.addEventListener("click", () => {
    localStorage.clear();
});

})();
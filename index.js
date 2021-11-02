const lista = document.createElement("ul");
const btnGenerate = document.querySelector("button")

const delay = (ms) => new Promise(function(resolve) {
    window.setTimeout (function() { 
    resolve(createRandomArray())}, ms)
});

async function generateList() {
    const allPromises = [delay(5000),promise2, promise1];
     await Promise.allSettled(allPromises);
     document.body.appendChild(lista)
}

function createRandomArray() {
    const array = new Array(Math.round(Math.random()*10));
    array.fill(Math.round(Math.random()*10));
    for (const element of array) {
        lista.innerHTML += `<li> ${element} </li>`;
    };
    }
const promise2 = new Promise (function(resolve) {
      window.setTimeout(
        function() {
          resolve(createRandomArray())
        }, Math.random() * 2000 + 1000);
    });
const promise1 =  Promise.resolve(createRandomArray());

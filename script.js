//your JS code here. If required.
let resultArray = [];
const loadingElement = document.createElement("tr");
loadingElement.id = "loading";
loadingElement.innerHTML = `<td colspan="2">Loading...</td>`;
const tbodyElement = document.getElementById("output");
tbodyElement.append(loadingElement);

function appendFunc(name, time) {
  resultArray.push({ name, time });
}

let promises = [];

// Create three promises, each resolving after a random time between 1 and 3 seconds
for (let i = 1; i <= 3; i++) {
  let start = new Date().getTime();
  let randomTime = Math.floor(Math.random() * 3000) + 1000;

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      let end = new Date().getTime();
      appendFunc(`Promise ${i}`, (end - start) / 1000);
    }, randomTime);
  });

  promises.push(promise);
}

Promise.all(promises)
  .then(() => {
    loadingElement.remove();

    for (let i = 0; i < resultArray.length; i++) {
      let resultTR = document.createElement("tr");
      resultTR.innerHTML = `
        <td>${resultArray[i].name}</td>
        <td>${resultArray[i].time}</td>
      `;
      tbodyElement.append(resultTR);
    }

    // Calculate the total time taken
    let totalTime = resultArray.reduce((sum, result) => sum + result.time, 0);

    // Add a row for the total time
    let totalTR = document.createElement("tr");
    totalTR.innerHTML = `
      <td>Total</td>
      <td>${totalTime.toFixed(3)}</td>
    `;
    tbodyElement.append(totalTR);
  })
  .catch((error) => {
    console.error(error);
  });

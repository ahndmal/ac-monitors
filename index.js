
const url = "https://us-east1-ac-monitors.cloudfunctions.net/ac-monitors-2"

const root = document.querySelector(".root");

fetch(url)
  .then((res) => res.json())
  .then((resp) => {
    const arr = resp;

    const jiraProd = arr[0]["jiraProd"];
    const jiraStage = arr[0]["jiraStage"];
    const conflStage = arr[0]["confProd"];
    const arr = [jiraProd, jiraStage, conflStage];
    for (let instance of arr) {
      const statusDiv = document.createElement("div");
      statusDiv.innerHTML = `<div>
          <p>${instance}</p>
        </div>`;
      root.appendChild(statusDiv);
    }
    
  });



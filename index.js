
const url = "https://us-east1-ac-monitors.cloudfunctions.net/ac-monitors-2"

const root = document.querySelector(".root");

fetch(url)
  .then((res) => res.json())
  .then((resp) => {
    const jiraProd = resp[0]["jiraProd"];
    const jiraStage = resp[1]["jiraStage"];
    const conflStage = resp[2]["confProd"];
    const arr = [jiraProd, jiraStage, conflStage];
    const state = instance === 'RUNNING' 
      ? `<p style="color: green">${instance}</p>`
      : `<p style="color: yellow">${instance}</p>`;
    for (let instance of arr) {
      const statusDiv = document.createElement("div");
      statusDiv.innerHTML = `<div>
          ${state}
        </div>`;
      root.appendChild(statusDiv);
    }
    
  });



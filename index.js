
const url = "https://us-east1-ac-monitors.cloudfunctions.net/ac-monitors-2"

const root = document.querySelector(".root");

fetch(url)
  .then((res) => res.json())
  .then((resp) => {
    const data = resp;
    const jiraProd = data["https://jira.ontrq.com/status"];
    const jiraStage = data["https://jira-stage.ontrq.com/status"];
    const conflStage = data["https://confluence.ontrq.com/status"];
    const arr = [jiraProd, jiraStage, conflStage];
    for (let instance of arr) {
      const statusDiv = document.createElement("div");
      statusDiv.innerHTML = `<div>
          <p>${instance.state}</p>
        </div>`;
      root.appendChild(statusDiv);
    }
    
  });



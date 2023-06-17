
const url = "https://us-east1-ac-monitors.cloudfunctions.net/ac-monitors-2"
const root = document.querySelector(".root");

fetch(url)
  .then((res) => res.json())
  .then((resp) => {
    for (let instance of resp) {
      const insName = Object.getOwnPropertyNames(instance)[0];
      const stateName = instance[insName];
      const htmlData = `<p>
        <span>${insName}</span>
        ${stateName}</p>`

      const statusDiv = document.createElement("div");

      statusDiv.innerHTML = `<div class="instance">
          <p>
            ${insName}&nbsp
            <span>${stateName}<span>
          </p>
        </div>`;

      let stateSpan = statusDiv.querySelector("span");

      stateName === 'RUNNING' 
        ? stateSpan.classList.add("statusOk")
        : stateSpan.classList.add("statusErr") 

      root.appendChild(statusDiv);
    }
    
  });



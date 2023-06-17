
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
            <span>${insName}&nbsp</span>
            ${stateName}</p>
        </div>`;

      let stateSpan = statusDiv.querySelector("span");

      stateName === 'RUNNING' 
        ? stateSpan.style = "color: green"
        : stateSpan.style = "color: yellow";

      root.appendChild(statusDiv);
    }
    
  });



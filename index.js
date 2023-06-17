
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
      
      stateName === 'RUNNING' 
        ? statusDiv.style = "color: green"
        : statusDiv.style = "color: yellow";

      statusDiv.innerHTML = `<div>${stateName}</div>`;
      root.appendChild(statusDiv);
    }
    
  });



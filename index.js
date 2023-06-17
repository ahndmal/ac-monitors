
const url = "https://us-east1-ac-monitors.cloudfunctions.net/ac-monitors-2"
const root = document.querySelector(".root");

fetch(url)
  .then((res) => res.json())
  .then((resp) => {
    
    console.log(resp);

    const arr = JSON.parse(resp);
    
    console.log(arr);

    for (let instance of arr) {
      const insName = Object.getOwnPropertyNames(instance)[0];
      const stateName = instance[insName];
      const state = stateName === 'RUNNING' 
        ? `<p style="color: green">
            <span>${insName}</span>
            ${stateName}</p>`
        : `<p style="color: yellow">${instance}</p>`;
      const statusDiv = document.createElement("div");
      statusDiv.innerHTML = `<div>
          ${state}
        </div>`;
      root.appendChild(statusDiv);
    }
    
  });



const calculateBtn = document.querySelector("#calc-btn");
const delBtn = document.querySelector("#del-btn");
const height = document.getElementById("height-input");
const weight = document.getElementById("weight-input");
const showDiv = document.getElementById("result");

const calculateBmi = () => {
  const heightVal = +height.value;
  const weightval = +weight.value;

  const bmi = weightval / (heightVal * heightVal);
  let prase = "";
  if (isNaN(bmi) || !heightVal || !weightval) {
    prase = "მონაცემი არასწორად შეგყავს ან საერთოდ არ შეგყავს";
    showDiv.textContent = prase;
    return;
  }

  const resultEl = document.createElement("ion-card");

  if (bmi < 15) {
    prase = `ჭამე შვილოოო ჭამე!`;
  } else if (bmi < 18.5 && bmi >= 15) {
    prase = ` თამამად შეგიძლია საღამოობით მაცივრის კარი აიკლო`;
  } else if (bmi > 18.5 && bmi < 24.9) {
    prase = ` კარგ ფორმაში ხარ`;
  } else if (bmi > 24.9 && bmi < 29.9) {
    prase = `ორშაბათიდან ვარჯიშს იწყებ`;
  } else if (bmi > 30) {
    prase = `ორშაბათიდან შიმშილს იწყებ, დიეტა არ გიშველის`;
  }

  resultEl.innerHTML = `
  <ion-card-content>
  <h2> შენი სხეულის მასის ინდექსი არის ${bmi.toFixed(1)}</h2>
  <h2>${prase}</h2>
  </ion-card-content>
  `;
  showDiv.innerHTML = "";
  showDiv.appendChild(resultEl);
};

const resetInputs = () => {
  height.value = "";
  weight.value = "";
};

calculateBtn.addEventListener("click", calculateBmi);
delBtn.addEventListener("click", resetInputs);

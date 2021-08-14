import init, {
  collatz,
  collatz_next_number
} from "./pkg/collatz_wasm.js";

init().then(() => {
  // initialize chart
  const ctx = document.getElementById('collatz-line-chart').getContext('2d');
  const options = {
    elements: {
      point: { radius: 0 } // no points, only line
    },
    plugins: {
      legend: { display: false }, // disable legend
      tooltip: { enabled: false }, // disable tooltip
    },
  };
  Chart.defaults.font.size = 18;

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [],
    },
    options: options,
  });

  // initialize dataset
  addDataset(myChart, collatz(5)); // <-- WASM being esecutet here!

  // add visualization
  const bttnEl = document.getElementById("visualize-bttn");
  bttnEl.addEventListener("click", () => {
    bttnEl.disabled = true;
    for (let c = 0; c < 100; c++) {
      setTimeout(() => {
        const sequence = collatz(c); // <-- WASM being esecutet here!
        console.log(`sequence ${c}: ${sequence}`);
        addDataset(myChart, sequence);
        document.querySelector("#subtitle").innerHTML = `Sequence: ${c}`;
      }, c * 200);
    }
  })
});

function addDataset(myChart, sequence) {
  const data = myChart.data;
  const dataLength = Math.max(sequence.length, data.labels.length);
  const newDataset = {
    data: sequence,
    borderColor: "rgb(249,65,68)",
    backgroundColor: "rgb(249,65,68)",
    tension: 0.4,
    borderWidth: 1,
  };
  data.labels = [...Array(dataLength).keys()],
  myChart.data.datasets.push(newDataset);
  myChart.update();
}

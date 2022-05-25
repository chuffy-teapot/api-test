import render from "./render.js"

let list = document.getElementById("list");

async function mainFunc() {
  const fetchData = await fetch("https://reqres.in/api/users");
  let fetchAwait = await fetchData;

  if (fetchAwait.ok) {
    let data = (await fetchAwait.json()).data;
    render(list, data);
  }
}

mainFunc()
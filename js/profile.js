import newNode from "./newNode.js";

(async () => {
  let userId = window.location.search.split("=")[1];

  const singleUserData = await fetch("https://reqres.in/api/users/" + userId);

  if (singleUserData.ok) {
    let data = (await singleUserData.json()).data;
    let userNode = newNode(data, false);

    document.querySelector(".container").append(userNode);
  }
})();
import newNode from "./newNode.js";

export default function(where, data) {
  let docFragment = document.createDocumentFragment();

  data.forEach((user) => {
    let userNode = newNode(user);

    docFragment.append(userNode);
  });

  where.innerHTML = "";
  where.append(docFragment);
}
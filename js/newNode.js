export default function ({ id, first_name, last_name, email, avatar }, linkIsVisible = true) {
  let template = document.querySelector(".template");
  let newTemplate = template.content.cloneNode(true);

  let card = newTemplate.querySelector(".card")
  card.dataset.id = id;
  newTemplate.querySelector(".img").src = avatar;
  newTemplate.querySelector(".name").textContent = `${first_name} ${last_name}`;
  newTemplate.querySelector(".email").textContent = email;
  let btn = newTemplate.querySelector(".btn");

  if (linkIsVisible) {
    btn.href = `/profile.html?user=${id}`;
  } else {
    btn.style.display = `none`;
  }

  return newTemplate;
}
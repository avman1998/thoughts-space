let postArr = [];

function renderPosts() {
  let HTML = "";
  for (let post of postArr) {
    HTML += `
<h1 class="user-name">${post.title}</h1>
<p class="paragraph-thought">${post.body}</p>
<hr>
`;
  }

  document.getElementById("container").innerHTML = HTML;
}
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    postArr = data.slice(0, 5);
    renderPosts();
  });

document.getElementById("new-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const title_form = document.getElementById("title").value;
  const body_form = document.getElementById("body").value;
  console.log(title_form, body_form);
  const data = {
    title: title_form,
    body: body_form,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    header: { "Content-Type": "appilication/json" },
  };
  fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  postArr.unshift(data);
  renderPosts();
  document.getElementById("body").value = "";
  document.getElementById("title").value = "";
});

function deleteAnimal(id) {
  console.log(id);

  fetch(`http://localhost:3000/${id}`, {
    method: "delete",
  })
    .then((response) => {
      console.log(response);

      window.location.reload;

      return;
    })
    .catch((err) => {
      throw err;
    });
}

function create() {
  event.preventDefault();

  fetch("http://localhost:3000/", {
    method: "post",
    body: JSON.stringify({
      name: document.getElementById("name").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);

      window.location.replace("/");
    })
    .catch((err) => {
      throw err;
    });
}

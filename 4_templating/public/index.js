function deleteCar(id) {
  fetch(`http://localhost:3000/car/${id}`, {
    method: "delete",
  })
    .then(() => {
      window.location.reload();
    })
    .catch((err) => {
      throw err;
    });
}

function createCar() {
  event.preventDefault();

  fetch("http://localhost:3000/car", {
    method: "post",
    body: JSON.stringify({
      brand: document.getElementById("brand").value,
      model: document.getElementById("model").value,
      year: document.getElementById("year").value,
      power: document.getElementById("power").value,
      price: document.getElementById("price").value,
      door_number: document.getElementById("doorNumber").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      window.location.assign("/");
    })
    .catch((err) => {
      throw err;
    });
}

function updateCar(id) {
  event.preventDefault();

  fetch(`http://localhost:3000/car/${id}`, {
    method: "put",
    body: JSON.stringify({
      brand: document.getElementById("brand").value,
      model: document.getElementById("model").value,
      year: document.getElementById("year").value,
      power: document.getElementById("power").value,
      price: document.getElementById("price").value,
      door_number: document.getElementById("doorNumber").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      window.location.assign(`/car/${id}`);
    })
    .catch((err) => {
      throw err;
    });
}

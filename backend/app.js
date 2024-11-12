const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  items = [
    {
      id: 1,
      name: "Docker",
      img: "https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-5mc7mvtn.png",
    },
    {
      id: 2,
      name: "Nginx",
      img: "https://www.svgrepo.com/show/373924/nginx.svg",
    },
    {
      id: 3,
      name: "GitHub",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
  ];
  res.send(shuffleArray(items));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Генерируем случайный индекс
    [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
  }
  return array;
}

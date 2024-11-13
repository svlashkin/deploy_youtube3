import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // Определение состояния для массива объектов items
  const [items, setItems] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Ошибка:", error.message);
    }
  }

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setItems(json));
  };

  //console.log(fetchData());

  useEffect(() => {
    fetchData();
  }, []);

  const listItems =
    items &&
    items.map((item) => (
      <li key={item.id}>
        <p>
          <b>{item.title}</b>
        </p>
      </li>
    ));

  return <ul>{listItems}</ul>;
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // Определение состояния для массива объектов items
  const [items, setItems] = useState(null);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setItems(json));
  };

  useEffect(() => {
    fetchPosts();
    setInterval(() => {
      fetchPosts();
    }, 2000);
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

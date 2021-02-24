import React from "react";
import Painting from "./components/Painting";
import paintings from "./paintings.json";
// const numbers = [1, 2, 3, 4, 5];
const App = () => {
  return (
    <div>
      <h1>Главный компонент приложения</h1>
      {/* <ul>
        {numbers.map((numbers) => (
          <li>{numbers}</li>
        ))}
      </ul>
      <ul> */}
      <ul>
        {paintings.map((painting) => (
          <li key={paintings.id}>
            <Painting
              url={painting.url}
              title={painting.title}
              price={painting.price}
              // profileUrl={painting.author.url}
              // tag={painting.author.tag}
              quantity={painting.quantity}
            />
          </li>
        ))}
      </ul>
      {/* <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        // profileUrl={paintings[0].author.url}
        // tag={paintings[0].author.tag}
        quantity={paintings[0].quantity}
      /> */}
    </div>
  );
};
export default App;

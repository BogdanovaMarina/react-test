import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const link = React.createElement("a", { href: "reactjs.org" }, "Ссылка");
// console.log(link);
// ReactDOM.render(link, document.getElementById("root"));

// const jsxLink = <a href="reactjs.org">Ссылочка</a>;
// ReactDOM.render(jsxLink, document.getElementById("root"));

//сделаем карточку из этого обьекта
// const painting = {
//   id: "id-1",
//   url:
//     "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/",
//   },
//   quantity: 10,
// };

//создаем разметку
// const templete = (
//   <div>
//     {/* <img
//       src="https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg"
//       alt="Feathers. Art abstract"
//       width="380"
//     />
//     <h2>Feathers. Art abstract</h2>
//     <p>Цена: 500 кредитов</p>
//     <button type="button">Добавить в корзину</button> */}
//     {/* аналог внизу*/}
//     {/* <img src={painting.url} alt={painting.title} width={380} />
//     <h2>{painting.title}</h2>
//     <p>
//       Автор: <a href={painting.author.url}>{painting.author.tag}</a>
//     </p>
//     <p>Цена: {painting.price} кредитов</p>
//     <button type="button">Добавить в корзину</button> */}
//   </div>
// );
// ReactDOM.render(templete, document.getElementById("root"));
//Дети img,h2,p,button
//console.log(templete);

//Пример с часами
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// Рендер компонента
// function Welcome(props) {
//   return <h1>Привет, {props.name}</h1>;
// }

// const element = <Welcome name="Алиса" />;
// ReactDOM.render(element, document.getElementById("root"));

// Давайте разберём, что именно здесь происходит:
// Мы передаём React - элемент < Welcome name = "Алиса" /> в ReactDOM.render().
// React вызывает наш компонент Welcome с пропсами { name: 'Алиса' }.
// Наш компонент Welcome возвращает элемент < h1 > Привет, Алиса</ > в качестве результата.
// React DOM делает минимальные изменения в DOM, чтобы получилось < h1 > Привет, Алиса</ >.

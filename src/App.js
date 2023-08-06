import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: "Nike Blazer Mid Suede Men's Sneakers",
    price: 120,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Nike Air Max 270 Men's Sneakers",
    price: 115,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Nike Blazer Mid Suede Men's Sneakers",
    price: 89,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Puma X Aka Boku Future Rider sneakers",
    price: 95,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

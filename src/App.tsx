import "./App.css";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New york", "San Francisco", "Paris", "Tokyo", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="danger" onClick={() => console.log("Clicked")}>
        Click Here
      </Button>
    </div>
  );
}

export default App;

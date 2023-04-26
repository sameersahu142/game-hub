import { useState } from "react";

interface listGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: listGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items found!</p>}
        {items.map((item, i) => (
          <li
            key={i}
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(i);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

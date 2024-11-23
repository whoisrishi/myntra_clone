import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummery from "../components/BagSummery";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const itemsAll = useSelector((state) => state.items);

  const cartItems = itemsAll.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {cartItems.map((item) => (
            <BagItem item={item} />
          ))}
        </div>

        <BagSummery />
      </div>
    </main>
  );
};
export default Bag;

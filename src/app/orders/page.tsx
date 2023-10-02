import { Product, colums } from "../components/products/columns";
import ProductTable from "../components/products/productTable";

async function getData(): Promise<Product[]> {
  return new Array(50).fill(null).map(() => ({
    id: 1,
    image: "/assets/logo.png",
    name: "Iphone 12 pro max 6 gb ram 128 gb rom",
    price: "1200",
    availability: "In Stock",
    sell: (Math.random() * 100).toFixed(2),
    earning: 12000,
  }));
}

const Orders = async () => {
  const data = await getData();
  return (
    <div>
      Order list
      <ProductTable data={data} columns={colums} />
    </div>
  );
};

export default Orders;

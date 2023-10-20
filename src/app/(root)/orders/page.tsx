import { Product, colums } from "@/app/components/products/columns";
import ProductTable from "@/app/components/products/productTable";
import { Button } from "@/components/ui/button";

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
    <main className="w-full p-2">
      <div className="flex items-center justify-between">
        <h1 className="py-2 text-2xl">Order Items</h1>
        <Button>Add +</Button>
      </div>

      <ProductTable data={data} columns={colums} itemNumber={10} />
    </main>
  );
};

export default Orders;

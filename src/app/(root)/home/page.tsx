import StatsCard from "@/app/components/StatsCard";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BiPackage } from "@react-icons/all-files/bi/BiPackage";
import { BsPeople } from "@react-icons/all-files/bs/BsPeople";
import { LuWallet } from "react-icons/lu";
import { TableData } from "@/app/components/TableData";
import { Product, colums } from "@/app/components/products/columns";
import Navbar from "@/app/components/Navbar";
import LineChart from "@/app/components/LineChart";
import { ComboBox } from "@/app/components/ComboBox";
import { Button } from "@/components/ui/button";
import ProductTable from "@/app/components/products/productTable";

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

const HomePage = async () => {
  const data = await getData();
  return (
    <main className=" w-full bg-secondary">
      <Navbar />

      <section className=" grid grid-cols-2 justify-center gap-4 p-4 ">
        <div className="bg-card p-4">
          <LineChart />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatsCard
            title="Sales Today"
            earning={12000}
            isProfit={true}
            earningPercentage={8}
            isCurrency={true}
            icon={<BsFillBasket2Fill className="icon" />}
          />
          <StatsCard
            title="Total Earning"
            earning={12000}
            isProfit={true}
            earningPercentage={8}
            isCurrency={true}
            icon={<LuWallet className="icon " />}
          />
          <StatsCard
            title="Total Orders"
            earning={120}
            isProfit={true}
            earningPercentage={8}
            isCurrency={false}
            icon={<BiPackage className="icon" />}
          />
          <StatsCard
            title="Visitors Today"
            earning={12000}
            isProfit={true}
            earningPercentage={8}
            isCurrency={false}
            icon={<BsPeople className="icon text-orange-400" />}
          />
        </div>
      </section>

      {/* Products section */}

      <section className=" space-y-4 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Product</h2>

          <div className="space-x-4">
            <ComboBox />

            <Button className="bg-background text-primary transition-all ease-in-out hover:bg-slate-950 hover:bg-opacity-80">
              + Add Product
            </Button>
          </div>
        </div>

        {/* <TableData /> */}
        <ProductTable data={data} columns={colums} />
      </section>
    </main>
  );
};

export default HomePage;

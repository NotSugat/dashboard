import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BiPackage } from "@react-icons/all-files/bi/BiPackage";
import { BsPeople } from "@react-icons/all-files/bs/BsPeople";
import { LuWallet } from "react-icons/lu";
import LineChart from "../components/LineChart";
import { ComboBox } from "../components/ComboBox";
import { Button } from "@/components/ui/button";
import DataTable from "../components/DataTable";
import { TableData } from "../components/TableData";

const HomePage = () => {
  return (
    <main className="h-[100dvh] w-full bg-secondary">
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

        <TableData />
      </section>
    </main>
  );
};

export default HomePage;

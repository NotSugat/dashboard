import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import { BsFillBasket2Fill } from "react-icons/bs";
import { GrCurrency } from "@react-icons/all-files/gr/GrCurrency";
import { BiPackage } from "@react-icons/all-files/bi/BiPackage";
import { BsPeople } from "@react-icons/all-files/bs/BsPeople";
import { GiMoneyStack } from "react-icons/gi";
import { LuWallet } from "react-icons/lu";
import LineChart from "../components/LineChart";

const HomePage = () => {
  return (
    <main className="h-[100dvh] w-full bg-secondary">
      <Navbar />

      <section className="mx-auto my-2 grid grid-cols-2 justify-center gap-4 bg-red-500 ">
        <div className="bg-card p-4">
          <LineChart />
        </div>
        <div className="grid w-[calc(2*var(--card-width)_+_0.5rem)] grid-cols-2 gap-2">
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
    </main>
  );
};

export default HomePage;

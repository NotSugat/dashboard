const StatsCard = ({
  title,
  earning,
  isProfit,
  earningPercentage,
  isCurrency,
  icon,
}: {
  title: string;
  earning: number;
  isProfit: boolean;
  earningPercentage: number;
  isCurrency: boolean;
  icon: any;
}) => {
  return (
    <div className=" rounded-sm bg-card p-6">
      <div className="flex  justify-between">
        <p className="text-md font-medium">{title}</p>
        {icon}
      </div>
      <p className="my-6 text-xl font-medium">
        {isCurrency && "Rs"} {earning}
      </p>

      <div className="flex items-center justify-center gap-2 text-sm">
        <p className={`${isProfit ? "text-green-500" : "text-red-500"}`}>
          {isProfit ? "+" : "-"}
          {earningPercentage}%
        </p>
        <p>More earning than usual</p>
      </div>
    </div>
  );
};

export default StatsCard;

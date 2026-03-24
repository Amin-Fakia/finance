import { ArrowUp, ArrowUpRight, Wallet } from "lucide-react";
import { formatCurrency } from "../utils/util";
interface SavingRateCardProps {
    percentage: number;
}

const SavingRateCard = ({
  percentage,
}: SavingRateCardProps) => {
  return (
    <div className=" overflow-hidden rounded-xl border border-zinc-800/60 bg-card/60 p-6 ">
      <div className="flex relative flex-col gap-2">
        <h2 className="text-xs font-medium uppercase tracking-wider text-text-secondary">
          Saving Rate
        </h2>
        {/* percentage progress bar */}
        <span className="text-3xl font-bold">{percentage.toFixed(1)}%</span>
        <div className="border rounded-full border-zinc-800 ">
            <div className="w-full bg-zinc-800/20  rounded-full h-4 overflow-hidden">
          <div
            className="bg-avocado-500  h-4 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
       
        </div>
        

      </div>

    </div>
  );
};

export default SavingRateCard;

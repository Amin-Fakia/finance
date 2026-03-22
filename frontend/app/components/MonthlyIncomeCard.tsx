import { ArrowUp, ArrowUpRight, Wallet } from 'lucide-react';
import { formatCurrency } from '../utils/util';
interface MonthlyIncomeCardProps {
    balance: number;
    change: number; // percentage change
    currency?: string;
    locale?: string;
}

const MonthlyIncomeCard = ({ balance, change, currency = 'USD', locale = 'en-US' }: MonthlyIncomeCardProps) => {
    return (
        <div className=" overflow-hidden rounded-xl border border-zinc-800/60 bg-card/50  p-6 ">
            <div className="flex relative flex-col gap-2">
                <h2 className="text-xs font-medium uppercase tracking-wider text-text-secondary">Monthly Income</h2>
                <p className="text-3xl font-semibold tracking-tight text-text-primary">{formatCurrency(balance, locale, currency)}</p>
                <div className="flex items-center gap-1 pt-1 text-success">
                    <ArrowUpRight className="h-4 w-4 " />
                    <span className="text-sm font-medium ">{change.toFixed(2)}%</span>
                    <span className="text-xs mt-0.5">vs last month</span>
                </div>
                    <div 
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${change >= 0 ? 'bg-success/15' : 'bg-error/15'} absolute top-0 right-0`}>
                {change >= 0 ? (
                    <ArrowUp className="h-6 w-6 text-success" />
                ) : (
                    <ArrowUp className="h-6 w-6 text-error rotate-180" />
                )}
            </div>
            </div>
           
        </div>
    )
}

export default MonthlyIncomeCard
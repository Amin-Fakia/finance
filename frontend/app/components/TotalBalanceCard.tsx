
import { ArrowUpRight, Wallet } from 'lucide-react';

import NumberFlow from '@number-flow/react';
interface TotalBalanceCardProps {
    balance: number;
    change: number; // percentage change
    currency?: string;
    locale?: string;
}


const TotalBalanceCard = ({ balance, change, currency = 'USD', locale = 'en-US' }: TotalBalanceCardProps) => {
    return (
        <div className="relative overflow-hidden rounded-xl border border-zinc-800/60 bg-card/60 p-6 transition-all duration-300 hover:border-avocado-500/40">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-avocado-500/10 blur-2xl" />
            
            <div className="relative flex items-center justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xs font-medium uppercase tracking-wider text-text-secondary">Total Balance</h2>
                    <p className="text-3xl font-semibold  text-text-primary"><NumberFlow value={balance} format={{
                        style: "currency",
                        "currency": currency,
                        trailingZeroDisplay: "stripIfInteger"
                    }} /></p>
                    <div className="flex items-center gap-1 pt-1 text-success">
                        <ArrowUpRight className="h-4 w-4 " />
                        <span className="text-sm font-medium ">{change.toFixed(2)}%</span>
                        <span className="text-xs  mt-0.5">this month</span>
                    </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-avocado-500/15 ring-1 ring-avocado-500/20 absolute top-0 right-0">
                    <Wallet className="h-6 w-6 text-avocado-400" />
                </div>
            </div>
        </div>
    )
}

export default TotalBalanceCard
export interface Tickers {
	id: number;
	symbol: string;
	name: string;
	nameid: string;
	rank: number;
	price_usd: string;
	percent_change_24h: string;
	percent_change_1h: string;
	percent_change_7d: string;
	price_btc: string;
	market_cap_usd: string;
	volume24: number;
	volume24a: number;
	csupply: string;
	tsupply: string;
	msupply: string;
}

export interface TickersResult {
	data: Tickers[];
	info: {
		coins_num: number;
		time: number;
	};
}

export interface PropsListItem {
	item: Tickers;
	index: number;
}
export interface Props {
	tickers: Tickers[];
	isLoading: boolean;
	nextPage: () => void;
}

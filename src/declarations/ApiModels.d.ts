interface User {
    token: string;
};

interface Payments {
    data: [
        {
            Total: {
                total: string,
                current_balance: string,
                shipping: string,
                withdrawals: string,
                mkt_delivery_service: string,
                anticipations: string,
                comissions: string,
                refundeds: string,
            },
        }
    ],
};

interface Channels {
    balances_total: number,
    balances_marketplaces: {
        [key: string]: {
            mkp_total: string;
            mkp_name: string;
        },
    },
};

interface Transferences {
    transfer_total: string;
    [key: string]: {
        transfer_amount: string;
        transfer_date: string;
    },
};
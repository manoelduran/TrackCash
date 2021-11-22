interface User {
    data: [
        {
            Total: {
                total: string,
                current_balance: string,
                bank_statement: string,
                shipping: string,
                shipping_received: string,
                mkt_delivery_service: string,
                shipping_total: string,
                withdrawals: string,
                withdrawals_total: string,
                automatic_transfers: string,
                anticipations: string,
                cost_anticipations: string,
                total_anticipations: string,
                comissions: string,
                disputes: string,
                refundeds: string,
                comissions_refundeds: string,
                refundeds_comissions: string,
                income_tax: string,
                court_lawsuits: string,
                others: string,
                cost_withdrawals: string,
                others_total: string,
                cashback: string,
                promotions_shipping: string,
                rebate: string,
                promotions_total: string,
                filter_order: null,
                filter_status: null,
                filter_channel: null
            },
            List: []
        }
    ],
    links: {
        first: string,
        last: string,
        prev: null,
        next: string,
    },
    meta: {
        current_page: number,
        from: number,
        last_page: number,
        path: string,
        per_page: number,
        to: number,
        total: number,
    }
}

interface Channels{
    balances_total: number,
    balances_marketplaces: [
        { 
            marketplace: {
                mkp_total: number,
                mkp_name: string,
            }
        }
    ]
}
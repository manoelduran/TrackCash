import axios from 'axios';
const client = axios.create({
    baseURL: 'https://sistema.trackcash.com.br/'
});

export async function login(username: string, password: string): Promise<User | null> {
    const data = `${username}:${password}`;
    const token = new Buffer(data).toString("base64");
    const result = await client.get(`/api/payments`, {
        headers: {
            token,
        }
    });
    if (result.data.response?.includes("Inválido")) {
        return null;
    }
    return { token };
};

export async function getPayments(token: string, date_start: string | null , date_end: string | null ): Promise<Payments | null> {
    const result = await client.get(`/api/payments`, {
        headers: {
            token,
        },
        params: {
            date_start,
            date_end,
        }
    });
    if (!result.data) {
        return null;
    }
    return result.data;
};

export async function getMarketTotalizers(token: string, date_start: string | null , date_end: string | null ): Promise<Channels | null> {
    const result = await client.get(`/api/auth/payments/mkptotalizers`, {
        headers: {
            token,
        },
        params: {
            id_store: 2,
            date_start,
            date_end,
        }
    });
    if (!result.data) {
        return null;
    }
    return result.data;
};

export async function getTransferences(token: string, channel: string | null, date_start: string | null , date_end: string | null ): Promise<Transferences | null> {
    const result = await client.get(`/api/auth/payments/mkptotalizers`, {
        headers: {
            token,
        },
        params: {
            id_store: 2,
            date_start,
            date_end,
            modal: true,
            channel,
        }
    });
    if (!result.data) {
        return null;
    };
    return result.data;
};


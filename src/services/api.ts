import axios from 'axios';
const client = axios.create({
    baseURL: 'https://sistema.trackcash.com.br/'
});

export async function login(username: string, password: string): Promise<User> {
    const data = `${username}:${password}`;
    
    const result = await client.get(`/api/payments`, {
        headers: {
            token: new Buffer(data).toString("base64"),
        }
    });

    return result.data;
  }

  export async function getMarketTotalizers(username: string, password: string): Promise<Channels>{
    const data = `${username}:${password}`;

    const result = await client.get(`/api/auth/payments/mkptotalizers`, {
        headers: {
            token: new Buffer(data).toString("base64"),
        },
        params: {
            id_store: 2,
            date_start: "dd-mm-YYYY",
            date_end: "dd-mm-YYYY",
        }
    });
    console.log(result);
    return result.data;
  }


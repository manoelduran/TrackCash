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
    console.log(result.data)
    return result.data
  }

  // return !(result.data.response && result.data.response.contains("Inválido")); //
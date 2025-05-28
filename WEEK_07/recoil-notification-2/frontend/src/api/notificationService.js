import axios from 'axios'

const BASE_URL = `http://localhost:8080`

export const fetchNotificaton = async () => {
    const {data} = await axios.get(`${BASE_URL}/notification`)
    return data;
}
import axios from 'axios';

export function newPromo(data) {
    return axios.post(`http://apidev.plating.co.kr/promo/v3/promo`,data), {
        
    }
}
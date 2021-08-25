import axios from 'axios';
import { get } from 'idb-keyval';

const apiUrl = 'https://api.lemonsqueezy.com';

export default {
    get(route, data = {}) {
        return this.request('get', route, data);
    },
    post(route, data = {}) {
        return this.request('post', route, data);
    },
    put(route, data = {}) {
        return this.request('put', route, data);
    },
    patch(route, data = {}) {
        return this.request('patch', route, data);
    },
    delete(route, data = {}) {
        return this.request('delete', route, data);
    },
    request(method, route, data = {}) {
        return get('user.token').then(apiToken => {
            return axios({
                method: method,
                url: `${apiUrl}/${route}`,
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${apiToken}`,
                },
                params: method === 'get' ? data : {},
                data: method !== 'get' ? data : {},
            });
        });
    }
}

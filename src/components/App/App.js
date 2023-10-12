import { API_URL, URL_COMICS } from '../../constans/api.js';
import { getDataApi } from '../../utils/getDataApi.js';

import './App.css';

class App {

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);
        console.log(data);
    }
}

export default new App();
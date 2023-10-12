import { API_URL, IMG_STANDART_XLARGE, URL_COMICS } from '../../constans/api.js';
import { getDataApi } from '../../utils/getDataApi.js';
import { ROOT_INDEX } from '../../constans/root.js';
import './Comics.css';

class Comics {

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { extension, path } }) => {
            const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
            htmlContent += `
            <li>
                <span>${title}</span>
                <img src="${imgSrc}" />
            </li>
            `
        })

        const htmlWrapper = `
            <ul>
                ${htmlContent}
            </ul>
        `

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Comics();
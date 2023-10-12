import { API_URL, IMG_STANDART_XLARGE, URL_COMICS, IMG_NOT_AVALILABLE } from '../../constans/api.js';
import { getDataApi } from '../../utils/getDataApi.js';
import { ROOT_INDEX } from '../../constans/root.js';
import './Comics.css';

class Comics {

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { extension, path } }) => {

            if (path.lastIndexOf(IMG_NOT_AVALILABLE) === -1) {
                const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
                htmlContent += `
            <li class="comics__item">
                <span class="comics__name">${title}</span>
                <img class="comics__img" src="${imgSrc}" />
            </li>
            `
            }
        })

        const htmlWrapper = `
            <ul class="comics__container">
                ${htmlContent}
            </ul>
        `

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Comics();
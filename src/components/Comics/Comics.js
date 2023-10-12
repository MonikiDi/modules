import { API_URL, IMG_STANDART_XLARGE, URL_COMICS, IMG_NOT_AVALILABLE, URL_CHARACTERS } from '../../constans/api.js';
import { getDataApi } from '../../utils/getDataApi.js';
import { ROOT_INDEX } from '../../constans/root.js';
import styles from './Comics.css';


class Comics {

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);
        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { extension, path } }) => {
            if (path.lastIndexOf(IMG_NOT_AVALILABLE) === -1) {
                const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
                const url = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;

                htmlContent += `
                    <li class="comics__item ${styles.comics__item}" data-uri="${url}">
                        <span class="${styles.comics__name}">${title}</span>
                        <img class="img_contain ${styles.comics__img}" src="${imgSrc}" />
                    </li>
                    `
            }
        })

        const htmlWrapper = `
            <ul class="${styles.comics__container}">
                ${htmlContent}
            </ul>
        `

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(element => {
            const url = element.getAttribute('data-uri');

            element.addEventListener('click', () => {
                console.log(url);
            })
        })
    }
}

export default new Comics();
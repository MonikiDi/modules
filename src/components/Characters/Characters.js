import { getDataApi } from '../../utils/getDataApi.js';
import { IMG_STANDART_XLARGE } from '../../constans/api';
import { ROOT_MODAL} from '../../constans/root.js';
import imgCloseWhite from './img/close-white.svg';

import styles from './Characters.css';


class Characters {
    renderContent(data) {
        let htmlContent = '';

        data.forEach(({name, thumbnail: {extension, path}}) => {
            const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
            htmlContent += `
                <li class="${styles.characters__item}">
                    <img class="img-cover ${styles.characters__img}" src="${imgSrc}" />
                    <span class="${styles.characters__name}">${name}</span>
                </li>
            `;
        })

        const htmlWrapper = `
        <div  class="${styles.wrapper}">
            <ul class="${styles.characters__container}">
                ${htmlContent}
            </ul>
            <button 
                class="${styles.characters__close}"
                onclick="modal.innerHTML = ''"
                style="background-image: url(${imgCloseWhite})"
                ></button>
        </div>
        `;
        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    renderNotification() {
        console.log('нет')
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);
        data.length ? this.renderContent(data) : this.renderNotification();
    }
}
export default new Characters();
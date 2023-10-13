import { ROOT_MODAL} from '../../constans/root.js';
import styles from './Notification.css';
import imgCloseBlack from './img/close-black.svg';

class Notification {

    render () {
        const htmlWrapper = `
            <div class="${styles.notification__container}">
                <span>Нет контента</span>

                <button 
                class="${styles.notification__close}"
                onclick="modal.innerHTML = ''"
                style="background-image: url(${imgCloseBlack})"
                ></button>
            </div>
        `;
        ROOT_MODAL.innerHTML = htmlWrapper;
    }
}

export default new Notification();
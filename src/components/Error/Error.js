import styles from './Error.css';
import { ROOT_INDEX } from '../../constans/root';

class Error {
    render () {
        const htmlWrapper = `
            <div class="${styles.error__container}">
                <span>
                    <p class="${styles.error__alert}">Произошла ошибка!</p>    
                    <p class="${styles.error__alert}">Попробуйте зайти позже!</p>    
                </span>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Error();

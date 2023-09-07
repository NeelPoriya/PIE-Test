import Link from 'next/link';
import styles from './Card.module.css';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';

export default () => {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <BiPhone />
            </div>
            <div className={styles.right}>
                <h3>Language Translation</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className={styles.buttonContainer}>
                    <Link href="/"><AiOutlineSend/></Link>
                </div>
            </div>
        </div>
    )
}
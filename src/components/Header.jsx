import Image from 'next/image'
import rootStyles from './../app/page.module.css'
import styles from './header.module.css'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'

const Component = () => {
    return (
        <>
            <div className={rootStyles.container}>
                <header className={styles.header}>
                    <Image src="https://www.piemultilingual.com/wp-content/themes/piemultilingual/images/piemulti.svg" alt="Piemultilingual" width="200" height="100" />
                    <div className={styles.rightSection}>
                        <div className={styles.above}>
                            <ul>
                                <Link className={styles.links} href="/">ALL SERVICES</Link>
                                <Link className={styles.links}  href="/">Industries we serve</Link>
                                <Link className={styles.links}  href="/">Languages</Link>
                                <Link className={styles.links}  href="/">About Us</Link>
                                <Link className={styles.links}  href="/">Contact Us</Link>
                            </ul>
                        </div>
                        <div className={styles.below}>
                            <input type="text" className={styles.search} name="search" placeholder='Search...' />
                            <Link className={styles.button} href="/"><AiOutlineSearch size={25} style={{color: 'white'}}></AiOutlineSearch></Link>
                        </div>
                    </div>
                </header>
            </div>
            <div className={styles.bottom}>
                <div className={rootStyles.container}>
                    <ul className={styles.bottomList}>
                        <Link className={styles.bottomLinks} href="/">Foreign Language Support</Link>
                        <Link className={styles.bottomLinks} href="/">Market Research & Analysis</Link>
                        <Link className={styles.bottomLinks} href="/">Transportation Services</Link>
                        <Link className={styles.bottomLinks} href="/">Multilingual Call Center</Link>
                        <Link className={styles.bottomLinks} href="/">Data Entry Services</Link>
                        <Link className={styles.bottomLinks} href="/">Creative Services</Link>
                        <Link className={styles.bottomLinks} href="/">Photo Editing Services</Link>
                        <Link className={styles.bottomLinks} href="/">Virtual Assistant Services</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Component;
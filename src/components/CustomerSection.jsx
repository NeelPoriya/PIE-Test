import Image from 'next/image'
import rootStyles from './../app/page.module.css'
import styles from './CustomerSection.module.css'

export default () => {
    return (
        <div className={rootStyles.container}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h2 className={styles.heroText}>Most Prominant Customer</h2>
                    <p className={styles.bodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eius nihil obcaecati suscipit distinctio iusto velit tempore, rem ratione tempora quae eaque reiciendis eveniet impedit ullam magnam? Eaque, nam recusandae?</p>
                    <p className={styles.bodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eius nihil obcaecati suscipit distinctio iusto velit tempore, rem ratione tempora quae eaque reiciendis eveniet impedit ullam magnam? Eaque, nam recusandae?</p>
                </div>
                <div className={styles.right}>
                    <ul className={styles.logoList}>
                        <li><Image src='https://www.piemultilingual.com/wp-content/themes/piemultilingual/images/gep.png' width="200" height={'32'} /></li>
                        <li><Image src='https://www.piemultilingual.com/wp-content/themes/piemultilingual/images/images.png' width="200" height={'81'} /></li>
                        <li><Image src='https://www.piemultilingual.com/wp-content/themes/piemultilingual/images/logo_social.png' width="200" height={'62'} /></li>
                        
                        <li><Image src='https://www.piemultilingual.com/wp-content/themes/piemultilingual/images/Mettler_Toledo.png' width="200" height={'124'} /></li>
                        <li><Image src='https://www.piemultilingual.com/wp-content/themes/piemultilingual/images/TEOCO_CMYK.jpg' width="135" height={'30'} /></li>
                        <li><Image src='https://www.piemultilingual.com/wp-content/uploads/2020/02/logo3.png' width="153" height={'31'} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
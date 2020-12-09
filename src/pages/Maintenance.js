import React from 'react';
import styles from '../styles/Maintenance.module.scss';

const Home = () => {
    return (
        <div className={styles.MaintenanceWrapper}>
            <div className={styles.MaintenanceBackground}></div>
            <div className={styles.MaintenanceCopyWrap}>
                <h4>
                    Just like our homes, the site is currently <span>under construction</span>.
                </h4>
                <h4>Check back later to see the progress!</h4>
                <h5>- Armfield Builders</h5>
            </div>
        </div>
    )
}

export default Home;
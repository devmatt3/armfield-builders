import React from 'react';
import styles from '../styles/Maintenance.module.scss';

const Home = () => {
    return (
        <div className={styles.MaintenanceWrapper}>
            <div className={styles.MaintenanceCopy}>
                Just like our homes, the site is currently <span>under construction</span>.
            </div>
            <p className={styles.MaintenanceDisclaimer}>Check back later to see the progress!</p>
            <p>-Armfield<span>Builders</span></p>
        </div>
    )
}

export default Home;
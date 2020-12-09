import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import * as actions from '../redux/actions/actions';
import { queryMaintenanceContent } from '../utils/prismicQueries';
import styles from '../styles/Maintenance.module.scss';

const Maintenance = (props) => {
    const [maintenanceDoc, setMaintenanceDoc] = useState(null);

    const { setIsMaintenanceShown } = props;

    useEffect(() => {
        const fetchMaintenanceContent = async () => {
            const queryResponse = await queryMaintenanceContent();
            const maintenanceDocContent = queryResponse.data.maintenance;
            console.log(maintenanceDocContent);
            if (maintenanceDocContent) {
                setMaintenanceDoc(maintenanceDocContent);
            }
        };
        fetchMaintenanceContent();
        setIsMaintenanceShown(true);
    }, [setIsMaintenanceShown]);

    if (maintenanceDoc) {
        return (
            <div className={styles.MaintenanceWrapper}>
                <div className={styles.MaintenanceBackground}></div>
                <div className={styles.MaintenanceCopyWrap}>
                    {RichText.render(maintenanceDoc.maintenance_copy)}
                </div>
            </div>
        );
    }
    return null;
}

const mapDispatchToProps = dispatch => {
    return {
        setIsMaintenanceShown: (isShown) => dispatch(actions.setIsMaintenanceShown(isShown))
    };
};

export default connect(null, mapDispatchToProps)(Maintenance);
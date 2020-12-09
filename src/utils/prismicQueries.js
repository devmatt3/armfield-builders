import gql from 'graphql-tag';
import Cookies from 'js-cookie';
import { client } from './prismicHelpers';

/*
* Query all documents
*/
const queryMaintenanceDoc = gql`
query queryMaintenanceDoc {
    maintenance (uid: "maintenance", lang:"en-us"){
        maintenance_copy
    }
}
`;

export const queryMaintenanceContent = async () => {
    const previewCookie = Cookies.get('io.prismic.preview');

    const queryOptions = {
        query: queryMaintenanceDoc,
    };

    if (previewCookie) {
        queryOptions.context = {
            headers: {
                'Prismic-ref': previewCookie,
            },
        };
    }
    return client.query(queryOptions);
};





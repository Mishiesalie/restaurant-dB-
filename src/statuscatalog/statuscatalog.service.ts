import db from "../drizzle/db";
import { statusCatalogRelationsType, status_catalog_table, statusCatalogselect} from "../drizzle/schema";


//get users from the database
export const statuscatalogService = async (limit?: number): Promise<statusCatalogRelationsType[] | null> => {
    if (limit) {
        return await db.query.status_catalog_table.findMany({
            limit: limit
        });
    }
    return await db.query.status_catalog_table.findMany();
}

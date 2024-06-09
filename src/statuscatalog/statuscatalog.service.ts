import { eq } from "drizzle-orm/expressions";
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

export const getstatusCatelogService = async (id: number): Promise<statusCatalogRelationsType | undefined> => {
    return await db.query.status_catalog_table.findFirst({
        where: eq(status_catalog_table.id, id)
    })
}

export const createstatusCatalogService = async (statusCatalog: statusCatalogRelationsType) => {
    await db.insert(status_catalog_table).values(statusCatalog)
    return "statusCatalog created successfully";
}

export const updatestatusCatalogService = async (id: number, statusCatalog: statusCatalogRelationsType) => {
    await db.update(status_catalog_table).set(statusCatalog).where(eq(status_catalog_table.id, id))
    return "statusCatalog updated successfully";
}

export const deletestatusCatalogService = async (id: number) => {
    await db.delete(status_catalog_table).where(eq(status_catalog_table.id, id))
    return "statusCatalog deleted successfully";
}

import sql from 'mssql';


const dbSettings = {
    user: 'issa',
    password: '1234',
    server: 'localhost',
    database: 'webstore',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }


}
export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
        
    } catch (error) {
        console.error(error)
    }
}

export {sql};

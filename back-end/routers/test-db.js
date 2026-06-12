// test-db.js
const pool = require('./db'); // This imports the pool we configured earlier

async function testConnection() {
    let conn;
    try {
        console.log('🔄 Attempting to connect to MariaDB...');
        
        // 1. Grab a connection from the pool
        conn = await pool.getConnection();
        console.log('Successfully connected to the connection pool!');

        // 2. Run a simple system test query
        const rows = await conn.query('SELECT NOW() AS database_time');
        console.log(' Current Database Time:', rows[0].database_time);

        // 3. Verify our users table structure is readable
        const tableCheck = await conn.query('SHOW TABLES');
        console.log('📊 Available Tables:', tableCheck);

    } catch (err) {
        console.error('Connection Failed! Error details:', err.message);
    } finally {
        // 4. Always close the connection
        if (conn) {
            conn.release();
            console.log(' Connection safely released back to pool.');
        }
        // Force the Node process to exit since the pool keeps it running idling
        process.exit();
    }
}

testConnection();

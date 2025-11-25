const db = require('../models');

async function connetDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database Connected successfully.');
        
        await db.sequelize.sync({ alter: true });
        console.log('Database synchronized.');
    }catch (error) {
        console.error('Database connetion failed', err.message);
        process.exit(1);
    }
}

module.exports = connetDatabase;
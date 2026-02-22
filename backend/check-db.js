import mongoose from 'mongoose';
import dotenv from 'dotenv';
import SiteAsset from './models/SiteAsset.js';

dotenv.config();
const DB_URL = process.env.DB_URL || process.env.DB_URL_LOCAL;

async function check() {
    console.log('Connecting to:', DB_URL);
    await mongoose.connect(DB_URL);
    const assets = await SiteAsset.find();
    console.log('--- SITE ASSETS IN DB ---');
    console.log('Total count:', assets.length);
    assets.forEach(a => {
        console.log(`Key: ${a.key}, Image: ${a.image ? 'YES' : 'NO'}, Label: ${a.label}`);
    });
    console.log('-------------------------');
    process.exit(0);
}

check().catch(err => {
    console.error(err);
    process.exit(1);
});

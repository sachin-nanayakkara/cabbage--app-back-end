import mongoose from 'mongoose';
import { getMongoUrl} from '../config'

export default async function connectDB() : Promise<any> {
    try {
        const mongoURI = getMongoUrl();
        await mongoose.connect(mongoURI.URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            ssl: true,
            sslValidate: true,
        });
        if (process.env.NODE_ENV !== 'test') {
            console.log('Database Connected')
        }
    } catch (err) {
        console.error(err)
    }
}
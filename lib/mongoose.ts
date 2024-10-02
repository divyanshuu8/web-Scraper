import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI) return console.log('DB is not defined');

    if(isConnected) return console.log('=> using existing db');

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;

        console.log('db connected')
    } catch (error){
        console.log(error);
    }
}
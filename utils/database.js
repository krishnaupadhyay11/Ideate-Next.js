import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected){
        console.log('Mongoooooo');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'M_and_Prem',
        })

        isConnected = true;

        console.log('radhakrishnaprabhujaishriseetaram11')
    } catch(error){
        console.log(error)
    }
}    
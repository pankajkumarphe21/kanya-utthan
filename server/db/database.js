import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        const res = await mongoose.connect(process.env.BACKEND_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connection is successful.');
        // return res;
    } catch (error) {
        console.log('Something went wrong', error);
    }
}

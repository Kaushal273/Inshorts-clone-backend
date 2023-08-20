import mongoose from "mongoose";




    const Connection = async () => {

        const URL = `mongodb+srv://kaushalyadav536:kaushalclone@inshorts-clone.zmwcqyy.mongodb.net/?retryWrites=true&w=majority`;

        try{
            await mongoose.connect(URL, { useNewUrlParser: true });
            console.log('Database connected successfully...');
        }catch(error){
            console.log('Error while connecting with the database', error);
        }
    }

    export default Connection;
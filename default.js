import { data } from "./constants/data.js";
import news from "./model/new-schema.js";

const DefaultData = async() => {
    try{
        await news.insertMany(data);
        console.log('Data imported successfully');
    }catch(error){
        console.log('Error', error.message);
    }
}

export default DefaultData;
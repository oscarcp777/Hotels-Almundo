import mongoose, {Schema} from 'mongoose';

const HotelSchema = new Schema({
      name: {type: String, required: true },
    	stars: {type: Number, required: true },
    	price: {type: Number, required: true }
      }
    );

export default mongoose.model('hotel', HotelSchema);

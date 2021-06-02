import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name : {
        type: String,
        require:true
    },
    noHP :{
        type: Number,
        require:true
    },
    alamat: String,
    tglbooking : {
        type: Date,
        default: new Date(),
        
    },
    jamMulai :{
        type: Date,
        require:true,
        unique:true
    },
    jamSelesai :{
        type: Date,
        require:true,
        unique:true  
        
    }

});

const PostMessage = mongoose.model('Booking', postSchema);

export default PostMessage;
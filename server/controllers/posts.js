import PostMessage from '../models/postsMessage.js';


export const getPosts = async (req, res)=>{
    try{
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error){
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    

    const newPost = new PostMessage({
        name:req.body.name,
        noHP:req.body.noHP,
        alamat:req.body.alamat,
        tglsewa:req.body.sewa,
        jamMulai:new Date(req.body.jamMulai),
        jamSelesai:new Date(req.body.jamSelesai)


    });

    try {
        await newPost.save();

        res.status(201).json(newPost);

    }catch (error) {
        res.status(409).json({ message: error.message });
    }


}
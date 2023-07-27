
import React from 'react'
import axios from 'axios';


const upload = async  (file) =>{
    const data = new FormData();
    data.append("file", file)
    data.append("upload_preset", "posts")
    try {
        const res = await axios.post("https://api.cloudinary.com/v1_1/melvinmurichu/image")
        const {url} = res.data
        return url;
     
    } catch (error) {
        console.log(err)
    }

}

export default upload
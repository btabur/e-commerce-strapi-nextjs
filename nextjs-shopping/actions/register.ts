import axios from 'axios';

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/local/register`

const registerUser = async (username:string,email:string,password:any) => {
    try {
         const response = await axios.post(Urls, {
            username,
            email,
            password
         })
         return response.data
    } catch (error) {
        console.log("error",error);
        throw error;
        
    }
}

export default registerUser
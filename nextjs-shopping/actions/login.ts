import axios from 'axios';

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/local`

const loginUser = async (email:string,password:any) => {
    try {
         const response = await axios.post(Urls, {
            identifier:email,
            password
         })
         return response.data
    } catch (error) {
        console.log("error",error);
        throw error;
        
    }
}

export default loginUser
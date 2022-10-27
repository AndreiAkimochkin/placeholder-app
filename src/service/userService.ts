import Api from './Api';

export default{
    async getAllUsers(){
        const response=await Api().get('users');
        return response.data;
    }
}
import Api from './Api';

export default{
    async getAllPosts(){
        const response=await Api().get('posts');
        return response.data;
    },
}
import { useAppDispatch,useAppSelector } from "../../hooks/redux-hooks";
import {ChangeEvent, useEffect, useState} from 'react'
import './Post.css'
import {PostType, UsersType} from "../../models/redux-models";
import {fetchUsers} from "../../store/user-actions";
import {fetchPosts} from "../../store/post-actions";

type FilterType = 'title' | 'author'

const Post=()=>{
    const dispatch=useAppDispatch();
    const allPosts=useAppSelector(state=>state.post.all_posts);
    const allUsers= useAppSelector(state=>state.user.all_users);
    const error = useAppSelector(state => state.post.error);
    const isLoading = useAppSelector(state => state.post.isLoading);



    useEffect(()=> {
           dispatch(fetchPosts())
    },[dispatch])

    useEffect(()=> {
        dispatch(fetchUsers())
    },[dispatch])


      const checkTodo=():boolean=>{
        return allPosts.length != 0;

    }

    let [filterByAuthor, setFilterByAuthor] = useState<null | number>(null)
    let [filterByTitle, setFilterByTitle] = useState<string | null>(null)
    const [filterBy, setFilterBy] = useState<FilterType>('author')

    let filteredPosts = allPosts

    if(filterBy === 'author' && filterByAuthor){
        filteredPosts = allPosts.filter(post=> post.userId === filterByAuthor)
    }else if(filterBy === 'title' && filterByTitle){
        filteredPosts = allPosts.filter(post=> post.title === filterByTitle)
    }

    const chooseHandler= (e:ChangeEvent<HTMLSelectElement>) => {
        setFilterBy(e.target.value as FilterType)
        setFilterByTitle(null)
        setFilterByAuthor(null)
    }

    if (isLoading) return <div className='loading'>Posts are loading...</div>
    if (error) return <div>{error}</div>

    return(
        <>
            <div className='select'>
                {filterBy === 'author' ?  <select
                    value={!filterByAuthor ? '' : filterByAuthor}
                    onChange={(e) => { setFilterByAuthor(+e.target.value)}
                }>
                    <option disabled value="">Show posts from Author</option>
                    {allUsers?.map((option: UsersType) =>
                        <option key={option.name} value={option.id}>
                            {option.name}
                        </option>
                    )}
                </select> :  <select
                    value={!filterByTitle ? '' : filterByTitle}
                    onChange={(e) => { setFilterByTitle(e.target.value)}
                }>
                    <option disabled value="">Show title from Post</option>
                    {allPosts?.map((option: PostType) =>
                        <option key={option.title} value={option.title}>
                            {option.title}
                        </option>
                    )}
                </select>}

                <select value={filterBy}
                        onChange={chooseHandler}>
                    <option disabled value={''}>Show posts by</option>
                    <option value={'title'}>Title</option>
                    <option value={'author'}>Author</option>
                </select>
            </div>
            <div>
                <div>
                        {checkTodo() &&
                            filteredPosts.map((post: PostType)=>(
                                <div  className='item' key={post.id}>
                                    <strong> {post.id} {post.title}</strong>
                                   <p>{allUsers.find(user => user.id === post.userId)?.name}</p>
                                    <p>{post.body}</p>
                                </div>
                            ))
                        }

                </div>
            </div>
        </>

    );
}
export default Post;
import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, edit, setModalEdit}) => {
    if(!posts.length){
        return (
            <div className="PostList"><p>No posts!</p></div>
        )
    }
    return (
        <div className='post__list'>
            {posts.map(post =>
                <PostItem edit={edit} setModalEdit={setModalEdit} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
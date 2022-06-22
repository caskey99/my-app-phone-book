import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    if(!posts.length){
        return (
            <div ><p style={{textAlign: 'center'}}>No posts!</p></div>
        )
    }
    return (
        <div>
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
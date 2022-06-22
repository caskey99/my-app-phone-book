import React from 'react';
import icon from '../assets/img/icon.png'

const PostItem = (props) => {
    // console.log(props);
    return (
        <div>
            <div className="post">
                <div className="post__item">
                    <img src={icon} alt="icon"/>
                    <div className="item__name">{props.post.name}</div>
                    <div><p>{props.post.phone}</p></div>
                    <div>{props.post.address}</div>
                    <div>{props.post.email}</div>
                    <div className="post__btns">
                        <button>Редактировать</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PostItem;
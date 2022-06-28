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
                    <div className="item__phone"><p>{props.post.phone}</p></div>
                    <div className="item__address">{props.post.address}</div>
                    <div className="item__email">{props.post.email}</div>
                    <div className="post__btns">
                        {/*<button onClick={() => props.edit(props.post.id)}>Редактировать</button>*/}
                        <button onClick={() => {props.edit(props.post.id,props.post); props.setModalEdit(true);}}>Редактировать</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PostItem;
import React, {useState} from 'react';
import icon from '../assets/img/icon-user.png';

const PostForm = ({create, newItem}) => {
    const [post, setPost] = useState({name: 'bob', phone: '89111120031', address: 'Spb,the Red Square 23', email:'20041@mail.ru'})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        newItem(newPost)
        setPost({name: '', phone: '', address: '', email:''})
    }

    return (
        <div>
            <form className="form-registration">
                <p>Добавить пользователя</p>
                <div className="form-row">
                    <div className="form-group">
                        <input className="form-control-row" type="image" id="form-image" placeholder="" required="required"
                               // multiple accept="image/jpeg,image/png"
                               src={icon}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control-row" type="text" id="form-name" placeholder="Имя" required="required"
                               value={post.name}
                               onChange={e => setPost({...post, name: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control-row" type="tel" id="form-tel" placeholder="Номер"
                               required="required"
                               value={post.phone}
                               onChange={e => setPost({...post, phone: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control-row" type="text" id="form-address" placeholder="Адрес"
                               required="required"
                               value={post.address}
                               onChange={e => setPost({...post, address: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control-row" type="email" id="form-email" placeholder="Электронная почта"
                               required="required"
                               value={post.email}
                               onChange={e => setPost({...post, email: e.target.value})}
                        />
                    </div>
                </div>
                <div className="form-submit">
                    <button onClick={addNewPost} name="button-send" id="button-send"><p>СОХРАНИТЬ</p></button>
                    <button name="button-again" id="button-again"><p>ОТМЕНА</p></button>
                </div>
            </form>
        </div>
    );
};

export default PostForm;
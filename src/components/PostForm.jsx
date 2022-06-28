import React, {useEffect, useState} from 'react';
import icon from '../assets/img/icon-user.png';

const PostForm = ({create, newItem, setModalForm, modalForm}) => {
    // {name: 'bob', phone: '89111120031', address: 'Spb,the Red Square 23', email:'20041@mail.ru'}
    const [post, setPost] = useState({name: '', phone: '', address: '', email:''})
    const [valid, setValid] = useState(false);
    const [errorName, setErrorName] = useState('Заполните имя!')
    const [errorEmail, setErrorEmail] = useState('')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(errorName || errorEmail){
            setFormValid(false)
            if(!post.name)
                setErrorName("Заполните имя!")
        }
        else{
            setFormValid(true)
        }
    }, [errorEmail, errorName])


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        newItem(newPost)
        setPost({name: '', phone: '', address: '', email:''})
        setFormValid(false)
    }

    const nameHandler = (e) => {
        setPost({...post, name: e.target.value})
        if(e.target.value.length < 3 || e.target.value.length > 26) {
            setErrorName("Некорректное имя!")
            if(!e.target.value) {
                setErrorName("Имя не может быть пустым!");
            }
        }
        else {
            setErrorName("");
        }
    }

    const emailHandler = (e) => {
        setPost({...post, email: e.target.value})
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!re.test(String(e.target.value).toLowerCase())) {
            setErrorEmail("Некорректный email!");
        }
        else{
            setErrorEmail("");
        }
    }

    const blurHandler = (e) => {
        setValid(true)
        // console.log({valid})
    }




    return (
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
                    {(valid && errorName) && <div style={{color: 'red', fontFamily: "Arial", marginBottom: "1%"}}> {errorName}</div>}
                    <input className="form-control-row" type="text" id="form-name" placeholder="Имя" required="required"
                           value={post.name}
                           onBlur={e => blurHandler(e)}
                           onChange={e => nameHandler(e)}
                    />
                </div>
                <div className="form-group">
                    <input className="form-control-row" type="tel" id="form-tel" placeholder="Номер"
                           value={post.phone}
                           onChange={e => setPost({...post, phone: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <input className="form-control-row" type="text" id="form-address" placeholder="Адрес"
                           value={post.address}
                           onChange={e => setPost({...post, address: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    {(valid && errorEmail) && <div style={{color: 'red', fontFamily: "Arial"}}> {errorEmail}</div>}
                    <input className="form-control-row" type="email" id="form-email" placeholder="Электронная почта"
                           value={post.email}
                           onChange={e => emailHandler(e)}
                    />
                </div>
            </div>
            <div className="form-submit">
                <button onClick={addNewPost} disabled={!formValid} type="button" accessKey="enter" name="button-send" id="button-send"><p>СОХРАНИТЬ</p></button>
                <button onClick={() => setModalForm(false)} type="button" name="button-again" id="button-again"><p>ОТМЕНА</p></button>
            </div>
        </form>
    );
};

export default PostForm;
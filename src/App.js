import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css'
import './styles/PostForm.css'
import './styles/Navbar.css'
import './styles/CirculeMenu.css'
import logo from '../src/assets/img/logo.png'
import up from '../src/assets/img/circule/up.png'
import down from '../src/assets/img/circule/down.png'
import left from '../src/assets/img/circule/left.png'
import right from '../src/assets/img/circule/right.png'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostSort from "./components/PostSort";
import postSort from "./components/PostSort";
import PostFilter from "./components/PostFilter";
import Navbar from "./components/Navbar";
import ModalWindow from "./components/modal/ModalWindow";
import {usePosts} from "./components/hooks/usePosts";

import CirculeMenu from "./components/CirculeMenu";




function App() {
    const [posts, setPosts] = useState([
        // {id: 1, name: 'Vike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
        // {id: 2, name: 'Cike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
        // {id: 3, name: 'Eike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
        // {id: 4, name: 'Aike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
        // {id: 5, name: 'Bike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
    ])

    const [items, setItems] = useState(
        [{id: 1, name: 'Vike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 2, name: 'Cike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 3, name: 'Eike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 4, name: 'Aike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 5, name: 'Bike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 6, name: 'Cike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 7, name: 'Eike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 8, name: 'Aike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 9, name: 'Bike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 10, name: 'Cike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 11, name: 'Eike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 12, name: 'Aike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 13, name: 'Bike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 14, name: 'Cike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 15, name: 'Eike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 16, name: 'Aike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
            {id: 17, name: 'Bike', phone: 89111130071, address: 'Spb,the Red Square 23', email:'100@mail.ru'},
        ]
        && JSON.parse(localStorage.getItem('items')) || []
    )
    const [filter, setFilter] = useState({query:''})
    const [modalMenu, setModalMenu] = useState(false);
    const [modalForm, setModalForm] = useState(false);
    const sortedAndSearchedPosts = usePosts(items, "name", filter.query)

    const createPost = (newPost) => {
        setPosts([...items, newPost])
        setModalForm(false)
    }

    const newItem = (newPost) => {
        if (Object.keys(newPost).length === 0 && newPost.constructor === Object)
        {

        }
        setItems(() => [...items, newPost])
    }

    // const [fetching, setFetching] = useState(false)
    // const scrollHandler = (e) => {
    //     if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
    //        setFetching(true)
    //     }
    // }
    // useEffect(() => {
    //     document.addEventListener('scroll', scrollHandler)
    //     return function () {
    //         document.removeEventListener('scroll', scrollHandler)
    //
    //
    //     }
    // }, [])

    useEffect(() => {
        console.log('useEffect' )
        localStorage.setItem('items', JSON.stringify(items))
        // setFetching(false)
    }, [sortedAndSearchedPosts])


  return (
    <div className="App">
        <Navbar filter={filter}
                setFilter={setFilter}
        />
        <button onClick={() => setModalMenu(true)}>
            меню
        </button>
        <button onClick={() => setModalForm(true)}>
            создать
        </button>
        <ModalWindow visible={modalMenu} setVisible={setModalMenu}>
            <CirculeMenu setModal={setModalMenu}/>
        </ModalWindow>
        <ModalWindow visible={modalForm} setVisible={setModalForm}>
            <PostForm create={createPost} newItem={newItem}/>
        </ModalWindow>
        {/*<ModalWindow visible={modal} setVisible={setModal}>*/}
        {/*    */}
        {/*    <PostForm create={createPost} newItem={newItem}/>*/}
        {/*</ModalWindow>*/}
        <PostList posts={sortedAndSearchedPosts}/>
    </div>

  );
}

export default App;

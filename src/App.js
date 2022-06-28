import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css'
import './styles/PostForm.css'
import './styles/Navbar.css'
import './styles/CirculeMenu.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Navbar from "./components/Navbar";
import ModalWindow from "./components/modal/ModalWindow";
import {usePosts} from "./components/hooks/usePosts";
import CirculeMenu from "./components/CirculeMenu";
import EditForm from "./components/EditForm";

function App() {
    const [items, setItems] = useState( JSON.parse(localStorage.getItem('items')) || [])
    const [filter, setFilter] = useState({query:''})
    const [modalMenu, setModalMenu] = useState(false);
    const [modalForm, setModalForm] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [editingPost, setEditingPost] = useState({name: '', phone: '', address: '', email:''});
    const sortedAndSearchedPosts = usePosts(items, "name", filter.query)

    const createPost = (newPost) => {
        setModalForm(false)
        setEditingPost(newPost)
        updateItem(newPost.id)
    }

    const editPost = (id, post) => {
        updateItem(id)
        const newArr = [...items].filter((item) => item.id !== id)
        setItems(newArr)
    }

    const delPost = (id) => {
        const newArr = [...items].filter((item) => item.id !== id)
        setItems(newArr)
    }

    const updateItem = (id) => {
        let found = null
        for (let i = 0; i < sortedAndSearchedPosts.length - 1; i++) {
            if(sortedAndSearchedPosts[i].id === id)
                found = sortedAndSearchedPosts[i]
        }
        if(found !== null) {
            setEditingPost(found)
        }
    }

    const newItem = (newPost) => {
        setItems(() => [...items, newPost])
    }

    useEffect(() => {
        console.log('useEffect' )
        localStorage.setItem('items', JSON.stringify(items))
    }, [sortedAndSearchedPosts])

  return (
    <div className="App">
        <Navbar filter={filter}
                setFilter={setFilter}
                setModalMenu={setModalMenu}
        />
        <ModalWindow visible={modalMenu} setVisible={setModalMenu}>
            <CirculeMenu setModalForm={setModalForm} setModalMenu={setModalMenu}/>
        </ModalWindow>
        <ModalWindow visible={modalForm} setVisible={setModalForm}>
            <PostForm create={createPost} newItem={newItem} modalForm={modalForm} setModalForm={setModalForm}/>
        </ModalWindow>
        <ModalWindow visible={modalEdit} setVisible={setModalEdit}>
            <EditForm setModalEdit={setModalEdit} modalEdit={modalEdit} delPost={delPost} editingPost={editingPost} edit={editPost} newItem={newItem}/>
        </ModalWindow>
        <PostList posts={sortedAndSearchedPosts} edit={editPost} setModalEdit={setModalEdit}/>
    </div>
  );
}

export default App;

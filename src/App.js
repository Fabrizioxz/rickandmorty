import { useState } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';


function App () {
  const [characters,setCharacters] = useState([])

  function onSearch(id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id)
          if(exist){
            alert('ese personaje ya existe')
          }else{
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
            window.alert('No hay personajes con ese ID');
        }
      });
  }
  function onClose(id){
    setCharacters((data)=>{ //data es igual a characters ->[1,2,4] ejm.
      return data.filter((e)=> e.id !== id) // id 2 [1,4]
    })
  }
  return (
    <div className={styles.App}>
      <div className={styles.container} style={{ padding: '25px' }}>
        <div>
          <NavBar onSearch={onSearch} />
        </div>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Cards characters={characters} onClose ={onClose} />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/detail/:detailId' element={<Detail/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

import styles from './SearchBar.module.css';
import {useState } from 'react';

export default function SearchBar(props) {
    const [character,setCharacter] = useState("");
    function handleInputChange(event){
        setCharacter(event.target.value)
    }
    return (
        <div className={styles.search}>
            <input type='text' name='search' placeholder='Escriba el id de un personaje' 
            onChange={(e)=>handleInputChange(e)} value = {character}/>
            <button onClick={()=>props.onSearch(character)}>Agregar</button>
        </div>
    );
}
import React,{useState, useEffect} from 'react'
import styles from './Detail.module.css'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Detail() {
  const {detailId} = useParams();
  const [character, setCharacter] = useState({})
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert('No hay personajes con ese ID');
          }
      })
      .catch((err) => {
          window.alert('No hay personajes con ese ID');
      });
    return setCharacter({});
  }, [detailId]);
  return (
    <div className={styles.detail}>
      <div className={styles.txt}>
      <Link to="/home">
            <button>back to Home</button>
      </Link>
        <h1>{character.name}</h1>
        <h3>{character.status}</h3>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin?.name}</p>
      </div>
      <img className={styles.imgD} src={character.image} alt={character.name}/>
      
    </div>
  )
}

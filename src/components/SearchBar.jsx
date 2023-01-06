import styles from './SearchBar.module.css';

export default function SearchBar(props) {
    return (
        <div>
            <input type='search' />
            <button onClick={()=>props.onSearch("not found ID")}>Agregar</button>
        </div>
    );
}
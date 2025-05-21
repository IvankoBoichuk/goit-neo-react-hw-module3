import styles from "./SearchBox.module.css"

const SearchBox = ({ handlerFilter }) => {
    return <div className={styles.searchBox}>
        <label htmlFor="search">Find contacts by name</label>
        <input id="search" type="search" onChange={handlerFilter} />
    </div>
}

export default SearchBox;
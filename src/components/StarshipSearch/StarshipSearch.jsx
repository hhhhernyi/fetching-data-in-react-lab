import { useState } from "react";

export default function StarshipSearch(props) {
    const [searchName, setSearchName] = useState('')
    const [searchClass, setSearchClass] = useState('')
    const [searchModel, setSearchModel] = useState('')
    const [searchManufacturer, setSearchManufacturer] = useState('')
    

    function handleSubmit (event) {
        event.preventDefault();
        setSearchName('')
        setSearchClass('')
        setSearchModel('')
        setSearchManufacturer('')
        
    }
    function handleSearchByName(event) {
        props.searchByName(event.target.value);
    }
    function handleSearchByClass(event) {
        props.searchByClass(event.target.value);

    }
    function handleSearchByModel(event) {
        props.searchByModel(event.target.value);

    }
    function handleSearchByManufacturer(event) {
        props.searchByManufacturer(event.target.value);

    }
    function handleChangeName (event) {
        setSearchName(event.target.value )
    }
    function handleChangeClass (event) {
        setSearchClass(event.target.value )
    }
    function handleChangeModel (event) {
        setSearchModel(event.target.value )
    }
    function handleChangeManufacturer (event) {
        setSearchManufacturer(event.target.value )
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Search by Name: 
                <input type='text' name='search'onChange={handleChangeName} value={searchName}></input>
                <button onClick={handleSearchByName} value={searchName}>Search</button>
            </label>            
        </form>
        <form onSubmit={handleSubmit}>
            <label>
                Search by Class: 
                <input type='text' name='search'onChange={handleChangeClass} value={searchClass}></input>
                <button onClick={handleSearchByClass} value={searchClass}>Search</button>
            </label>            
        </form>
        <form onSubmit={handleSubmit}>
            <label>
                Search by Model: 
                <input type='text' name='search'onChange={handleChangeModel} value={searchModel}></input>
                <button onClick={handleSearchByModel} value={searchModel}>Search</button>
            </label>            
        </form>
        <form onSubmit={handleSubmit}>
            <label>
                Search by Manufacturer: 
                <input type='text' name='search'onChange={handleChangeManufacturer} value={searchManufacturer}></input>
                <button onClick={handleSearchByManufacturer} value={searchManufacturer}>Search</button>
            </label>            
        </form>
            
        </>
    )
}
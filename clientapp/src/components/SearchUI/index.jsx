import React from 'react'

function SearchUI(props) {
    const {
        searchData,
        handleSearch,
        handleChange
    } = props

    const {
        Least,
        AtMost
    } = searchData
    return (
        <form onSubmit={handleSearch} >
            <input
                className="search-item-input"
                type="number"
                name="Least"
                value={Least || ''}
                onChange={handleChange("Least")}
                placeholder="min num games"
            />
            <input
                className="search-item-input"
                type="number"
                name="AtMost"
                value={AtMost || ''}
                onChange={handleChange("AtMost")}
                placeholder="max num games"
            />
            <div className="search-item-btn">
                <button type='submit'>Search</button>
            </div>
        </form>
    )
}

export default SearchUI
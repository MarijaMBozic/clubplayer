import React, { useState } from 'react'
import GetBySearch from './../../api/getBySearch'
//import Players from './../../page/Players'
import SearchUI from './../../components/SearchUI'
import './index.scss'


function Search() {
    const [searchData, setSearchData] = useState('')
    const [searchedPlayers, setSearchedPlayers] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    const handleChange = (fieldname) => (e) => {
        setSearchData({
            ...searchData,
            [fieldname]: e.target.value
        })
    };

    const handleSearch = (e) => {
        e.preventDefault();
        GetBySearch(searchData).then(res => {
            setSearchedPlayers(
                res.data
            )
        })
        setIsClicked(true)
    }
    console.log(searchedPlayers)
    console.log(isClicked)


    return (
        <div className="search-item">
            <SearchUI
                searchData={searchData}
                handleSearch={handleSearch}
                handleChange={handleChange}
            />
            <div>
                {/*
                    isClicked ? <Players
                        searchedPlayers={searchedPlayers} /> : ''*/
                }
            </div>
        </div>
    )
}

export default Search
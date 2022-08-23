import React, { useState, useEffect, useRef } from 'react'
import search from '../../assets/search.svg'
import { useDispatch } from 'react-redux'
import { getSearchText } from '../../store/search/searchActionCrators'

const Search = () => {

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    const onChangeHnadler = (event) => {
        setSearch(event.target.value)
        // console.log(event.target.value)
    }

    // const searchVal = useRef()



    useEffect(() => {

        const setTimeSearch = setTimeout(() => {
            dispatch(getSearchText(search))
        }, 500);

        return () => {
            clearTimeout(setTimeSearch)
        }


    }, [search])

    return (
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                onChange={onChangeHnadler}
                value={search}
                // ref={searchVal}
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
            />
            <img
                className="inline h-6 cursor-pointer"
                src={search}
                alt="Search"
            />
        </div>

    )
}

export default Search
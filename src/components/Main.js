import React, { Fragment, useEffect } from 'react'
import Header from './Header/Header'
import Search from './Search/Search'
import BlogList from './Blog/BlogList'
import Footer from './Footer/Footer'
import { useDispatch } from 'react-redux'
import { fetchPost } from '../store/blog/blogActionCreator'

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPost())
    }, [])



    return (
        <Fragment>
            <Header />
            <Search />
            <BlogList />
            <Footer />

        </Fragment>
    )
}

export default Main
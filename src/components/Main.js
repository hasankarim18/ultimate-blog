import React, { Fragment, useEffect } from 'react'
import Header from './Header/Header'
import Search from './Search/Search'
import BlogList from './Blog/BlogList'
import Footer from './Footer/Footer'
import { useDispatch } from 'react-redux'
import { fetchPost } from '../store/blog/blogActionCreator'
import PostDetailRouter from './Blog/PostDetailRouter'
import { Routes, Route } from 'react-router-dom'

const AllPostsPage = () => {

    return (
        <Fragment>
            <Search />
            <BlogList />
        </Fragment>
    )
}


const SinglePostPage = () => {
    return (
        <Fragment>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ padding: "30px" }}>
                    <PostDetailRouter />
                </div>
            </div>
        </Fragment>
    )
}

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPost())
    }, [])



    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path='/' element={<AllPostsPage />} />
                <Route path="/post/:postId" element={<SinglePostPage />} />
            </Routes>
            <Footer />
            {/* <Header />
            <Search />
            <BlogList />
            <Footer /> */}

        </Fragment>
    )
}

export default Main
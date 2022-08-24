import React, { useEffect } from 'react'
import Blog from './Blog'
import BlogHeader from './BlogHeader'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../Loading/Loading'
import { fetchUser } from '../../store/user/userActionCreateors'
import { backToOriginalPosts } from '../../store/search/searchActionCrators'



const BlogList = () => {

    const blogPosts = useSelector(state => state.blog.blogPosts)
    const postLoading = useSelector(state => state.blog.postLoading)
    const postLoadFailed = useSelector(state => state.blog.postLoadFailed)
    const searchText = useSelector(state => state.search.searchText)
    const filterByUserId = useSelector(state => state.search.filterByUserId)
    const filterByCategory = useSelector(state => state.search.filterByCategory)

    const dispatch = useDispatch()
    const userList = useSelector(state => state.user.userList)



    let showBlog = []

    if (blogPosts.length > 0) {
        showBlog = blogPosts
    }

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    const allPost = (posts) => {
        dispatch(backToOriginalPosts())
    }

    function searchTextFilter(post) {
        if (this.trim().length === 0) {
            return true
        } else {
            return post.title.trim().toLowerCase().includes(this.trim().toLowerCase())
        }
    }

    function userIdFilter(post) {
        if (this === null) {
            return true
        } else {
            return post.userId === this
        }
    }

    let postNumber = showBlog.filter(searchTextFilter, searchText).filter(userIdFilter, filterByUserId)



    return (
        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >

            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <BlogHeader />

                {
                    filterByUserId || filterByCategory !== 'ALL' &&
                    <h1
                        onClick={allPost}
                        className="underline cursor-pointer" >
                        Back to all posts
                    </h1>
                }
                <div className="text-right">
                    Total Posts:  {postNumber.length}
                </div>

                <div>
                    {postLoading ? <Loading /> : null}
                    {postLoadFailed && <h1 style={{ textAlign: "center", fontSize: "30px", color: "orangered" }} >No Connection</h1>}
                </div>
                {/* <!-- card grid  --> */}
                <div
                    className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                >
                    {

                        showBlog
                            .filter(searchTextFilter, searchText)
                            .filter(userIdFilter, filterByUserId)
                            .filter((post) => {
                                if (filterByCategory === 'ALL') {
                                    return true
                                } else {
                                    return post.category === filterByCategory
                                }
                            })
                            .map(post => {

                                let userDetail = {}
                                if (userList.length > 1) {
                                    userDetail = userList.find(user => user.userId === post.userId)
                                }

                                return (
                                    <Blog
                                        user={userDetail}
                                        key={post.id}
                                        blog={post}
                                        body={post.body}
                                    />
                                )
                            })
                    }
                </div>

            </div>

        </section>
    )
}

export default BlogList
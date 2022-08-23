import React from 'react'
import Blog from './Blog'
import BlogHeader from './BlogHeader'
import { useSelector } from 'react-redux'
import Loading from '../Loading/Loading'

const BlogList = () => {

    const blogPosts = useSelector(state => state.blog.blogPosts)
    const postLoading = useSelector(state => state.blog.postLoading)

    // console.log(postLoading)

    let showBlog = []

    if (blogPosts.length > 0) {
        showBlog = blogPosts
    }

    return (
        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <BlogHeader />

                {/* <!-- card grid  --> */}
                <div
                    className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                >
                    {postLoading ? <Loading /> : null}
                    {

                        showBlog.map(item => {
                            return (
                                <Blog
                                    key={item.id}
                                    blog={item}
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
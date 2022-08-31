import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchPost } from '../../store/blog/blogActionCreator'
import { fetchSinglePost } from '../../store/blog/blogActionCreator'


const PostDetailRouter = () => {

    const dispatch = useDispatch()
    const { postId } = useParams()


    const singlePost = useSelector(state => state.blog.singelPostLoaded)
    const isLoading = useSelector(state => state.blog.singlePostLoading)
    const isFailed = useSelector(state => state.blog.singlePostFailed)

    console.log(isLoading)





    useEffect(() => {
        dispatch(fetchSinglePost(postId))
    }, [])


    let post = singlePost || {}

    // decide what to see 

    let content = null

    if (isLoading) {
        content = <h1>Loading...</h1>
    } else if (!isLoading && post) {
        content = <div>

            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={post.image}
                    alt=""
                />
            </div>

            <div className="flex-1 bg-white p-6 flex flex-col justify-between" >
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            style={{ textTransform: "capitalize" }}
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                        >
                            Category: {post.category}

                        </span>
                    </p>
                    <a href="#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900 cursor-pointer"
                        >
                            {post.title}
                        </p>
                    </a>
                    <br />
                    <p>
                        <strong><i>Description:</i></strong>
                        {post.body}
                    </p>
                </div>
            </div>
        </div>
    }


    return (

        <div>

            <div style={{ marginBottom: "20px" }}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
                <div style={{ padding: "20px" }}>
                    <Link className="text-underline" to="/"> Back To All Post </Link>
                </div>
                {content}
            </div>

        </div>

    )
}

export default PostDetailRouter
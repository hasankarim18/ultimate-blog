import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchPost } from '../../store/blog/blogActionCreator'


const PostDetailRouter = () => {
    const [showPost, setShowPost] = useState(false)
    const dispatch = useDispatch()
    const { postId } = useParams()

    const blogPosts = useSelector(state => state.blog.blogPosts)

    const selectedPost = blogPosts.find(post => post.id === +postId)

    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])

    useEffect(() => {
        if (blogPosts.length > 0) {
            setShowPost(true)
        }
    }, [blogPosts])



    return (

        <div>
            {
                showPost ?
                    <div style={{ marginBottom: "20px" }}
                        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div style={{ padding: "20px" }}>
                            <Link className="text-underline" to="/"> Back To All Post </Link>
                        </div>

                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src={selectedPost.image}
                                alt=""
                            />
                        </div>

                        <div
                            className="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    <span
                                        style={{ textTransform: "capitalize" }}
                                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                                    >
                                        Category: {selectedPost.category}

                                    </span>
                                </p>
                                <a href="#" className="block mt-1">
                                    <p
                                        className="text-xl font-semibold text-gray-900 cursor-pointer"
                                    >
                                        {selectedPost.title}
                                    </p>
                                </a>
                                <br />
                                <p>
                                    <strong><i>Description:</i></strong>
                                    {selectedPost.body}

                                </p>
                            </div>

                        </div>
                    </div>
                    : 'No post selected! Try to reload...'}
        </div>

    )
}

export default PostDetailRouter
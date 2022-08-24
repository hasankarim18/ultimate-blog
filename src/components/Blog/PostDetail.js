import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const PostDetail = (props) => {

    const selectedPostId = useSelector(state => state.blog.selectedPostId)
    const blogPosts = useSelector(state => state.blog.blogPosts)

    const selectedPost = blogPosts.find(post => post.id === selectedPostId)

    const { image, title, body, category } = selectedPost

    return (
        <div style={{ marginBottom: "20px" }}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={image}
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
                            Category: {category}

                        </span>
                    </p>
                    <a href="#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900 cursor-pointer"
                        >
                            {title}
                        </p>
                    </a>
                    <br />
                    <p>
                        <strong><i>Description:</i></strong>
                        {body}

                    </p>
                </div>

            </div>
        </div>
    )
}

export default PostDetail
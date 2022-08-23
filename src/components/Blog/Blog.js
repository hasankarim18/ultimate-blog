import React from 'react'
import { useSelector } from 'react-redux'
import dateFormat from "dateformat";

const Blog = (props) => {


    const { id, image, title, userId, date, body, category } = props.blog

    const showDate = dateFormat(date, "d mmm, yyyy");

    const userName = props.user.name
    const userImage = props.user.image

    const minRead = (text) => {
        const wordPerMin = 60
        return Math.ceil(text.trim().length / wordPerMin)

    }

    return (
        // < !--single card-- >
        <div
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
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                            {/* {category} */}
                            {category.length > 0 ? category.map(item => item).join(' | ') : 'No category'}
                        </span>
                    </p>
                    <a href="#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {title}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={userImage}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm font-medium text-gray-900 hover:underline"
                        >
                            {userName}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time
                            >{showDate}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {minRead(body).toLocaleString()} min read </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!--single card-- >
    )
}

export default Blog
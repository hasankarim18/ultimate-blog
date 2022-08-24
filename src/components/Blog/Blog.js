import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dateFormat from "dateformat";
import Modal from '../ui/Modal/Modal'
import PostDetail from './PostDetail';
import UserInfo from './UserInfo';
import { openPostDetail } from '../../store/blog/blogActionCreator';
import { filterByCategory } from '../../store/search/searchActionCrators';

const Blog = (props) => {


    const openDetail = useSelector(state => state.blog.openPostDetail)
    const dispatch = useDispatch()
    const { id, image, title, userId, date, body, category } = props.blog

    const showDate = dateFormat(date, "d mmm, yyyy");

    const userName = props.user.name
    const userImage = props.user.image

    const minRead = (text) => {
        const wordPerMin = 60
        return Math.ceil(text.trim().length / wordPerMin)
    }

    const filterByCategoryHandler = (cat) => {
        dispatch(filterByCategory(cat))
    }


    const postDetail = () => {
        //   setModalOpen(!modalOpen)
        // setModalOpen(prev =>  !prev)
        dispatch(openPostDetail())

    }



    return (
        // < !--single card-- >
        <React.Fragment>
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
                            <span onClick={() => filterByCategoryHandler(category)}
                                style={{ textTransform: "capitalize" }}
                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                            >
                                {category}

                            </span>
                        </p>
                        <a onClick={postDetail} href="#" className="block mt-1">
                            <p
                                className="text-xl font-semibold text-gray-900 cursor-pointer"
                            >
                                {title}
                            </p>
                        </a>
                        {openDetail && <Modal onClose={postDetail} > <PostDetail post={props.blog} /> </Modal>}

                    </div>
                    <UserInfo
                        userName={userName}
                        userImage={userImage}
                        showDate={showDate}
                        minRead={minRead}
                        body={body}
                        userId={userId}
                    />
                </div>
            </div>
        </React.Fragment>
        // <!--single card-- >
    )
}

export default Blog
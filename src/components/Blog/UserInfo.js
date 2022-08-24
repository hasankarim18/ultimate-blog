import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByUserId } from '../../store/search/searchActionCrators'
import Modal from '../ui/Modal/Modal'
import UserDetail from '../Users/UserDetail'
import { openUserDetails } from '../../store/blog/blogActionCreator'

const UserInfo = ({ userName, userImage, showDate, minRead, body, userId, selectUserId }) => {

    const [showUserDetail, setShowUserDetail] = useState(false)
    const toggleUserDetail = useSelector(state => state.blog.openUserDetails)
    const dispatch = useDispatch()

    const filterByUserIdHandler = (id) => {
        dispatch(filterByUserId(id))
    }

    const openUserDetailHandler = () => {
        // setShowUserDetail(prevState => !prevState)
        dispatch(openUserDetails())
    }

    return (
        <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
                <img onClick={openUserDetailHandler}
                    className="cursor-pointer h-10 w-10 rounded-full"
                    src={userImage}
                    alt=""
                />
            </div>
            <div className="ml-3">
                <span onClick={openUserDetailHandler}
                    className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                >
                    {userName}
                </span>
                <span onClick={() => filterByUserIdHandler(userId)}
                    className="text-sm font-medium text-gray-900 hover:underline cursor-pointer underline ml-4"><i> Author's All posts </i></span>
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
            {toggleUserDetail && <Modal onClose={openUserDetailHandler} > <UserDetail userId={userId} /> </Modal>}
        </div>
    )
}

export default UserInfo
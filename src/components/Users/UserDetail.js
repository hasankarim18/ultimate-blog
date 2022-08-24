import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './UserDetail.module.css'
import Modal from '../ui/Modal/Modal'
import PostDetail from '../Blog/PostDetail'
import { openPostDetail } from '../../store/blog/blogActionCreator'

const UserDetail = (props) => {

    // const [openPostDetail, setOpenPostDetail] = useState(false)
    const userList = useSelector(state => state.user.userList)
    const blogPosts = useSelector(state => state.blog.blogPosts)
    const postDetail = useSelector(state => state.blog.openPostDetail)
    const dispatch = useDispatch()

    const selectedUser = userList.find(user => user.id === props.userId)
    const { image, name, userId } = selectedUser

    const usersPublishedPost = blogPosts.filter(item => item.userId === props.userId)

    const postDetailHandler = () => {
        dispatch(openPostDetail())

    }



    return (
        <Fragment>
            <div className={classes.userDetail}>
                <img src={image} alt="" />
                <div className={classes.info}>
                    <h1>User Name: <span>{name}</span></h1>
                    <p>UserId: <span>{userId} </span></p>
                    <p>Published Post: <span>{usersPublishedPost.length}</span></p>
                </div>

            </div>
            <div className={classes.title}>
                <p>
                    <strong>Pulished Post: </strong>
                </p>
                {
                    usersPublishedPost.map((post, index) => {
                        const { image, title, body, category } = post

                        return (
                            <p key={post.id} onClick={postDetailHandler}
                                className="hover:underline cursor-pointer" > <strong>{index + 1}</strong>. {post.title}
                                {postDetail &&
                                    <Modal onClose={postDetailHandler} >
                                        <PostDetail onClose={postDetailHandler} post={{ image, title, body, category }} />
                                    </Modal>}
                            </p>

                        )
                    })
                }

            </div>

        </Fragment>
    )
}

export default UserDetail
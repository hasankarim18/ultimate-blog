import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './UserDetail.module.css'
import Modal from '../ui/Modal/Modal'
import PostDetail from '../Blog/PostDetail'
import { openPostDetail } from '../../store/blog/blogActionCreator'

const UserDetail = (props) => {

    // console.log(props)


    const userList = useSelector(state => state.user.userList)
    const blogPosts = useSelector(state => state.blog.blogPosts)
    const postDetail = useSelector(state => state.blog.openPostDetail)
    const selecteAuthorId = useSelector(state => state.user.selectedAuthorId)
    const dispatch = useDispatch()
    // console.log(selecteAuthorId)




    const selectedUser = userList.find(user => user.id === selecteAuthorId)
    // console.log(selectedUser)
    const { image, name, userId } = selectedUser

    const usersPublishedPost = blogPosts.filter(item => item.userId === selecteAuthorId)

    const postDetailHandler = (id) => {
        dispatch(openPostDetail(id))

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
                            <p key={post.id} onClick={() => postDetailHandler(post.id)}
                                className="hover:underline cursor-pointer" > <strong>{index + 1}</strong>. {post.title}
                                {postDetail &&
                                    <Modal>
                                        <PostDetail post={{ image, title, body, category }} />
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
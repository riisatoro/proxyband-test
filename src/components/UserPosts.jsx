import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery, useGetUsersQuery } from '../store/api';
import { setPostsUserId } from '../store/reducers/uiReducer';


const UserPosts = () => {
  const { postsUserId } = useSelector(state => state.ui);
  const { data = [], isLoading } = useGetPostsQuery(postsUserId);
  const { data: users = []  } = useGetUsersQuery();

  const user = users.filter(({id}) => id === postsUserId) || [];

  const dispatch = useDispatch();

  if (isLoading) return <p>User's posts is loading ...</p>

  return (
    <div className='container'>
      <div className="row">
        <div className='col col-1'>
          <button
            className="btn btn-primary"
            style={{ transform: 'rotate(180deg)' }}
            onClick={() => dispatch(setPostsUserId(null))}
          >
            &#10132;
          </button>
        </div>
        <div className="col col-11">
          <h3 className="pb-0 mb-0 text-success mb-5">
            {`${user[0]?.username}'s posts`}
          </h3>
          <div className="row">
            {
              data.map((post, index) => (
                <div key={`${post.id}-${index}`} className="mb-5 col col-6">
                  <h3 className='bold'>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPosts;

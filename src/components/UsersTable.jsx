import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '../store/api';
import { setAlbumsUserId, setPostsUserId } from '../store/reducers/uiReducer';
import AlbumsModal from './AlbumsModal';


const UsersTable = () => {
  const dispatch = useDispatch();
  const { albumsUserId } = useSelector(state => state.ui);
  const { data = [], isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Users are loading...</p>

  return (
    <>
      {albumsUserId && <AlbumsModal user={data.filter(({id}) => id === albumsUserId)} />}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Nickname</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Website</th>
            <th scope="col" colSpan={2} className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user?.address?.city}</td>
                <td>{user?.website}</td>
                <td>
                  <button type="button" className="btn btn-warning" onClick={() => dispatch(setPostsUserId(user.id))}>View posts</button>
                </td><td>
                  <button type="button" className="btn btn-info" onClick={() => dispatch(setAlbumsUserId(user.id))}>View albums</button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </>
  )
}

export default UsersTable;

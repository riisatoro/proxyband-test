import React from 'react';
import {  useSelector } from 'react-redux';
import UserPosts from './components/UserPosts';
import UsersTable from './components/UsersTable';

function App() {
  const { postsUserId } = useSelector(state => state.ui);


  return (
    <div className="container mt-5">
      {postsUserId? <UserPosts /> : <UsersTable />}
    </div>
  );
}

export default App;

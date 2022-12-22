import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetAlbumsQuery } from '../store/api';
import { setAlbumsUserId } from '../store/reducers/uiReducer';


const AlbumsModal = ({user = []}) => {
  const dispatch = useDispatch();
  const { albumsUserId } = useSelector(state => state.ui);
  const { data = [] } = useGetAlbumsQuery(albumsUserId);

  return (
    <div className={`modal ${albumsUserId && 'd-block'}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{`${user[0]?.username}'s albums`}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => dispatch(setAlbumsUserId(null))}
            ></button>
          </div>
          <div className="modal-body">
            {
              data.map((album, index) => (
                <p key={`${album.title}-${index}`} style={{textTransform: 'capitalize'}}>{album.title}</p>
              ))
            }
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumsModal;

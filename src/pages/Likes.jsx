import React, { useEffect } from 'react';
import http from '../axios';
import '../App.css';

// IMG
import Back from '../assets/back.svg';
import Forward from '../assets/forward.svg';

function Likes() {
  useEffect(() => {
    http
      .get('playlists/37i9dQZF1DWWY64wDtewQt')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='likes'>
      <div className='contain'>
        <div className='next flex gap-5 pt-3 '>
          <img src={Back} alt='rasm' />
          <img src={Forward} alt='rasm' />
        </div>
      </div>
    </div>
  );
}

export default Likes;

import { useState } from 'react';
import './OpeningsSongList.css'

type Song = {
  id: number;
  title: string;
  url: string;
};

function OpeningsSongList() {
  

  return (
    <div className='SongListContainer'>
      <div className='OpeningsSongList'>
        <div className='Song'>1</div>
        <div className='Song'>2</div>
        <div className='Song'>3</div>
        <div className='Song'>4</div>
        <div className='Song'>5</div>
      </div>
    </div>
  );
}

export default OpeningsSongList;
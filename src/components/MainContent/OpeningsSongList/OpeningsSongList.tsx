import { useState } from 'react';
import './OpeningsSongList.css'
import SongTile from '@components/MainContent/OpeningsSongList/SongTile/SongTile'
import { Link, Routes, Route } from 'react-router-dom';
import type { FilterProps } from '@types/filter';
import { MAX_SONGS } from '@config/config';

function OpeningsSongList( { filter, setFilter } : FilterProps) {
  /*
  
  */
  const [numSongs, setSongs] = useState(MAX_SONGS); // how many Songs to show, every row will contain a max of 25

  return (
    <div className='SongListContainer'>
      <div className='OpeningsSongList'>
        {[...Array(numSongs)].map((_, i) => {
          const id = i+1;
          return (
            <>
            <Link key={id} className="linky" to={`/guess?id=${id}&filter=${filter}`}>
              <SongTile song_id={id} song_filter={filter} />
            </Link>
            </>
          )
      })}
      </div>
    </div>
  );
}

export default OpeningsSongList;
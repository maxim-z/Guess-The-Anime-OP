import './OpeningsSongList.css'
import SongTile from '@components/MainContent/OpeningsSongList/SongTile/SongTile'
import { Link } from 'react-router-dom';
import { MAX_SONGS } from '@config/config';
import { useFilterContext } from '@components/ContextProviders/FilterContext';
import FilterTitle from '../FilterTitle/FilterTitle';

function OpeningsSongList() {
  const filterContext = useFilterContext();
  // const [numSongs, setSongs] = useState(MAX_SONGS); // how many Songs to show, every row will contain a max of 25
  
  return (
    <div className='SongListContainer'>
      <FilterTitle />
      <div className='OpeningsSongList'>
        {[...Array(MAX_SONGS)].map((_, i) => {
          const id = i+1;
          return (
            <Link key={id} className="linky" to={`/guess?id=${id}&filter=${filterContext.filter}`}>
              <SongTile song_id={id} />
            </Link>
          )
      })}
      </div>
    </div>
  );
}

export default OpeningsSongList;
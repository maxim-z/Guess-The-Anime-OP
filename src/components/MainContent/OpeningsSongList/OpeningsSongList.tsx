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
    <div className='SongListContainer w-[70vw]'>
      <FilterTitle /> { /* Filter with Dropdown menu */ }
      <div className='OpeningsSongList grid grid-cols-5 md: grid-cols-25
                      bg-gradient-to-b from-[var(--primary-color)] via-[var(--primary-color-gradient-two)] to-[var(--primary-color-gradient-three)]'>
        {[...Array(MAX_SONGS)].map((_, i) => {
          const id = i+1;
          return (
            <Link key={id} className="linky border-2 border-blue-900" to={`/guess?id=${id}&filter=${filterContext.filter}`}>
              <SongTile song_id={id} />
            </Link>
          )
      })}
      </div>
    </div>
  );
}

export default OpeningsSongList;
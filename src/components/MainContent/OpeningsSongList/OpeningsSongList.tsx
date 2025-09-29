import './OpeningsSongList.css'
import SongTile from '@components/MainContent/OpeningsSongList/SongTile/SongTile'
import { Link } from 'react-router-dom';
import { MAX_SONGS } from '@config/config';
import { useFilterContext } from '@components/ContextProviders/FilterContext';

function OpeningsSongList() {
  const filterContext = useFilterContext();
  // const [numSongs, setSongs] = useState(MAX_SONGS); // how many Songs to show, every row will contain a max of 25
  
  return (
    <div className='SongListContainer'>
      { /* Filter with Dropdown menu */ }
      {/* <FilterTitle />  */}
      <div className='OpeningsSongList grid grid-cols-5 text-sm
                      sm:grid-cols-10 sm:text-md
                      md:grid-cols-10 md:text-lg
                      lg:grid-cols-15
                      xl:grid-cols-20
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
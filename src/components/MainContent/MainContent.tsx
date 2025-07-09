import './MainContent.css'
import Dropdown from '@components/MainContent/DropDown/DropDown'
import OpeningsSongList from '@components/MainContent/OpeningsSongList/OpeningsSongList'
import SaveLoad from '@components/MainContent/SaveLoad/SaveLoad'
import { useState } from 'react'
import type { FilterProps } from '@types/filter'

function Main( { filter, setFilter } : FilterProps ) {

    return (
        <div className='MainContent'>
          <Dropdown filter={filter} setFilter={setFilter} />
          <OpeningsSongList filter={filter} setFilter={setFilter} />
          <SaveLoad />
        </div>
    )
}

export default Main;
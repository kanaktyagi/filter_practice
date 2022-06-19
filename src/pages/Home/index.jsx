import React from 'react'
import FilterPannel from '../../components/Home/FilterPanel'
import { List } from '../../components/Home/List'
import SearchBar from '../../components/Home/SearchBar'
import './style.css'

function Home() {
  return (
    <div className="home">
        {/*Search bar */}
        <SearchBar/>
        <div className='home_panelList-wrap'>
           <div className="home_panel-wrap">
             <FilterPannel/>
           </div>
            <div className="home_list-wrap">
             <List/>
            </div>
        </div>
    </div>
  )
}

export default Home
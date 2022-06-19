import React, { useState } from 'react'
import FilterPannel from '../../components/Home/FilterPanel'
import { List } from '../../components/Home/List'
import SearchBar from '../../components/Home/SearchBar'
import './style.css'

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedRating, setSelectedRating ] = useState()

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'American' },
    { id: 2, checked: false, label: 'Chinese' },
    { id: 3, checked: false, label: 'Italian' },
  ]);
  const handleChangeChecked = (id) => {
    const cuisinesStateList = cuisines
    const changeCheckedCuisines = cuisinesStateList.map(item => item.id === id ?
      {...item, checked: !item.checked}: item
      )
      setCuisines(changeCheckedCuisines)

  }
    const handleSelectedCategory = (event,value) =>  (
      <div>
         {!value ? null : setSelectedCategory(value)}
      </div>
     )
  
    const handleSelectedRating=(event,value) =>  (
      <div>
           {!value ? null : setSelectedRating(value)}
      </div>
     )

  return (
    <div className="home">
        {/*Search bar */}
        <SearchBar/>
        <div className='home_panelList-wrap'>
           <div className="home_panel-wrap">
             <FilterPannel
             cuisines={cuisines}
              selectToggle={handleSelectedCategory} 
              selectedCategory ={selectedCategory}
              selectRating={handleSelectedRating}
              selectedRating={selectedRating}
              changeChecked={handleChangeChecked}
               />
           </div> 
            <div className="home_list-wrap">
             <List/>
            </div>
        </div>
    </div>
  )
}

export default Home
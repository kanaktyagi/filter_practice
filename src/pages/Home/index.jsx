import React, { useEffect, useState } from 'react'
import EmptyList from '../../components/common/EmptyView'
import FilterPannel from '../../components/Home/FilterPanel'
import { List } from '../../components/Home/List'
import SearchBar from '../../components/Home/SearchBar'
import { dataList } from '../../constant'
import './style.css'

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedRating, setSelectedRating ] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState([1000,5000])
  const [list, setList] = useState(dataList)
  const[resultFound,setResultFound] = useState(false)

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

     const handleChangePrice =(event, value) => setSelectedPrice(value)

     const applyFilters=() => {
       let updateList = dataList

       //rating
       if(selectedRating) {
         updateList = updateList.filter(item => parseInt(item.rating) === parseInt(selectedRating))
       }

       //category
       if(selectedCategory) {
          updateList = updateList.filter(item => item.category === selectedCategory)
       }
      
       //cuisine

       const cuisinesChecked = cuisines
       .filter((item) => item.checked)
       .map((item) => item.label.toLowerCase());
 
     if (cuisinesChecked.length) {
       updateList = updateList.filter((item) =>
         cuisinesChecked.includes(item.cuisine)
       );
     }
 
      // const cuisineChecked = cuisines.filter(item => item.checked).map(item => item.label)
      // if(cuisineChecked) {
      //   updateList = updateList.filter(item => cuisineChecked.includes (item.cuisine))
      // }


      setList(updateList)


     //  !updateList.length ? setResultFound(false) : setResultFound(true)
     }
    

     useEffect(() => {
       applyFilters()
     },[selectedRating, selectedCategory,cuisines])

  return (
   
    <div className="home">
       {console.log("updateList",list)}
        {/*Search bar */}
        <SearchBar/>
        <div className='home_panelList-wrap'>
           <div className="home_panel-wrap">
             <FilterPannel
             cuisines={cuisines}
              selectToggle= {handleSelectedCategory} 
              selectedCategory={selectedCategory}
              selectRating= {handleSelectedRating}
              selectedRating={selectedRating}
              changeChecked={handleChangeChecked}
              selectedPrice={selectedPrice}
              changedPrice={handleChangePrice}
               />
           </div> 
            <div className="home_list-wrap">
            <List list={list}/>
             {/* {resultFound ? <EmptyList/> :<List list={list}/>} */}
            </div>
        </div>
    </div>
  )
}

export default Home
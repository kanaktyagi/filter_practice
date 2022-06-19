import React from 'react'
import { categoryList,ratingList } from '../../../constant'
import CheckboxProton from '../../common/CheckboxProton'
import FilterListToggle from '../../common/FilterListToggle'
import SliderProton from '../../common/SliderProton'
import './style.css'

function FilterPannel({selectedCategory, selectToggle,selectedRating,selectRating,cuisines,changeChecked,
selectedPrice,changedPrice}) {
  return (
    <>
    <div className='input-group'>
      <p className='label'>Category</p>
     <FilterListToggle 
          options={categoryList} 
          value={selectedCategory}
          selectToggle={selectToggle}/>
    </div>
    <div className='input-group'>
      <p className='label'>Cuisine</p>
       {cuisines.map(cuisine => <CheckboxProton
           key ={cuisine.id} 
           cuisine={cuisine} 
           changeChecked={changeChecked}/>)}
      </div>
      <div className='input-group'>
      <p className='label'>Cuisine</p>
      <SliderProton value={selectedPrice}  changedPrice={changedPrice}/>
     
      </div>
    <div className='input-group'>
      <p className='label'>Star Rating</p>
       <FilterListToggle
         options={ratingList}
         value={selectedRating}
         selectToggle={selectRating}
       />
    </div>
    </>
  )
}

export default FilterPannel
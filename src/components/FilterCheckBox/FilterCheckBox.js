import React from 'react';
import './FilterCheckBox.css'

function FilterCheckBox(props) {
  return(
    <div className='filter'>
      <label className='filter__switch'>
        <input
          type="checkbox"
          onChange={props.handleCheckBoxClick}
          checked={props.isCheckBoxActive}
        />
        <span
          className='filter__slider'
        />
      </label>
      <p
        className='filter__name'
      >Короткометражки</p>
    </div>
  );
}

export default FilterCheckBox;

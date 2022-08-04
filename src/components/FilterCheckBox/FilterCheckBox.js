import React from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckBox.css'

function FilterCheckBox(props) {
  const location = useLocation();

  React.useEffect(() => {
    if(location.pathname === '/movies') {
      const localCheckBoxStatus = localStorage.getItem('checkBoxStatus')
      if(localCheckBoxStatus) {
        try {
          props.setIsCheckBoxActive(JSON.parse(localCheckBoxStatus));
        } catch (err) {
          console.log(err)
        }
      }
    }
  }, [])

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

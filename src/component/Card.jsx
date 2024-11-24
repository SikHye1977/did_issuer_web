import React, { useState } from 'react';
import "./Card.css";
import { useNavigate } from 'react-router-dom';

export default function Card({ title, summary, icon, navigateTo, isSelect }) {
  const navigate = useNavigate();
  const [institution] = useState(['졸업증명서']);
  const [selected, setSelected] = useState('선택하세요');
  const [isActive, setIsActive] = useState(false);
  const [next, setNext] = useState(false);

  const handleClick = () => {
    navigate(navigateTo);
  };

  const handleSelectClick = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsActive(false);
    setNext(true);
  };

  return (
    <div className='card' onClick={handleClick}>
      <div className='card-icon'>
        {icon}
      </div>
      <div>
        <h1><b>{title}</b></h1>
        <h3>{summary}</h3>
        {isSelect && (
          <div className="custom-select">
            <div className={`select-selected ${isActive ? 'select-arrow-active' : ''}`} onClick={handleSelectClick}>
              {selected}
            </div>
            {isActive && (
              <div className="select-items">
                {institution.map((inst, index) => (
                  <div key={index} onClick={() => handleOptionClick(inst)} className={inst === selected ? 'same-as-selected' : ''}>
                    {inst}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {next ? (
          <button 
            className='button'
            onClick = {() => navigate}
          >선택</button>
        ) : null}
      </div>
    </div>
  );
}

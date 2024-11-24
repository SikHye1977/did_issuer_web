import React, { useEffect, useState } from 'react';
import QRcode from '../component/QRcode';
import './ConnectionQRPage.css';
import { useNavigate } from 'react-router-dom';

export default function ConnectionQRPage() {
  const [data, setData] = useState('');
  const [url, setUrl] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080")
      .then(res => {
        console.log(res);
        return res.json();  // res.json()의 결과를 반환합니다.
      })
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error)); // 에러 처리를 추가합니다.
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    textAlign: 'center',
  };

  const handleDataCheck = () => {
    console.log(data);
  }

  return (
    <div>
      <div className='background'></div>
      <div style={containerStyle}>
        <div className='QRCard'>
          <h1>Connection Page</h1>
          <QRcode 
              props={data}
          />
          <button onClick={ () => navigate('/connection')} >connect success</button>
        </div>
      </div>
    </div>
  );
}

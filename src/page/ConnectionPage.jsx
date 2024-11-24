import React from 'react';
import './ConnectionPage.css';
import Card from '../component/Card';

export default function ConnectionPage() {
  return (
    <div>
    <div className='background'></div>
      <div className="container">
        <Card
          title = "발급할 인증서를 선택해 주세요"
          isSelect = "true"
        />
      </div>
    </div>
  );
}
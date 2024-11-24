import React, { useState } from 'react';
import './CredentialLibraryPage.css';
import Card from '../component/Card';

export default function CredentialLibraryPage() {
  //더미 데이터
  const [CredentialArray] = useState([
    { title: '졸업 증명서', summary: 'v 1.0' },
    { title: '재학 증명서', summary: 'v 1.0' },
  ]);

  return (
    <div>
      <div className='background'></div>
      <div className='container'>
        <div className='card-container'>
          {CredentialArray.map((credential, index) => (
            <Card 
              key={index} 
              title={credential.title} 
              summary={credential.summary} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

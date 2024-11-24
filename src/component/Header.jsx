import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const container = {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    padding: '10px 20px',
    zIndex: 1000, // 다른 요소 위에 고정되도록 z-index 설정
    boxSizing: 'border-box',
  };

  const title = {
    fontWeight: 'bold',
    marginRight: '10px',
    whiteSpace: 'nowrap',
  };

  const issuer = {
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '70px',
    gap: '10px',
    flexGrow: 1,
    whiteSpace: 'nowrap',
  };

  const button = {
    backgroundColor: 'white',
    border: '1px solid #ffffff',
    whiteSpace: 'nowrap',
  };

  const signupButton = {
    ...button,
    marginLeft: 'auto',
    whiteSpace: 'nowrap',
  };

  const handleTitleClick = () => {
    navigate('/');
  }

  useEffect(() => {
    // 헤더 높이만큼 body에 패딩 추가
    document.body.style.paddingTop = '100px';
    
    // Cleanup 함수로 컴포넌트가 언마운트될 때 패딩 제거
    return () => {
      document.body.style.paddingTop = '0px';
    };
  }, []);

  return (
    <div style={container}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={title} onClick={handleTitleClick}>UXM</h1>
        <span style={issuer} onClick={handleTitleClick}>Issuer</span>
      </div>
      <div style={buttonContainer}>
        <button style={button} onClick={() => navigate('/connection_QR')}>Connection</button>
        <button style={button}>인증서 발급</button>
        <button style={button}>스키마 생성 및 관리</button>
      </div>
      <button style={signupButton}>회원가입</button>
    </div>
  );
}

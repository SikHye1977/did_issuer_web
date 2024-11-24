import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../component/Card';
import { BsPersonFillDown } from "react-icons/bs";
import { BsBuildingGear } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function MainPage() {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    textAlign: 'center',
    position: 'relative', // 상대 위치로 설정
    zIndex: 1, // 배경보다 앞에 배치되도록 z-index 설정
  };

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  };

  return (
    <div>
      <div className="background"></div>
      <div style={containerStyle}>
        <h1>블록체인을 통한 신원 인증</h1>
        <h1>BlockChain self-Proof</h1>
        <div style={cardContainer}>
          <Card 
            title="개인 신원 발급"
            summary="개인 신원 정보를 앱을 통해 발급해 보세요"
            icon={<BsPersonFillDown/>}
            navigateTo='/connection_QR'
          />
          <Card
            title="신원 발급 관리"
            summary="발급한 신원정보를 관리하세요"
            icon={<BsBuildingGear />}
            navigateTo='/credentiallibrary'
          />
          <Card
            title="추가 항목"
            summary="추가할 항목이 있으면 작성"
            icon={<IoMdAddCircleOutline />}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { QRCodeCanvas }from 'qrcode.react';
import axios from 'axios';

export default function QRcode(props) {
  const [data, setData] = useState("");
  const [invitation, setInvitation] = useState("");
  const apiUrl = process.env.REACT_APP_HOST_IP;

  const getRes = async () => {
    await axios
      .post(`http://${apiUrl}/connections/create-invitation`, {})
      .then((res) => {
        setData(JSON.stringify(res.data.invitation));
        console.log(res.data);
        console.log('data load success');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRes();
  }, []);

  return (
    <div>
      <QRCodeCanvas
      size = {400} 
      value = {data}
      />
    </div>
  );
}


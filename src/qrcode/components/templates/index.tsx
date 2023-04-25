import React, { useRef, useState, useEffect } from 'react';
import jsQR, { QRCode } from 'jsqr';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scannedText, setScannedText] = useState<string>('');

  useEffect(() => {
    const constraints = { video: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const scanQRCode = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const canvasContext = canvas?.getContext('2d');

    if (video && canvas && canvasContext) {
      canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
      const code: QRCode | null = jsQR(imageData.data, imageData.width, imageData.height);

      if (code) {
        setScannedText(code.data);
      } else {
        setScannedText('QR 코드를 찾을 수 없습니다.');
      }
    }
  };

  return (
    <div>
      <video ref={videoRef} width='300' height='200' style={{ display: 'none' }}></video>
      <canvas ref={canvasRef} width='300' height='200' style={{ display: 'none' }}></canvas>
      <button onClick={scanQRCode}>QR 코드 스캔</button>
      <div>{scannedText}</div>
    </div>
  );
}

export default App;

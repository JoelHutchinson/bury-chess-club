import React, { useState, useEffect } from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default function FacebookTimeline() {
  const [key, setKey] = useState(0);
  const [mainPanelHeight, setMainPanelHeight] = useState(800);

  useEffect(() => {
    setTimeout(() => {
      const mainPanel = document.getElementById('main-panel');
      if (mainPanel) {
        const height = mainPanel.clientHeight;
        setMainPanelHeight(height > 600 ? height : 600);
      }
      setKey(prevKey => prevKey + 1);
    }, 500)
    
  }, []);

  return (
    <FacebookProvider appId="322305064086840">
      <Page
        key={key}
        href={'https://www.facebook.com/BuryChessClub/'}
        tabs={'timeline'}
        width={'600'}
        height={mainPanelHeight}
      />
    </FacebookProvider>
  );
}
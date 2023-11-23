import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default function FacebookTimeline() {
  return (
    <FacebookProvider appId="322305064086840">
      <Page href={"https://www.facebook.com/BuryChessClub/"} tabs={"timeline"} width={"700"} height={"1000"}/>
    </FacebookProvider>
  );
}
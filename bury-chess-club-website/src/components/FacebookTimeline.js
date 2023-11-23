import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default function FacebookTimeline() {
  return (
    <FacebookProvider appId="322305064086840">
      <Page href={"https://www.facebook.com/BuryChessClub/"} tabs={"timeline"} width={"600"} height={"800"}/>
    </FacebookProvider>
  );
}
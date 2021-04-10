import React from 'react';
import movie_line from '../../assets/movies/Line - 1280x720.mp4';

function Cover() {
  return (
    <div className="section__header">
        <video autoPlay loop muted src={movie_line}></video>
        <p>ALEJANDRO HERNÁNDEZ</p>
    </div>
  );
}

export default Cover;
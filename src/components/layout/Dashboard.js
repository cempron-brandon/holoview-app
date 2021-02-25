import React from 'react';
import VideoCardGrid from '../videos/VideoCardGrid';

export default function Dashboard ({id}) {
  return (
    <div className="row">
      <div className="col">
        <VideoCardGrid key={id} id={id}/>
      </div>
    </div>
  );
}

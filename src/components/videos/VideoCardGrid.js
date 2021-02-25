import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import './VideoCardGrid.scss';
import CategoryHeader from './VideoHeaderPanel/VideoHeaderPanel';

import {Divider} from "semantic-ui-react";
import axios from 'axios';

import {API_BASE_URL,API_CHANNEL_INFO} from '../../utils/constants';

// import { Accordion } from 'react-bootstrap';
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export default function VideoCardGrid({id}) {
  console.log("video grid: ",id)
  const url = `${API_BASE_URL}${API_CHANNEL_INFO}/${id}`
  const [channelInfo, setChannelInfo] = useState(null)
  const [videos, setVideos] = useState(null)
  // const [activeKey, setActiveKey] = useState('0');

  useEffect( async() => {
    //get channel info
    let p1 = axios.get(url).then(res => {
      console.log('get channel info')
      console.log(res.data.english_name)
      setChannelInfo(res.data)
    })

    //get all videos for a channel
    let p2 = axios.get(url+'/videos').then(res => {
      console.log('get all videos for a channel')
      console.log(res.data[0].title)    
      setVideos(res.data)
    })

    await Promise.all([p1,p2]);
  }, [])

  const videoCategory = getVideoCategory(channelInfo);
  const videoPreviews = getVideoPreviews(videos);

  return (
    <>
      <div className="panel">
        {videoCategory}
      </div>
      { videoPreviews ? <Divider /> : null }
      <div className='video-grid'>
        {videoPreviews}
      </div>
      {/* <div className='top'>
        <Accordion defaultActiveKey={activeKey}>
          <div className="panel">
            <CustomToggle eventKey="0">
              Click me!
            </CustomToggle>
            {videoCategory}
          </div>
          <Divider />
          <Accordion.Collapse eventKey="0">
            <div className='video-grid'>
              {videoPreviews}
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div> */}
    </>
  );
}

// const CustomToggle = (({ children, eventKey }) => {
//   const decoratedOnClick = useAccordionToggle(eventKey, () =>
//     console.log('totally custom!'),
//   );
//   return (
//     <button
//       type="button"
//       style={{ backgroundColor: 'pink' }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// });

const getVideoCategory = (channelInfo => {
  return ( !channelInfo ? null : <CategoryHeader key={channelInfo.id} channelInfo={channelInfo}/>)
})

const getVideoPreviews = (videos => {
  if(!videos || !videos.length) {
    return null
  }
  return videos.map( video => {
    return video && video.status !== "missing" ? <VideoCard key={video.id} video={video} /> : null
  });
  // return videos.map( (video, idx) => { 
  //   if ( idx < 10 && video.status !== "missing" ) {
  //     return <VideoCard
  //     key={video.id}
  //     video={video}
  //     />
  //   } else {
  //     return null
  //   }
  // });
});

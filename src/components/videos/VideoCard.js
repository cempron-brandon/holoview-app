import React, { useState } from 'react';
import {Image} from 'semantic-ui-react';
import './VideoCard.scss';

import {YT_BASE_URL,YT_VIDEO_INFO,YT_IMG_BASE_URL,YT_IMG_JPG_TYPE,YT_IMG_JPG_FILENAME} from '../../utils/constants';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

export default function VideoCard({video}){
  const [videoUrl] = useState(`${YT_BASE_URL}${YT_VIDEO_INFO}?v=${video.id}`)
  const [imageUrl] = useState(`${YT_IMG_BASE_URL}${YT_IMG_JPG_TYPE}/${video.id}${YT_IMG_JPG_FILENAME}`)

  const videoDuration = formattedDuration(video)
  // console.log(`%c${videoDuration}`,"font-weight: bold")

  return (
    <>
      <div className={['video-preview', true, true].join(' ')}>
        <a href={videoUrl} target="_blank" className='image-container'>
          <Image src={imageUrl}/>
          <div className={video.status === "live"? 'live-label': 'time-label'}>
            <span>{videoDuration}</span>
          </div>
        </a>
        <div className='video-info'>
          <a href={videoUrl} target="_blank" className={['video-title', 'semi-bold', 'show-max-two-lines', true].join(' ')}>
            {video.title}
          </a>
          <div className='video-preview-metadata-container'>
            <div className={video.status === "live"? 'live': 'view-and-time'}>
              {getFormattedViewAndTime(video)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const getFormattedViewAndTime = (video => {
  return video.status === 'live' ? "Live Now" : 
        video.status === "upcoming" ? `Scheduled for ${new Date(video.available_at)}`  :
        `${timeAgo.format(new Date(video.available_at))}` 
})

const formattedDuration = (video => {
  const duration = video.duration * 1000;
  return duration ? new Date(duration).toISOString().substr(11, 8) : "LIVE";
})
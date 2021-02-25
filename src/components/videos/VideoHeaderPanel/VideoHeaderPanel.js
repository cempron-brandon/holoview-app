import React from 'react'
import {getShortNumberString} from '../../../services/number/number-format';
import './VideoHeaderPanel.scss';

import {YT_BASE_URL,YT_CHANNEL_INFO} from '../../../utils/constants';


export default function CategoryHeader({channelInfo}){
  const data = channelInfo
  const channelUrl = `${YT_BASE_URL}${YT_CHANNEL_INFO}/${channelInfo.id}`
  const subscriberCount = getShortNumberString(channelInfo.subscriber_count)

  return (
    <>
      <div className="card">
        <a href={channelUrl} target="_blank" className="card-avatar">
          <img
            src={data.thumbnail}
            className="card-img-top"
            alt=""
          />
        </a>
        <div className="card-content">
          <h5 className="card-title">
            {/* {data.english_name} */}
            {data.name}
          </h5>
          <p className="card-subtitle">
            {subscriberCount} subscribers
          </p>
        </div>
      </div>
    </>
  );
}

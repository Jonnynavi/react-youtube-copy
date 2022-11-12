import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, videoClicked}) => {

    const renderedList = videos.map(video =>{
        return <VideoItem key={video.id.videoId} videoClicked={videoClicked} video={video} />
    });

    return <div className='ui relexed divided list'>{renderedList}</div>
    
};

export default VideoList;
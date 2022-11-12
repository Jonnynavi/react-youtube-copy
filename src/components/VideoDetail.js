import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
       return <div>Loading...</div>
    }
    const searchUrl = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className='ui segment'>
            <div className='ui embed'>
                <iframe title='videoplayer' src={searchUrl} />
            </div>
            <h4 className='ui header'>{video.snippet.title}</h4>
            <div>{video.snippet.description}</div>
        </ div>

    )
}

export default VideoDetail;
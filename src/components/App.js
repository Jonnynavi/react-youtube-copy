import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () => {
   
    const [currentVideo, setCurrentVideo] = useState(null);
    const [videos, search] = useVideos('Dog');

    useEffect(() => {
        setCurrentVideo(videos[0]);
    }, [videos]);
    

    return (
        <div className='ui container'>
            <SearchBar onTermChange={search} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={currentVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList videoClicked={setCurrentVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default App;
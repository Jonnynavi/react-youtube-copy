import axios from 'axios';

const KEY ='AIzaSyDnEJWaj9pII2ToOV4oQI-4qGhqwFEKUEY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});
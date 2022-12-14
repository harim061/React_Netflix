import React,{useEffect,useState} from 'react';
import axios from '../api/axios';
import requests from '../api/requests'
import "./Banner.css"

export default function Banner() {

    const [movie, setMovie] = useState([])
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() =>{
        //현재 상영중인 영화 정보
        const request = await axios.get(requests.fetchNowPlaying);
        //axios를 미리 만들어둔  instance에서 가져와야하는데 그냥 axios에서 가져오면 오류

        const movieId =
            request.data.results[
                Math.floor(Math.random()*request.data.results.length)
            ].id;
        
        const {data:movieDetail} = await axios.get(`movie/${movieId}`,{params:{append_to_response:"videos"},
        });

        setMovie(movieDetail);
    };
    
    const truncate = (str,n) =>{
        return str?.length > n?str.substr(0,n-1) + "...":str;
    }

    return (
        <header
        className="banner"
        style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        }}
    >
    <div className="banner__contents">
        <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
        </h1>

        <div className="banner__buttons">
            <button
            className="banner__button play"
            >
            Play
            </button>
            <button className="banner__button info">More Information</button>
        </div>

        <h1 className="banner__description">
            {truncate(movie?.overview,100)}
        </h1>
        </div>
        <div className="banner--fadeBottom" />
    </header>
    )
}

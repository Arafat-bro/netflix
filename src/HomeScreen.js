import React from 'react'
import Nav from './Nav'
import Banner from './Banner';
import Row from './Row';
import Requests from './Requests';


function HomeScreen() {
    return (
        <div className="homescreen">
            <Nav />
            <Banner />
            <Row title="Netflix Originals"
                fetchUrl={Requests.fetchNetflixOriginals}
                isLargeRow={ true} />
            <Row title="Top Rated"
                fetchUrl={Requests.fetchTopRated}
            />
            <Row title="Trending Movies"
                fetchUrl={Requests.fetchTrendingMovies} 
            />
            <Row title="Action Movies"
                fetchUrl={Requests.fetchActionMovies}
                />
            <Row title="Comedy Movies"
                fetchUrl={Requests.fetchComedyMovies} 
                />
            <Row title="Romance Movies"
                fetchUrl={Requests.fetchRomanceMovies} 
                />
            <Row title="Documentaries"
                fetchUrl={Requests.fetchDocumentaries}
                />
            <Row title="Horror Movies"
                fetchUrl={Requests.fetchHorrorMovies} 
                />
        </div>
    )
}

export default HomeScreen;

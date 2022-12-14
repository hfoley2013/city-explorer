import React from 'react';
import Movies from './Movies.js';
import './Movie.css';

class Movie extends React.Component {

  render() {

    return(
      <div id="movies">
        <section id="moiveSection">
          <h3>Top Movies Featuring {this.props.city}</h3>
            <div id='movieRecommendations'>
              {this.props.movies.map((movie, idx) => (
                <Movies
                  title={movie.title}
                  poster={movie.imgPath}
                  overview={movie.overview}
                  rating={movie.averageRating}
                  review={movie.totalReviews}
                  releaseDate={movie.releaseDate}
                  key={idx}/>
                ))
              }
            </div>
        </section>
      </div>
    );
  };
};

export default Movie;


                // <Card key={idx}>
                //   <Card.Img variant="top" id={movie.title} alt={movie.title} src={movie.imgPath}/>
                //   <Card.Body>
                //     <div id="title">
                //       <Card.Title>{movie.title}</Card.Title>
                //     </div>
                //     <div id="summary">
                //       <h5>Summary:</h5>
                //       <p>{movie.overview}</p>
                //     </div>
                //     <div id="rating">
                //       <h5>Rating:</h5> 
                //       <p>{movie.averageRating}</p>
                //     </div>
                //     <div id="reviews">
                //       <h5>Reviews:</h5> 
                //       <p>{movie.totalReviews}</p>
                //     </div>
                //     <div id="releaseDate">
                //       <h5>Release Date:</h5>
                //       <p>{movie.releaseDate}</p>
                //     </div>
                //   </Card.Body>
                // </Card>

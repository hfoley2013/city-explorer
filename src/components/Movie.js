import React from 'react';
import Card from 'react-bootstrap/Card';
import './Movie.css';

class Movie extends React.Component {

  render() {

    return(
      <div id="movies">
        <section id="moiveSection">
          <h3>Top Movies Featuring {this.props.city}</h3>
            <div id='movieRecommendations'>
              {this.props.movies.map((movie, idx) => (
                <Card key={idx}>
                  <Card.Img variant="left" id={movie.title} alt={movie.title} src={movie.imgPath}/>
                  <Card.Text>
                    <div id="title">
                      <Card.Title>{movie.title}</Card.Title>
                    </div>
                    <div id="summary">
                      <h5>Summary:</h5>
                      <p>{movie.overview}</p>
                    </div>
                    <div id="rating">
                      <h5>Rating:</h5> 
                      <p>{movie.averageRating}</p>
                    </div>
                    <div id="reviews">
                      <h5>Reviews:</h5> 
                      <p>{movie.totalReviews}</p>
                    </div>
                    <div id="releaseDate">
                      <h5>Release Date:</h5>
                      <p>{movie.releaseDate}</p>
                    </div>
                  </Card.Text>
                </Card>
                ))
              }
            </div>
        </section>
      </div>
    );
  };
};

export default Movie;

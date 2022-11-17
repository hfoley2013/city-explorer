import React from 'react';

class Movie extends React.Component {

  render() {

    return(
      <div id="movies">
        <section>
          <h3>Top Movies Featuring {this.props.city}</h3>
            <div id='movieRecommendations'>
              {this.props.movies.map((movie, idx) => (
                <article key={idx}>
                  <h4>{movie.title}</h4>
                  <p>{movie.overview}</p>
                  <p>{movie.averageRating}</p>
                  <p>{movie.totalReviews}</p>
                  <p>{movie.releaseData}</p>
                  <img id={movie.title} alt={movie.title} src={movie.imgPath}/>
                </article>
                ))
              }
            </div>
        </section>
      </div>
    );
  };
};

export default Movie;

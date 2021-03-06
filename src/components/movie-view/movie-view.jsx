import React from 'react';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;


    return ( 
      <div className="movie-view">
        <div className="movie-image"> 
          <img src={ movie.ImagePath } alt="Movie image"/>
        </div>
        <div className="movie-title"> 
          <span className="label" >Title: </span>
          <span className="value">{ movie.Title }</span> 
        </div>
        <div className="movie-description"> 
          <span className="label">Description: </span>
          <span className="value">{ movie.Description }</span>
        </div>
        <button onClick={() => {onBackClick()}}>Back</button>
      </div>
    );
  }
}
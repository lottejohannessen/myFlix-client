import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component {
  handleAdd() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios.post(`https://lotte-johannessen-myflixdb.herokuapp.com/users/${user}` + "/movies/" +
      this.props.movie._id, {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        console.log(response);
        alert(this.props.movie.Title + " has been added to your favorites movie.");
      })
  }
  render() {
    const { movie } = this.props;
    return (
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button className="mb-2" block variant="primary">Open</Button>
          </Link>
          <Link to={`/directors/${movie.Director.Name}`}>
            <Button className="mb-2" block variant="primary">Director</Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button className="mb-2" block variant="primary">Genre</Button>
          </Link>
          <Link to={`/movies/${movie._id}`}>
            <Button className="mb-2" block variant="primary" onClick={() => this.handleAdd(movie)}>Add to favourite</Button>
          </Link>
        </Card.Body>
      </Card>
      // </div>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string.isRequired
  }).isRequired,
};
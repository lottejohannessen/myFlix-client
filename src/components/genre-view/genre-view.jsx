import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class GenreView extends React.Component {
  render() {
    const { genre, onBackClick, movies } = this.props;

    return (
      <div className="genre-view">
        <Card border="info" bg="dark" text="white" className="genre-card">

          <Card.Body>
            <Card.Title><span className='text-primary'>Name: </span> {genre.Name}</Card.Title>
            <Card.Text><span className='text-primary'>Bio: </span>{genre.Description}</Card.Text>
            {
              movies.map((m) => {//loop through movieData (= movies-collection in DB) and use the one that has this Genre Name that we're in
                if (m.Genre.Name === genre.Name)
                  return <div>{m.Title}</div>              
                })
            }
            <Button block onClick={() => { onBackClick(); }}>Back</Button>
          </Card.Body>
        </Card>

      </div>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }),
  onBackClick: PropTypes.func.isRequired
};

let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, {} )(GenreView);
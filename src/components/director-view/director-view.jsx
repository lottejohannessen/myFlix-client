import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

 class DirectorView extends React.Component {
  render() {
    const { director, onBackClick, movies } = this.props;
    console.log(movies);

    return (
      <div className="director-view">
        <Card border="info" bg="dark" text="white" className="director-card">

          <Card.Body>
            <Card.Title><span className='text-primary'>Name: </span> {director.Name}</Card.Title>
            <Card.Text><span className='text-primary'>Bio: </span>{director.Bio}</Card.Text>
            <Card.Text><span className='text-primary'>Birth: </span>{director.Birth}</Card.Text>
            <Card.Text><span className='text-primary'>Death: </span>{director.Death}</Card.Text>
            {
              movies.map((m) => {//loop through movieData (= movies-collection in DB) and use the one that has this Genre Name that we're in
                if (m.Director.Name === director.Name)
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

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
    Death: PropTypes.string,
  }),
  onBackClick: PropTypes.func.isRequired
};

let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, {} )(DirectorView);
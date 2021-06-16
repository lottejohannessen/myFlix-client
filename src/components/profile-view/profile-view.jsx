import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export function ProfileView (props){
    const { Username, Email, Birthday, FavouriteMovies = [] } = props.userInfo;
    console.log(props);
    const movies = props.movies;
    const favorites = movies.filter(movie => FavouriteMovies.indexOf(movie._id) > -1)
    return (
        <Container>
            <Row className="profile-view">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>User info</Card.Title>
                            <div className="label h6">Username</div>
                            <div className="value">{Username}</div>
                            <div className="label h6">Password</div>
                            <div className="value">********</div>

                            <div className="label h6">Email</div>
                            <div className="value">{Email}</div>

                            <div className="label h6">Birthday</div>
                            <div className="value">{Birthday && Birthday.slice(0, 10)}</div>

                            <Link to={'/profile/update'}>
                                <Button variant="link">Update user info</Button>
                            </Link>

                                    <div className="card-title h5 h5 fav-movies">Favorite movies</div>
                                    {
                                        favorites.map(m => (
                                            <Link key={m._id} to={`/movies/${m._id}`}>
                                            <div>
                                                <Button variant="link">{m.Title}</Button>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                        
                        </Card.Body>
                                    </Card>
                                    </Col>

                    </Row>

            </Container>
    )
} 



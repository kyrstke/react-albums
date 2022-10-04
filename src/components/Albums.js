import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { albums } from "../albums_data";

export default class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: albums,
            title: "",
            artist: "",
            description: "",
            rating: "",
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);

        this.handleSubmitNewAlbum = this.handleSubmitNewAlbum.bind(this);
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleArtistChange(event) {
        this.setState({artist: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleRatingChange(event) {
        this.setState({rating: event.target.value});
    }

    handleSubmitNewAlbum(event) {
        event.preventDefault();
        let currRating = parseInt(this.state.rating, 10);
        if(this.state.title === "" || this.state.artist === "" || this.state.description === "" || this.state.rating === "") {
            alert("Please fill out all fields");
        }
        else if(isNaN(currRating) || currRating < 1 || currRating > 5) {
            alert("Please enter a rating between 1 and 5");
        }
        else {
            const newAlbum = {
                id: (this.state.albums.length + 1).toString(),
                title: this.state.title,
                artist: this.state.artist,
                description: this.state.description,
                rating: this.state.rating,
                image: "template.png",
            };
            this.setState({
                albums: [...this.state.albums, newAlbum],
                title: "",
                artist: "",
                description: "",
                rating: "",
            });
        }
    }

    handleDeleteItem(id) {
        console.log("id:", id);
        const newAlbums = this.state.albums.filter((album) => album.id !== id);
        this.setState({albums: newAlbums});
    }

    handleChangeRating(id) {
        console.log("id:", id);
        const newAlbums = this.state.albums.map((album) => {
            if(album.id === id) {
                let newRating = parseInt(album.rating, 10) + 1;
                if(newRating > 5) {
                    newRating = 1;
                }
                album.rating = newRating.toString();
            }
            return album;
        });
        this.setState({albums: newAlbums});
    }

    render() {
        return (
            <Container>
                <Row lg={3} md={2} sm={1}>
                    {this.state.albums.filter(
                        album => 
                        album.title.toLowerCase().startsWith(this.props.titleFilter.toLowerCase()) 
                        && album.artist.toLowerCase().startsWith(this.props.artistFilter.toLowerCase())
                        && album.description.toLowerCase().startsWith(this.props.descFilter.toLowerCase())
                        && album.rating.toString().startsWith(this.props.ratingFilter.toString()))
                        .sort((a, b) => {
                            if(this.props.sortTitle) {
                                if(this.props.ascTitle) {
                                    return a.title.localeCompare(b.title);
                                }
                                else {
                                    return b.title.localeCompare(a.title);
                                }
                            }
                            return true;
                        })
                        .sort((a, b) => {
                            if(this.props.sortArtist) {
                                if(this.props.ascArtist) {
                                    return a.artist.localeCompare(b.artist);
                                }
                                else {
                                    return b.artist.localeCompare(a.artist);
                                }
                            }
                            return true;
                        })
                        .sort((a, b) => {
                            if(this.props.sortDesc) {
                                if(this.props.ascDesc) {
                                    return a.description.localeCompare(b.description);
                                }
                                else {
                                    return b.description.localeCompare(a.description);
                                }
                            }
                            return true;
                        })
                        .sort((a, b) => {
                            if(this.props.sortRating) {
                                if(this.props.ascRating) {
                                    return b.rating.toString().localeCompare(a.rating.toString());
                                }
                                else {
                                    return a.rating.toString().localeCompare(b.rating.toString());
                                }
                            }
                            return 0;
                        })
                        .map((album) => {
                        const { id, title, artist, description, rating, image } = album;
                        return (
                            <Col className="d-flex my-3">
                                <Card className="flex-fill" key={id} style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={image}/>
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <Container className="mb-3">
                                            <Card.Title className="mb-3">{title}</Card.Title>
                                            <Card.Text>{artist}</Card.Text>
                                            <Card.Text>{description}</Card.Text>  
                                        </Container>
                                        <Container>
                                            <Card.Text>Rating: {rating}</Card.Text>
                                            <Container className="d-flex p-0 justify-content-between">
                                                <Button variant="dark" onClick={() => this.handleChangeRating(id)}>Change rating</Button>
                                                <Button variant="outline-dark" onClick={() => this.handleDeleteItem(id)}>Delete</Button>
                                            </Container>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                    <Col className="d-flex my-3">
                        <Card className="flex-fill" key="997" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={"template.png"}/>
                            <Card.Body className="d-flex flex-column justify-content-between">
                                    <Card.Title className="mb-3">Add a new album</Card.Title>
                                    <Form onSubmit={this.handleSubmitNewAlbum}>
                                        <Form.Group controlId="formNewAlbum">
                                            <Form.Control className="my-2" type="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/>
                                            <Form.Control className="my-2" type="artist" placeholder="Artist" value={this.state.artist} onChange={this.handleArtistChange}/>
                                            <Form.Control className="my-2" type="description" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                                            <Form.Control className="my-2" type="rating" placeholder="Rating" value={this.state.rating} onChange={this.handleRatingChange}/>
                                            <Button variant="dark" className="mt-3" type="submit">Add an album</Button>
                                        </Form.Group>
                                    </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
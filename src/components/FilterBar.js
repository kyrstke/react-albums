import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class FilterBar extends React.Component {

    render() {
        return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-md-center mt-3">
                    <h3>Filter albums</h3>
                </Col>
            </Row>
            <Row>
                <Col className="mt-3">
                    <Form>
                        <Form.Group className="d-flex flex-column justify-content-md-center mb-3" controlId="formTitle">
                            <Form.Control type="title" placeholder="Title" onChange={this.props.handleFilterTitleChange}/>
                        </Form.Group>
                        <Button variant="dark" onClick={this.props.onSortTitle} style={{ width: "100%" }}>
                            Sort by title
                        </Button>
                        <Button variant="-" size="sm" onClick={this.props.resetFilters}>
                            Reset sorting
                        </Button>
                    </Form>
                </Col>
                <Col className="mt-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formDescriptions">
                            <Form.Control type="artist" placeholder="Artist" onChange={this.props.handleFilterArtistChange}/>
                        </Form.Group>
                        <Button variant="dark" onClick={this.props.onSortArtist} style={{ width: "100%" }}>
                            Sort by artist
                        </Button>
                    </Form>
                </Col>
                <Col className="mt-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Control type="description" placeholder="Description" onChange={this.props.handleFilterDescChange}/>
                        </Form.Group>
                        <Button variant="dark" onClick={this.props.onSortDesc} style={{ width: "100%" }}>
                            Sort by description
                        </Button>
                    </Form>
                </Col>
                <Col className="mt-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formRating">
                            {/* <Form.Label>Rating</Form.Label> */}
                            <Form.Control type="rating" placeholder="1-5 rating" onChange={this.props.handleFilterRatingChange}/>
                        </Form.Group>
                        <Button variant="dark" onClick={this.props.onSortRating} style={{ width: "100%" }}>
                            Sort by rating
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

        // <Stack direction="horizontal" gap={3}>
        //     <Form className="m-3">
        //         <Form.Group className="mb-3 col-sm" controlId="formTitle">
        //             <Form.Label>Title</Form.Label>
        //             <Form.Control type="title" placeholder="Title" />
        //         </Form.Group>
        //         <Button variant="outline-dark">
        //             Sort by name
        //         </Button>
        //     </Form>
        //     <Form className="border">
        //         <Form.Group className="mb-3 col-sm" controlId="formDescriptions">
        //             <Form.Label>Author</Form.Label>
        //             <Form.Control type="author" placeholder="Author" />
        //         </Form.Group>
        //         <Button variant="outline-dark">
        //             Sort by author name
        //         </Button>
        //     </Form>
        //     <Form className="border">
        //         <Form.Group className="mb-3 col-sm" controlId="formDescription">
        //             <Form.Label>Description</Form.Label>
        //             <Form.Control type="description" placeholder="Description" />
        //         </Form.Group>
        //         <Button variant="outline-dark">
        //             Sort by description
        //         </Button>
        //     </Form>
        //     <Form className="border">
        //         <Form.Group className="mb-3 col-sm" controlId="formRating">
        //             <Form.Label>Rating</Form.Label>
        //             <Form.Control type="rating" placeholder="1-5 rating" />
        //         </Form.Group>
        //         <Button variant="outline-dark">
        //             Sort by rating
        //         </Button>
        //     </Form>
        // </Stack>
        );
    }
}
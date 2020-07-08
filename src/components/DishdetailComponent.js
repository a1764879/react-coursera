import React, {useState} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,
     BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,Row, Col, Label  } from 'reactstrap';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <=len)
const minLength = (len) => (val) => (val) && (val.length >=len)


function RenderDishDetail({dish,comments}){
    
    return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%"  src={dish.image} alt={dish.name}/>
                    <CardBody>
                    <CardTitle><b>{dish.name}</b></CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <RenderComments comments = {comments} />
        </div>
    )
}

function handleSubmit(values) {
    console.log("current values "+ JSON.stringify(values))
}


function RenderComments({comments }){
    
    

    const comment =  comments.map((dcs) => {
        return (
            <ul key = {dcs.id} className="list-unstyled">
                <li>{dcs.comment}</li>
                <li>-- {dcs.author}, <Moment format="MMM DD,YYYY">{dcs.date}</Moment></li>
            </ul>
        )
    })
    return(
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {comment}
            <CommentForm />
        </div>
    )

}
const numbers = [0,1,2,3,4,5].map((val) => {
    return(
        <option value={val}>{val}</option>
    )
})

const CommentForm = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!isModalOpen) 
    }

    return(
        <div>
            <Button outline onClick={toggleModal}>
                <i className="fa fa-pencil"></i> Submit Comment
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader  toggle={toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={2}>Rating</Label>
                            <Col md={10}>
                                <Control.select model=".rating" id="rating" name="rating"
                                className="form-control" placeholder="Select">
                                    {numbers}
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" md={2}>Your name</Label>
                            <Col md={10}>
                                <Control.text model=".name" id="name" name="name" className="form-control" 
                                placeholder="Your Name"
                                validators={{
                                    required,minLength:minLength(3),maxLength:maxLength(15)
                                }}
                                />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: "Mist be greater than 3 charectors",
                                    maxLength: "Must be 15 characters or less"
                                }}
                            />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={3}>Comment</Label>
                            <Col md={10}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                rows="6"
                                className="form-control"
                                placeholder="Enter comment"/>
                                
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={10}>
                                <Button type="submit" value="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>

                        </Row>
                    </LocalForm>
                </div>
            </ModalBody>
            </Modal>
        </div>
    )

}

const DishDetail = (props) => {
    if(props.dish.name != null) {
        return(
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>                
                
            <RenderDishDetail dish= {props.dish} comments={props.comments} />
            
            </div>    
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default DishDetail;
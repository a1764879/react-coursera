import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

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
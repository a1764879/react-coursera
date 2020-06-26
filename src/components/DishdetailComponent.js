import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';
import Moment from 'react-moment';



function RenderDishDetail({dish}){
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
            <RenderComments comments = {dish.comments} />
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
    if(props.selDish != null) {
        return(
            <div className="container">
                <RenderDishDetail dish= {props.selDish} />
            </div>    
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default DishDetail;
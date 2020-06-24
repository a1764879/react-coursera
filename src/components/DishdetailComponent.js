import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);
    }

    renderComments(dish){
        const comment =  dish.comments.map((dcs) => {
            return (
                <ul key = {dcs.id} className="list-unstyled">
                    <li>{dcs.comment}</li>
                    <li>--{dcs.author}</li>
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

    renderDish(dish) {
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
                {this.renderComments(dish)}
                {/* <div className="col-12 col-md-5 m-1">
                    Hello
                </div> */}
            </div>
        )
    }

    render() {
        if(this.props.selDish != null) {
            return(
                <div>
                    {this.renderDish(this.props.selDish)}
                </div>    
            )
        } else {
            return(
                <div></div>
            )
        }
    }
}

export default DishDetail;
import { Component } from 'react';
import './cards.css'

class Cards extends Component {

    componentDidMount() {
        console.log(this.props.monster)
    }

    render() {
        const { name, id, email } = this.props.monster;
        return (
            <div className='card-container' key={id}>
                <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set=set4&size=130x130`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{this.props.monster.phone}</p>
            </div>
        )
    }
};

export default Cards;
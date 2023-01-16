import { Component } from 'react';
import Cards from '../cards/cards';
import './card-list.component.css';

class CardList extends Component {

    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => {

                    return (
                        <Cards monster={monster} />
                    );
                })}
            </div>
        )
    }
};

export default CardList;
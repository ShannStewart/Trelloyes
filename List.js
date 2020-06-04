import React from 'react';
import Card from './Card';

function List(props){
    return(
        <section className= 'List'>
            <header>
                <h3>{props.header}</h3>
            </header>
            <div className= 'List-cards'>
            {props.cards.map((card) =>
                <Card
                    key={card.id}
                    title={card.title}
                    content={card.content}
                />
            )}
            </div>
        </section>
    )
}

export default List;
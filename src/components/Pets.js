import React from 'react';
import {connect} from 'react-redux';

export function Pet(props) {
  console.log(props);
  return (
    <section className="pet">
        <header>
          <h2>{props.pet ? props.pet.name : ''}</h2>
          <img alt={props.pet ? props.pet.imageDescription : ''} src={props.pet ? props.pet.imageURL : ''} />
        </header>
        <main role="main">
          <dl className="description list">
            <dt>Sex: </dt>
            <dd>{props.pet ? props.pet.sex : ''}</dd>
            <dt>Age: </dt>
            <dd>{props.pet ? props.pet.age : ''}</dd>
            <dt>Breed: </dt>
            <dd>{props.pet ? props.pet.breed : ''}</dd>
            <dt>Story: </dt>
            <dd>{props.pet ? props.pet.story : ''}</dd>
          </dl>
          <button onClick={props.onAdoptPet}>Adopt</button>
        </main>
        </section>
  )
}

export default connect()(Pet);

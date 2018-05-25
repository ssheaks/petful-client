import React from 'react';

export default function Pet(props) {
  console.log(props);
  return (
    <section className="pet">
        <header>
          <h2>{props.pet.name}</h2>
          <img alt={props.pet.imageDescription} src={props.pet.imageURL} />
        </header>
        <main role="main">
          <dl className="description list">
            <dt>Sex: </dt>
            <dd>{props.pet.sex}</dd>
            <dt>Age: </dt>
            <dd>{props.pet.age}</dd>
            <dt>Breed: </dt>
            <dd>{props.pet.breed}</dd>
            <dt>Story: </dt>
            <dd>{props.pet.story}</dd>
          </dl>
          <button>Adopt</button>
        </main>
        </section>
  )
}
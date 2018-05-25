import React, {Component} from 'react';
import Pets from './components/Pets';

export default class Dashboard extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        catToAdopt: [{
          imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
        }],
        dogToAdopt: [{
          imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
        }]
      }
    }
  
  render() {
    return (
      <div>
        <Pets pet={this.state.catToAdopt[0]} />
        <Pets pet={this.state.dogToAdopt[0]} />
        {/* <section className="cats">
        <header>
          <h2>{this.state.catToAdopt[0].name}</h2>
          <img alt={this.state.catToAdopt[0].imageDescription} src={this.state.catToAdopt[0].imageURL} />
        </header>
        <main>
          <dl className="description list">
            <dt>Sex: </dt>
            <dd>{this.state.catToAdopt[0].sex}</dd>
            <dt>Age: </dt>
            <dd>{this.state.catToAdopt[0].age}</dd>
            <dt>Breed: </dt>
            <dd>{this.state.catToAdopt[0].breed}</dd>
            <dt>Story: </dt>
            <dd>{this.state.catToAdopt[0].story}</dd>
          </dl>
          <button>Adopt</button>
        </main>
        </section>
        <section className="dogs">
        <header>
          <h2>{this.state.dogToAdopt[0].name}</h2>
          <img alt={this.state.dogToAdopt[0].imageDescription} src={this.state.dogToAdopt[0].imageURL} />
        </header>
        <main>
        <dl className="description list">
          <dt>Sex: </dt>
          <dd>{this.state.dogToAdopt[0].sex}</dd>
          <dt>Age: </dt>
          <dd>{this.state.dogToAdopt[0].age}</dd>
          <dt>Breed: </dt>
          <dd>{this.state.dogToAdopt[0].breed}</dd>
          <dt>Story: </dt>
          <dd>{this.state.dogToAdopt[0].story}</dd>
        </dl>
        <button>Adopt</button>
        </main>
        </section> */}
      </div>
    )
  }
}
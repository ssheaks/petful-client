import React, {Component} from 'react';
import Pets from './components/Pets';
import { fetchCat } from './actions/cat';
import { fetchDog } from './actions/dog';
import { deleteCat } from './actions/cat';
import {deleteDog} from './actions/dog';
import {connect} from 'react-redux';
import './Dashboard.css'

export class Dashboard extends Component {
  // constructor(props) {
  //   super(props) 
  //     this.state = {
  //       catToAdopt: [{
  //         imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  // imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  // name: 'Fluffy',
  // sex: 'Female',
  // age: 2,
  // breed: 'Bengal',
  // story: 'Thrown on the street'
  //       }],
  //       dogToAdopt: [{
  //         imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  // imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  // name: 'Zeus',
  // sex: 'Male',
  // age: 3,
  // breed: 'Golden Retriever',
  // story: 'Owner Passed away'
  //       }]
  //     }
  //   }

    componentDidMount() {
      this.props.dispatch(fetchCat());
      this.props.dispatch(fetchDog());
    }

    // onClickHandler= (type) => {
    //   console.log('clicked');
    //   // if(this.props.cat.data)
    //   if(this.props.cat) {
    //     console.log(this.props.cat.data.type);
    //     this.props.dispatch(deleteCat());
    //     console.log('you adopted a kitty!')
    //   }  else if(this.props.dog.data.type === 'dog') {
    //     console.log(this.props.dog.data.type);
    //     this.props.dispatch(deleteDog());
    //     console.log('you adopted a doggy!')
    //   }
    // }
  
  render() {
    return (
      
      <main role="main">
        <header role="banner">
          <h1>Adopt a Pet!!</h1>
        </header>
        <div className="app">
        <Pets pet={this.props.cat.data} onAdoptPet={() => this.props.dispatch(deleteCat())} type='cat' />
        <Pets pet={this.props.dog.data} onAdoptPet={() => this.props.dispatch(deleteDog())} type='dog' />
        {/* <Pets pet={this.state.catToAdopt[0]} onAdoptPet={this.onClickHandler} />
        <Pets pet={this.state.dogToAdopt[0]} onAdoptPet={this.onClickHandler} /> */}
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
    </main>
    )
  }
}

const mapStateToProps = state => ({
  cat: state.cat,
  dog: state.dog,
  // type: state.data.type
});

export default connect(mapStateToProps)(Dashboard);

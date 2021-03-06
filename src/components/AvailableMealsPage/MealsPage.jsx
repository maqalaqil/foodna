import React, { Component } from 'react';
import MealCard from '../MealCard/MealCard';
import '../meals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
export default class MealsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
    };
  }

  componentDidMount() {
    const unsubscribe = firebase
      .firestore()
      .collection('meals')
      .onSnapshot((snap) => {
        const newMeals = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({
          meals: newMeals,
        });
      });
    return () => unsubscribe();
  }

  render() {
    const { t } = this.props;
    return (
      <div className="available-meals-page">
        <h1 className="available-meals-title text-center">
          {t('AvailableMealsComponent.headline')}
        </h1>
        <p className="available-meals-subtitle text-center">
          {t('AvailableMealsComponent.paragraph')}
        </p>
        <div className="meals-grid">
          {this.state.meals.map((meal) => {
            if (meal.available)
              return (
                <div key={meal.id}>
                  <Link
                    to={`/recieve/${meal.id}`}
                    style={{ textDecoration: 'none', color: '#000' }}
                  >
                    <MealCard
                      img={meal.image}
                      title={meal.title}
                      organization={meal.organization}
                      bgColor={'buttonGreen'}
                    />
                  </Link>
                </div>
              );
          })}
        </div>
      </div>
    );
  }
}

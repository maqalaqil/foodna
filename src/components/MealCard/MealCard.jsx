import React from 'react';
import '../meals.css';
import { useTranslation } from 'react-i18next';
import noImage from '../../noImage.png';
export default function MealCard({ img, title, organization, bgColor }) {
  const { t } = useTranslation();

  return (
    <div className="card cardSize mx-4">
      <div className="image-section">
        <img src={img || noImage} className="card-img" alt="food" />
      </div>
      <div className="card-body">
        <h5 className="card-title ">{title || 'No Tilte Available'}</h5>
        <span className="card-text">
          {organization || 'No Organization Available'}
        </span>
      </div>
      <button type="button" className={`button w-100 ${bgColor}`}>
        {t('AvailableMealsComponent.button')}
      </button>
    </div>
  );
}

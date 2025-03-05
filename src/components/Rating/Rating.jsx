import React, { useState } from 'react';
import styles from './Rating.module.css';

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = ['https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png', 'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png', 'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVxll9NVhmw2gSIobbq6EXjTDkv4rYjxGVA&s]'];
  const ratingLabels = ['Плохо', 'Приемлемо', 'Хорошо', 'Отлично'];

  return (
    <div>
      <h2>Ваш рейтинг: {ratingLabels[ratingValue]}</h2>
      <div>
        <img className={styles.ratingImg} src={ratingList[ratingValue]} alt={ratingLabels[ratingValue]} />
      </div>
      <div>
        {ratingLabels.map((label, index) => (
          <button className={styles.ratingBtn} key={index} onClick={() => setRatingValue(index)}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;

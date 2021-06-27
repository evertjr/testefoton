/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import useRecursiveTimeout from './useRecursiveTimeout.js';
import './styles.css';
import BookCard from '../BookCard';
import { Link } from 'react-router-dom';

const AUTOPLAY_INTERVAL = 3000;

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map(i => (
            <div className="embla__slide" key={i.id}>
              <div className="embla__slide__inner">
                <div>
                  <Link
                    to={{
                      pathname: `/books/${i.volumeInfo.title}`,
                      state: { apiURL: i.selfLink },
                    }}
                  >
                    <BookCard
                      title={i.volumeInfo.title}
                      author={i.volumeInfo.authors[0]}
                      pageCount={i.volumeInfo.pageCount}
                      thumbnail={
                        i.volumeInfo.imageLinks &&
                        i.volumeInfo.imageLinks.smallThumbnail
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

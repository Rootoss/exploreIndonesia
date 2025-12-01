<script setup>
import { statsData } from "@/data/stats.ts";
import { slides } from  "@/data/slides";
const data = statsData;
</script>

<template>
  <section class="secrets">
    <h2 class="secrets__heading">Explore Our Secrets</h2>
    <div class="secrets__slider-wrap">
      <ul class="secrets__slider slider">
        <li
          v-for="(slide, index) in slides"
          :key="index"
          :class="['slider__item', { 'slider__item--desktop': index > 0 }]"
        >
          <picture>
            <source
              :srcset="slide.desktopImage"
              media="(min-width: 1920px)"
              width="405"
              height="257"
            />
            <img
              class="slider__image"
              :src="slide.mobileImage"
              width="314"
              height="200"
              :alt="slide.alt"
            />
          </picture>
        </li>
      </ul>
      <div class="slider__controls">
        <button class="slider__button-control">
          <span class="visually-hidden">Кнопка переключения слайда.</span>
        </button>
        <button class="slider__button-control">
          <span class="visually-hidden">Кнопка переключения слайда.</span>
        </button>
        <button class="slider__button-control">
          <span class="visually-hidden">Кнопка переключения слайда.</span>
        </button>
        <button class="slider__button-control slider__button-control--current">
          <span class="visually-hidden">Кнопка переключения слайда.</span>
        </button>
        <button class="slider__button-control">
          <span class="visually-hidden">Кнопка переключения слайда.</span>
        </button>
      </div>
      <button class="slider__prev">
        <span class="visually-hidden">Предыдущий слайд.</span>
      </button>
      <button class="slider__next">
        <span class="visually-hidden">Следующий слайд.</span>
      </button>
    </div>
    <div class="secrets__stats stats">
      <h3 class="stats__heading">{{ data.heading }}</h3>
      <p class="stats__text" v-html="data.text"></p>
      <ul class="stats__list">
        <li v-for="item in data.items" :key="item.id" class="stats__item">
          <span class="stats__number">{{ item.number }}</span>
          <p class="stats__description">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss">
.secrets {
  padding-top: 35px;
  background-image: url("../images/secrets-bg-mobile.jpg");

  @media (min-width: 1440px) {
    padding-top: 126px;
    background-image: url("../images/secrets-bg-desktop.jpg");
    background-position: 50% 50%;
  }
}

.secrets__heading {
  margin-bottom: 33px;
  font-size: 40px;
  line-height: 46px;
  font-family: "DM Sans", "Arial", sans-serif;
  color: #010a20;
  text-align: center;

  @media (min-width: 1440px) {
    margin-bottom: 43px;
    font-size: 50px;
    line-height: 55px;
  }
}

.secrets__slider-wrap {
  position: relative;
  padding-bottom: 700px;

  @media (min-width: 1440px) {
    padding-bottom: 1044px;
  }

  @media (min-width: 1920px) {
    padding-bottom: 1030px;
  }
}

.secrets__slider {
  @media (min-width: 1440px) {
    display: flex;
    gap: 31px;
    width: 996px;
    margin: 0 auto;
  }

  @media (min-width: 1920px) {
    width: 1285px;
  }
}

.slider__item {
  &--desktop {
    display: none;
  }

  @media (min-width: 1440px) {
    display: block;
  }
}

.slider__prev,
.slider__next {
  position: absolute;
  width: 12px;
  height: 20px;
  border: none;
  background: none;
  background-image: url("../images/arrow-left-mobile.svg");
  background-repeat: no-repeat;
  cursor: pointer;

  @media (min-width: 1440px) {
    width: 15px;
    height: 24px;
    background-image: url("../images/arrow-left-desktop.svg");
  }
}

.slider__prev {
  top: 91px;
  left: 7px;

  @media (min-width: 1440px) {
    left: 140px;
  }

  @media (min-width: 1920px) {
    top: 118px;
    left: 240px;
  }
}

.slider__next {
  top: 91px;
  right: 10px;
  transform: scale(-1);

  @media (min-width: 1440px) {
    right: 133px;
  }

  @media (min-width: 1920px) {
    top: 118px;
    right: 246px;
  }
}

.slider__image {
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}

.slider__controls {
  width: 182px;
  margin: 0 auto;
  margin-top: 16px;

  @media (min-width: 1440px) {
    margin-top: 29px;
    width: 215px;
  }
}

.slider__button-control {
  width: 17px;
  height: 17px;
  margin: 0 7px;
  border: none;
  border-radius: 50%;
  background-color: #85a3b2;
  cursor: pointer;

  &--current {
    width: 44px;
    background-color: #dd2242;
    border-radius: 60px;
  }

  @media (min-width: 1440px) {
    width: 19px;
    height: 19px;
    margin: 0 8px;

    &--current {
      width: 50px;
    }
  }
}

.stats {
  padding: 43px 30px 69px;

  @media (min-width: 1440px) {
    padding: 43px 30px 156px;
  }
}

.stats__heading {
  width: 180px;
  margin: 0 auto;
  margin-bottom: 37px;
  text-align: center;
  font-size: 40px;
  line-height: 46px;
  font-family: "DM Sans", "Arial", sans-serif;
  color: #ffffff;

  @media (min-width: 1440px) {
    width: auto;
    font-size: 60px;
    line-height: 70px;
    margin-bottom: 28px;
  }
}

.stats__text {
  margin-bottom: 61px;
  font-size: 17px;
  line-height: 24px;
  font-family: "DM Sans", "Arial", sans-serif;
  color: #e0e0e0;
  text-align: center;

  @media (min-width: 1440px) {
    width: 490px;
    margin: 0 auto;
    margin-bottom: 60px;
    font-size: 18px;
    line-height: 27px;
  }
}

.stats__list {
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 1440px) {
    flex-direction: row;
    margin: 0 auto;
    width: 1274px;
    gap: 129px;
  }
}

.stats__item {
  margin-bottom: 80px;

  &:nth-child(2) {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    width: 350px;
  }
}

.stats__number {
  display: block;
  margin-bottom: 8px;
  color: #dd2242;
  font-family: "DM Sans", "Arial", sans-serif;
  font-size: 40px;
  line-height: 46px;
  font-weight: 700;
}

.stats__description {
  color: #e0e0e0;
  font-family: "DM Sans", "Arial", sans-serif;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
}
</style>

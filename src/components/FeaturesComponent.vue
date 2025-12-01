<script setup lang="ts">
import { featuresItems } from "../data/features.ts";
</script>

<template>
  <section class="features">
    <h2 class="visually-hidden">Наши преимущества</h2>
    <ul class="features__list">
      <li v-for="item in featuresItems" :key="item.id" class="features__item">
        <picture>
          <source
            :srcset="item.imageDesktop"
            media="(min-width: 1440px)"
            width="630"
            height="460"
          />
          <img
            class="features__image"
            :class="{ 'features__image--second': item.isSecond }"
            :src="item.imageMobile"
            width="314"
            :height="item.isSecond ? 224 : 232"
          />
        </picture>
        <div
          class="features__item-wrap"
          :class="{ 'features__item-wrap--second': item.isSecond }"
        >
          <h3
            class="features__title"
            :class="{ 'features__title--second': item.isSecond }"
          >
            {{ item.title }}
          </h3>
          <p
            class="features__text"
            :class="{ 'features__text--second': item.isSecond }"
            v-html="item.text"
          ></p>
          <a class="features__button button" href="#!">Learn More</a>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.features {
  padding: 40px 30px 48px;
  background-image: url("../images/features-bg-mobile.jpg");

  @media (min-width: 1440px) {
    padding: 207px 246px 267px 200px;
    background-image: url("../images/features-bg-desktop.jpg");
  }

  @media (min-width: 1920px) {
    padding: 207px 300px 267px 340px;
  }
}

.features__list {
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media (min-width: 1920px) {
    gap: 159px;
  }
}

.features__item {
  @media (min-width: 1440px) {
    display: flex;
    gap: 130px;

    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
}

.features__item-wrap {
  display: contents;

  @media (min-width: 1440px) {
    display: block;
    width: 480px;
    padding-top: 58px;

    &--second {
      padding-top: 69px;
    }
  }
}

.features__image {
  margin-bottom: 29px;
  border-radius: 10px;

  &--second {
    margin-bottom: 34px;
  }
}

.features__title {
  width: 300px;
  margin-bottom: 21px;
  font-size: 40px;
  line-height: 46px;
  font-family: "DM Sans", "Arial", sans-serif;
  color: #ffffff;

  &--second {
    margin-bottom: 26px;
  }

  @media (min-width: 1920px) {
    width: auto;
    font-size: 42px;
    line-height: 49px;
  }
}

.features__text {
  margin-bottom: 31px;
  font-size: 17px;
  line-height: 24px;
  font-family: "DM Sans", "Arial", sans-serif;
  color: #e0e0e0;

  &--second {
    margin-bottom: 22px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 73px;
  }
}

.br-mobile {
  display: block;

  @media (min-width: 1920px) {
    display: none;
  }
}

.features__button {
  height: 72px;
  padding: 22px 36px;

  @media (min-width: 1920px) {
    margin: 0;
    width: 180px;
    height: 59px;
    padding: 17px 36px;
  }
}
</style>

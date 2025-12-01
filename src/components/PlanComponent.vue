<script setup> 
import { planItems } from '@/data/plan';
</script>

<template>
  <section class="plan">
    <h2 class="visually-hidden">Наш план</h2>
    <p class="plan__description">Getting there</p>

    <ol class="plan__list">
      <li
        v-for="(item, index) in planItems"
        :key="item.id || index"
        :class="['plan__item', { 'plan__item--second': index === 1 }]"
      >
        <h3
          :class="['plan__heading', { 'plan__heading--second': index === 1 }]"
        >
          {{ item.title }}
        </h3>

        <p
          v-if="item.mobileText"
          :class="[
            'plan__text',
            'plan__text--mobile',
            { 'plan__text--second': index === 1 },
          ]"
        >
          {{ item.mobileText }}<br />
          <a class="plan__link" :href="item.link || '#!'">Show more</a>
        </p>

        <p v-if="item.desktopText" class="plan__text plan__text--desktop">
          {{ item.desktopText }}
        </p>

        <div
          v-if="item.preview && index === 1"
          class="plan__preview-wrap preview"
        >
          <a :href="item.preview.link || '#!'">
            <img
              :src="item.preview.image"
              :width="item.preview.width"
              :height="item.preview.height"
              :alt="item.preview.alt"
            />
          </a>
          <div class="preview__subblock subblock">
            <h4 class="subblock__heading">{{ item.preview.title }}</h4>
            <p class="subblock__text">{{ item.preview.description }}</p>
          </div>
        </div>

        <p
          v-if="item.additionalMobileText && index === 1"
          :class="['plan__text', 'plan__text--mobile', 'plan__text--second']"
        >
          {{ item.additionalMobileText }}<br />
          <a class="plan__link" :href="item.link || '#!'">Show more</a>
        </p>

        <a
          v-if="item.buttonText && index === 2"
          class="button plan__button plan__button--desktop"
          :href="item.buttonLink || '#!'"
        >
          {{ item.buttonText }}
        </a>
      </li>
    </ol>
  </section>
</template>

<style lang="scss">
.plan {
  padding: 30px 30px 81px;
  background-color: #dce8f2;

  @media (min-width: 1440px) {
    padding: 130px 353px 117px;
  }
}

.plan__description {
  margin-bottom: 33px;
  color: #010a20;
  font-size: 40px;
  line-height: 46px;
  font-family: "DM Sans", "Arial", sans-serif;
  font-weight: 700;
  text-align: center;

  @media (min-width: 1440px) {
    margin-bottom: 70px;
    text-align: left;
    margin-left: 36px;
    font-size: 59px;
    line-height: 53px;
  }
}

.plan__list {
  counter-reset: my-counter;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1440px) {
    width: 1100px;
    align-items: start;
    gap: 67px;
  }
}

.plan__item {
  padding-top: 90px;
  position: relative;
  counter-increment: my-counter;
  display: flex;
  align-items: center;
  flex-direction: column;

  &::before {
    content: counter(my-counter);
    position: absolute;
    top: 5%;
    left: 41%;
    width: 56px;
    height: 56px;
    background-color: #dd2242;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5em;
    border-radius: 50%;
    font-size: 27px;
    line-height: 38px;
    font-family: "DM Sans", "Arial", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  @media (min-width: 1440px) {
    padding-top: 0;
    padding-left: 132px;

    &--second {
      margin-top: 28px;
    }

    &::before {
      top: -10px;
      left: 31px;
    }

    &:last-child {
      align-items: start;
    }
  }
}

.plan__heading {
  margin-bottom: 5px;
  font-size: 22px;
  line-height: 150%;
  font-family: "DM Sans", "Arial", sans-serif;
  color: #010a20;
  text-align: center;

  &--second {
    margin-bottom: 14px;
  }

  @media (min-width: 1440px) {
    text-align: left;
    align-self: start;
    font-size: 27px;
    line-height: 41px;
    margin-bottom: 27px;
  }
}

.plan__text {
  font-size: 17px;
  line-height: 24px;
  font-family: "DM Sans", "Arial", sans-serif;
  color: rgba(#151439, 0.4);
  text-align: center;
  text-decoration: none;

  &--second {
    margin-bottom: 33px;
  }

  &--mobile {
    display: block;
  }

  &--desktop {
    display: none;
  }

  @media (min-width: 1440px) {
    &--mobile {
      display: none;
    }

    &--desktop {
      display: block;
      width: 900px;
      text-align: left;
      font-size: 24px;
      line-height: 38px;
    }
  }

  @media (min-width: 1920px) {
    &--desktop {
      width: 1040px;
    }
  }
}

.plan__link {
  text-decoration: none;
  font-size: 17px;
  line-height: 24px;
  font-family: "DM Sans", "Arial", sans-serif;
  color: #dd2242;
}

.plan__preview-wrap {
  margin-bottom: 38px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    inset: 0;
    margin: auto;
    background-image: url("../images/play-white.svg");
  }

  @media (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
    margin-top: 100px;
    width: 1040px;
    gap: 40px;

    img {
      width: 250px;
      height: 166px;
    }

    a {
      display: block;
      margin-right: 6px;
    }

    &::before {
      inset: auto;
      top: 75px;
      left: 120px;
    }
  }
}

.subblock {
  display: none;

  @media (min-width: 1440px) {
    display: block;
  }
}

.subblock__heading {
  margin: 0;
  margin-bottom: 14px;
  width: auto;
  color: #010a20;
  font-size: 27px;
  line-height: 41px;
  font-family: "DM Sans", "Arial", sans-serif;
  font-weight: 700;
}

.subblock__text {
  width: 450px;
  font-size: 23px;
  line-height: 38px;
  color: rgba(#151439, 0.4);
  font-family: "DM Sans", "Arial", sans-serif;
}

.plan__button {
  display: none;

  @media (min-width: 1440px) {
    display: block;
    margin: 0;
    margin-top: 23px;
    width: 210px;
    height: 64px;
    padding: 19px 36px;
  }
}
</style>

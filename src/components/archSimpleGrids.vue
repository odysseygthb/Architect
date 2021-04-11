<template>
  <section id="grid__one" class="grid__one container-y">
    <div class="grid__one_item"></div>
    <div class="grid__one_item"></div>
    <div class="grid__one_item"></div>
  </section>
  <section id="grid__two" class="grid__two container-y">
    <div class="grid__two_item"></div>
    <div class="grid__two_item"></div>
    <div class="grid__two_item"></div>
    <div class="grid__two_item"></div>
  </section>
  <section id="grid__three" class="grid__three container-y">
    <div class="grid__three_item"></div>
    <div class="grid__three_item"></div>
    <div class="grid__three_item"></div>
    <div class="grid__three_item"></div>
    <div class="grid__three_item"></div>
    <div class="grid__three_item"></div>
    <div class="grid__three_item"></div>
    <div class="grid__three_item"></div>
    <div class="grid__three_item"></div>
  </section>
  <section id="grid__four" class="grid__four container-y">
    <div class="grid__four_item"></div>
    <div class="grid__four_item"></div>
    <div class="grid__four_item"></div>
    <div class="grid__four_item"></div>
    <div class="grid__four_item"></div>
    <div class="grid__four_item"></div>
    <div class="grid__four_item"></div>
    <div class="grid__four_item"></div>
    <div class="grid__four_item"></div>
  </section>
  <section id="grid__five" class="grid__five container-y">
    <div class="grid__five_item"></div>
    <div class="grid__five_item"></div>
    <div class="grid__five_item"></div>
    <div class="grid__five_item"></div>
    <div class="grid__five_item"></div>
    <div class="grid__five_item"></div>
    <div class="grid__five_item"></div>
    <div class="grid__five_item"></div>
    <div class="grid__five_item"></div>
  </section>
  <section id="grid__six" class="grid__six container-y">
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
    <div class="grid__six_item"></div>
  </section>
  <section id="grid__w300" class="grid__w300 container-y">
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
    <div class="grid__w300_item"></div>
  </section>
</template>

<script>
export default {
  name: "archSimpleGrids"
}
</script>

<style scoped>
  @media screen and (min-width: 1px) {
    .grid__one {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 500px;
      grid-gap: 50px;
    }

    .container-y {
      width: 90%;
      margin: 100px auto;
    }

    section > div {
      background-color: gray;
    }

    .grid__two {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 500px;
      grid-gap: 50px;
    }

    .grid__three {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 500px;
      grid-gap: 50px;
    }

    .grid__four {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 500px;
      grid-gap: 50px;
    }

    .grid__five {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 500px;
      grid-gap: 50px;
    }

    .grid__six {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 500px;
      grid-gap: 50px;
    }

    .grid__w300 {
      display: grid;
      grid-template-columns: repeat(auto-fit, 300px);
      grid-auto-rows: 400px;
      grid-gap: 50px;
      justify-content: center;
    }

    .d-none {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .grid__one {
      grid-auto-rows: 400px;
    }

    .grid__two {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 400px;
    }

    .grid__three {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 400px;
    }

    .grid__four {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 400px;
    }

    .grid__five {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 400px;
    }

    .grid__six {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 400px;
    }
  }

  @media screen and (min-width: 1025px) {
    .grid__one {
      grid-auto-rows: 300px;
    }

    .grid__two {
      grid-auto-rows: 300px;
    }

    .grid__three {
      grid-auto-rows: 300px;
    }

    .grid__four {
      grid-auto-rows: 300px;
    }

    .grid__five {
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 300px;
    }

    .grid__six {
      grid-template-columns: repeat(6, 1fr);
      grid-auto-rows: 400px;
    }
  }
</style>

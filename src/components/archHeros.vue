<template>
  <section id="hero__first" class="hero__first container-y">
    <div class="hero__first_offer offer">

    </div>
    <div class="hero__first_design design"></div>
  </section>
  <section id="hero__second" class="hero__second container-y">
    <div class="hero__second_offer">
      <div class="herosecond__offer_item offer"></div>
      <div class="herosecond__offer_item offer"></div>
      <div class="herosecond__offer_item offer"></div>
    </div>
    <div class="hero__second_design">
      <div class="herosecond__design_item design"></div>
      <div class="herosecond__design_item design"></div>
      <div class="herosecond__design_item design"></div>
      <div class="herosecond__design_item design"></div>
    </div>
  </section>
  <section id="hero__second_translated" class="hero__second hero__second_translated container-y">
    <div class="hero__second_offer">
      <div class="herosecond__offer_item offer"></div>
      <div class="herosecond__offer_item offer"></div>
      <div class="herosecond__offer_item offer"></div>
    </div>
    <div class="hero__second_design">
      <div class="herosecond__design_item design"></div>
      <div class="herosecond__design_item design"></div>
      <div class="herosecond__design_item design"></div>
      <div class="herosecond__design_item design"></div>
    </div>
  </section>
  <section id="hero__third" class="hero__third container-y">
    <div class="hero__third_offer">
      <div class="herothird__offer_item offer"></div>
      <div class="herothird__offer_wrap">
        <div class="herothird__offer_item offer"></div>
        <div class="herothird__offer_item offer"></div>
      </div>
      <div class="herothird__offer_item offer"></div>
    </div>
    <div class="hero__third_design">
      <div class="herothird__design_item design"></div>
      <div class="herothird__design_item design"></div>
      <div class="herothird__design_item design"></div>
    </div>
  </section>
  <section id="hero__third_translated" class="hero__third hero__third_translated container-y ">
    <div class="hero__third_offer">
      <div class="herothird__offer_item offer"></div>
      <div class="herothird__offer_wrap">
        <div class="herothird__offer_item offer"></div>
        <div class="herothird__offer_item offer"></div>
      </div>
      <div class="herothird__offer_item offer"></div>
    </div>
    <div class="hero__third_design">
      <div class="herothird__design_item design"></div>
      <div class="herothird__design_item design"></div>
      <div class="herothird__design_item design"></div>
    </div>
  </section>
  <section id="hero__fourth" class="hero__fourth">
    <div class="hero__fourth_offer">
      <div class="hero__fourth_offer-wrap">
        <div class="hero__fourth_offer-first offer"></div>
        <div class="hero__fourth_offer-second offer"></div>
      </div>
    </div>
    <div class="hero__fourth_design">
      <div class="hero__fourth_design-wrap">
        <div class="hero__fourth_design-first design"></div>
        <div class="hero__fourth_design-second design"></div>
        <div class="hero__fourth_design-third design"></div>
        <div class="hero__fourth_design-four design"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "archHeros"
}
</script>

<style scoped>
  @media screen and (min-width:1px) {
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    margin: 50px auto 0;
  }

  .logo {
    max-width: 125px;
  }

  .hero__first {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 300px;
    grid-gap: 50px;
    justify-content: center;
  }

  .offer {
    background-color: gray;
  }

  .design {
    background-color: #4e4e4e;
  }

  .hero__second {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
    justify-content: center;
  }

  .hero__second_offer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 75px 150px 75px;
    grid-gap: 25px;
  }

  .hero__second_design {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 135px;
    grid-gap: 25px;
  }

  .hero__second_translated .herosecond__offer_item:nth-child(2) {
    -webkit-transform: translate(0, -15%) scale(1.1);
    -ms-transform:  translate(0, -15%) scale(1.1);
    transform:  translate(0, -15%) scale(1.1);
    position: relative;
    z-index: 2;
    box-shadow: 0 3px 25px rgba(0,0,0,.16);
  }

  .hero__second_translated .herosecond__offer_item:nth-child(3) {
    -webkit-transform: translate(0, -55%);
    -ms-transform:  translate(0, -55%);
    transform:  translate(0, -55%);
    position: relative;
    z-index: 1;
    box-shadow: 0 3px 25px rgba(0,0,0,.16);
  }

  .hero__second_translated .herosecond__design_item:first-child {
    position: relative;
    z-index: 2;
    box-shadow: 0 3px 25px rgba(0,0,0,.16);
  }

  .hero__second_translated .herosecond__design_item:nth-child(2) {
    -webkit-transform: translate(-15%, 3%) rotate(15deg);
    -ms-transform:  translate(-15%, 3%) rotate(15deg);
    transform:  translate(-15%, 3%) rotate(15deg);
    position: relative;
    z-index: 3;
    box-shadow: 0 3px 25px rgba(0,0,0,.16);
  }

  .hero__second_translated .herosecond__design_item:nth-child(3) {
    -webkit-transform: translate(25%, -30%) rotate(15deg);
    -ms-transform:  translate(25%, -30%) rotate(15deg);
    transform:  translate(25%, -30%) rotate(15deg);
    box-shadow: 0 3px 25px rgba(0,0,0,.16);
    position: relative;
    z-index: 1;
  }

  .hero__second_translated .herosecond__design_item:nth-child(4) {
    -webkit-transform: translate(-35%, -30%);
    -ms-transform:  translate(-35%, -30%);
    transform:  translate(-35%, -30%);
    position: relative;
    z-index: 4;
    box-shadow: 0 3px 25px rgba(0,0,0,.16);
  }


  .hero__third {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
    justify-content: center;
  }

  .hero__third_offer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 135px;
    grid-gap: 25px;
  }

  .hero__third_offer > .herothird__offer_item {
    grid-column: span 2;
  }

  .herothird__offer_wrap {
    grid-column: span 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
  }

  .hero__third_design {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 135px;
    justify-content: center;
    grid-gap: 25px;
  }

  .herothird__design_item:first-child {
    grid-column: span 2;
  }

  .hero__third_translated .herothird__offer_item:first-child {
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  .hero__third_translated .herothird__offer_item:nth-child(2) {
    -webkit-transform: translate(-15%, -30%);
    -ms-transform: translate(-15%, -30%);
    transform: translate(-15%, -30%);
    position: relative;
    z-index: 1;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
  }

  .hero__third_translated .herothird__offer_item:last-child {
    -webkit-transform: translate(0, -30%) rotate(15deg);
    -ms-transform: translate(0, -30%) rotate(15deg);
    transform: translate(0, -30%) rotate(15deg);
    position: relative;
    z-index: 1;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
  }

  .hero__third_translated .herothird__design_item:nth-child(2){
    -webkit-transform: translate(45%, 5%);
    -ms-transform: translate(45%, 5%);
    transform: translate(45%, 5%);
  }

  .hero__third_translated .herothird__design_item:nth-child(3){
    -webkit-transform: translate(5%, -30%);
    -ms-transform: translate(5%, -30%);
    transform: translate(5%, -30%);
    position: relative;
    z-index: 1;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
  }

  .hero__fourth {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 250px 450px 450px 250px;
  }

  .hero__fourth_offer {
    grid-column: span 2;
    grid-row: span 2;
  }

  .hero__fourth_offer-wrap {
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    grid-template-rows: 15% 35% 35% 15%;
    width: 100%;
    height: 100%;
  }

  .hero__fourth_offer-first {
    grid-column: span 3;
    grid-row: span 2;
  }

  .hero__fourth_offer-second {
    grid-column: 3;
    grid-row: 3;
    height: 75%;
    align-self: end;
  }

  .hero__fourth_design {
    grid-column: 1 / 3;
    grid-row: 3 / 5;
  }

  .hero__fourth_design-wrap {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 1.5fr 1.5fr 1fr;
  }

  .hero__fourth_design-first {
    grid-column: 1;
    grid-row: 1;
  }

  .hero__fourth_design-second {
    grid-column: 2;
    grid-row: 2;
  }

  .hero__fourth_design-third {
    grid-column: 1;
    grid-row: 3;
  }

  .hero__fourth_design-four {
    grid-column: 2;
    grid-row: 4;
  }

  .container-y {
    width: 90%;
    margin: 100px auto;
    max-width: 1500px;
  }

  .d-none {
    display: none;
  }

  section {
    margin: 100px 0;
  }

}
  @media screen and (min-width:1025px) {
    .hero__first {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 500px;
      grid-gap: 200px;
      height: 700px;
      align-content: center;
    }

    .hero__second {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 200px;
      height: 700px;
      align-content: center;
    }

    .hero__second_offer {
      grid-template-rows: 150px 300px 150px;
    }

    .hero__second_design {
      grid-auto-rows: 200px;
      align-content: center;
    }

    .hero__third {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 500px;
      grid-gap: 200px;
      height: 700px;
      align-content: center;
    }

    .hero__third_design,
    .hero__third_offer {
      grid-auto-rows: 150px;
      align-content: center;
    }

    .hero__fourth {
      grid-template-columns: 1fr 3fr 4.5fr 3fr 4.5fr 2fr;
      grid-template-rows: 200px 350px 350px 200px;
    }

    .hero__fourth_offer {
      grid-column: auto;
      grid-row: auto;
    }

    .hero__fourth_offer {
      grid-column: 1 / 4;
      grid-row: 1 / 5;
    }

    .hero__fourth_offer-second {
      height: 50%;
    }

    .hero__fourth_design {
      grid-column: 5 / 7;
      grid-row: 1 / 5;
    }

  }
</style>

<template>
  <div class="banner">
    <div class="logo">
      <NuxtLink to="/about">
        <img src="/logo-white.svg" alt="Meme Cake" />
      </NuxtLink>
    </div>
    <div class="contents">
      <span class="caption"
        >Degen Ape #8069 <span class="title">Degenerate Ape Academy</span></span
      >
    </div>
    <img class="banner_image" src="/banner.jfif" alt="Degenerate Ape Academy" />
  </div>
</template>
<style scoped>
.logo {
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 2;
}
.banner {
  display: block;
  position: relative;
  height: calc(100vh - 30px);
}
.contents {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 52%,
    rgba(0, 0, 0, 0.32) 85%,
    rgba(0, 0, 0, 0.46) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 52%,
    rgba(0, 0, 0, 0.32) 85%,
    rgba(0, 0, 0, 0.46) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 52%,
    rgba(0, 0, 0, 0.32) 85%,
    rgba(0, 0, 0, 0.46) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#75000000',GradientType=0 ); /* IE6-9 */
}
.caption {
  position: absolute;
  right: 30px;
  left: 30px;
  bottom: 40px;
  text-align: center;
  color: #fff;
  font-weight: bold;
}
.title {
  background: linear-gradient(90deg, #8a217e 0%, #f85754 50%, #fbb238 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.banner_image {
  height: 100%;
  align-self: center;
}
</style>

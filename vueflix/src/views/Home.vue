<template>
  <div class="home-body">
    <Hero>
      <Header />
      <Landing />
    </Hero>
    <div class="showcases">
      <Showcase
        v-for="showcase in showcases"
        :key="showcase.id"
        :title="showcase.title"
        :subtitle="showcase.subtitle"
        :position="showcase.position"
        :image="showcase.image"
      />
    </div>
    <FAQ />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Home/Hero.vue';
import Header from '@/components/Home/Header.vue';
import Landing from '@/components/Home/Landing.vue';
import Showcase from '@/components/Home/Showcase.vue';
import FAQ from '@/components/Home/FAQ.vue';
import Footer from '@/components/Home/Footer.vue';
export default {
  components: { Hero, Landing, Header, Showcase, FAQ, Footer },
  data() {
    return {
      showcases: [
        {
          id: 1,
          title: 'Enjoy on your TV.',
          subtitle:
            'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
          position: 'left',
          image:
            'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
        },
        {
          id: 2,
          title: 'Download your shows to watch offline.',
          subtitle:
            'Save your favourites easily and always have something to watch.',
          position: 'right',
          image:
            'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
        },
        {
          id: 3,
          title: 'Watch everywhere.',
          subtitle:
            'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
          position: 'left',
          image:
            'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png',
        },
        {
          id: 4,
          title: 'Create profiles for children.',
          subtitle:
            'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
          position: 'right',
          image:
            'https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf',
        },
      ],
    };
  },
};
</script>

<style scoped>
.showcases {
  background-color: black;
}
</style>

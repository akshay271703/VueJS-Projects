<template>
  <v-expansion-panels focusable class="pb-15 panels">
    <v-expansion-panel v-for="item in items" :key="item.id" class="mt-2">
      <v-expansion-panel-header color="#303030" class="pa-5 drop-header">{{
        item.title
      }}</v-expansion-panel-header>
      <v-expansion-panel-content color="#303030">
        <p class="py-5 mb-0">
          {{ item.subtitle }}
        </p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'What is VueFlix ?',
          subtitle:
            'VueFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.',
        },
        {
          id: 2,
          title: 'How much does VueFlix costs ?',
          subtitle:
            'Watch VueFlix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.',
        },
        {
          id: 3,
          title: 'Where can i watch ?',
          subtitle:
            'Watch anywhere, anytime. Sign in with your VueFlix account to watch instantly on the web at vueflix.com from your personal computer or on any internet-connected device that offers the VueFlix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
        },
        {
          id: 4,
          title: 'How do i cancel ?',
          subtitle:
            'VueFlix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
        },
        {
          id: 5,
          title: 'What can I watch on VueFlix',
          subtitle:
            'VueFlix has an extensive library of feature films, documentaries, TV shows, anime, award-winning VueFlix originals, and more. Watch as much as you want, anytime you want.',
        },
        {
          id: 6,
          title: 'Is VueFlix good for kids ? ',
          subtitle:
            'The VueFlix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.panels * {
  color: white;
}
.drop-header {
  font-size: 22px;
}
@media (max-width: 600px) {
  .drop-header {
    font-size: 18px;
  }
}
</style>

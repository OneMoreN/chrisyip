<template>
  <div class="aboutme d-flex">
    <div class="intro">
      <h2 class="heading">About Me</h2>
      <p>
        Hello again! My name is Christopher Yip and I enjoy coding, cooking and
        playing board games (my current board games of choice are
        <a
          href="https://boardgamegeek.com/boardgame/13/catan"
          target="_blank"
          rel="noopener noreferrer"
          >Catan</a
        >
        and
        <a
          href="https://boardgamegeek.com/boardgame/156129/deception-murder-hong-kong"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deception</a
        >). I first discovered web development in high school when I wrote my
        first HTML/CSS website on Notepad.
      </p>
      <p>
        Since my first website, I have graduated with a Bachelor's degree in
        Information and Communications Technology from Western Sydney University
        where I futher developed my skills and interest in software development.
        I currently work as a Software Developer at <a class="open-modal" @click="openModal">Americold Logistics</a>,
        primarily working on updating/maintaining their in-house Warehouse
        Management System.
      </p>

      <div class="skills-container">
        <div v-for="skill in skills" class="skill" :key="skill">
          {{skill}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        'Laravel',
        'PHP',
        'SASS',
        'WordPress',
        'JavaScript',
        'Vue.js',
        'IBM Db2',
        'IBM iSeries',
        'LANSA RDML'
      ]
    }
  },
  props: ['openModal']
}
</script>

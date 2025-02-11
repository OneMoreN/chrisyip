<template>
  <div class="aboutme d-flex">
    <div class="intro" data-aos="zoom-in-up">
      <h2 class="heading">About Me</h2>
      <p>
        Hello again! My name is Christopher Yip and I enjoy coding, cooking and
        board games night (my current board games of choice are
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
        >). I first discovered software development in high school, where I wrote my
        first website using HTML/CSS on Notepad. Being satisfied with the process of
        coding the website I have decided to begin my journey to become a Software Developer.
      </p>
      <p>
        Since developing my first website, I have graduated with a Bachelor's degree in
        Information and Communications Technology from Western Sydney University
        where I futher developed my skills and interest in software development.
        I currently work as a Software Consulting Engineer at <a class="open-modal" @click="openModal">Cisco</a>,
        primarily working on network automation.
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
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data () {
    return {
      skills: [
        'Python',
        'JavaScript',
        'Jenkins',
        'Networking',
        'Automation',
        'CI/CD',
        'CCNA',
        'Cisco DevNet'
      ]
    }
  },
  props: ['openModal'],
  created () {
    AOS.init()
  }
}
</script>

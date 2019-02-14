<template lang="html">
  <div id="main">
    <div class = "day"
      v-for = "(day, dayIndex) in computedLessons"
      :key = "dayIndex"
        >
      <div
        class = "lesson"
        v-for = "(lesson, lessonIndex) in day"
        :key = "lessonIndex"
        :style = "{ left: lesson.left, width: lesson.width, backgroundColor: lesson.color }"
          >
        <div class = "teacher">
          {{ lesson.ucitel }}
        </div>
        <div class = "subject">
          {{ lesson.predmet }}
        </div>
        <div class = "room">
          {{ lesson.mistnost }}
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="js">
import schoolLessons from '../assets/default.json'
const moment = require('moment')
export default {
  name: 'ViewTimeTable',
  computed: {
    computedLessons: function () {
      const HOURS = ['07:00:00', '07:45:00', '07:55:00', '08:40:00', '08:50:00', '09:35:00', '09:50:00', '10:35:00', '10:45:00', '11:30:00', '12:00:00', '12:45:00', '12:55:00', '13:40:00', '13:50:00', '14:35:00']
      const COLORS = {
        'M': '#FC2847',
        'A': '#1DACD6',
        'Č': '#C5E384',
        'N': '#FF7538',
        'D': '#B4674D',
        'Z': '#1F75FE',
        'F': '#7366BD',
        'Sv': '#FCE883',
        'Bi': '#1CAC78'
      }
      for (let dayIndex in schoolLessons) {
        let day = schoolLessons[dayIndex]
        for (let lessonIndex in day) {
          let lesson = day[lessonIndex]
          lesson.start = HOURS[ parseInt(lessonIndex) * 2 ]
          lesson.end = HOURS[ parseInt(lessonIndex) * 2 + 1 ]
          lesson.left = this.pos(lesson.start) + 'px'
          lesson.width = parseFloat(this.pos(lesson.end)) - parseFloat(lesson.left) + 'px'
          lesson.color = COLORS[lesson.predmet]
        }
      }
      return schoolLessons.map(lesson => lesson.filter(function (value, index, arr) {
        return value.predmet !== ' '
      }))
    }
  },
  methods: {
    pos: function (param) {
      let lessonStart = moment(param, 'HH:mm:ss')
      const dayStart = moment('07:00:00', 'HH:mm:ss')
      const dayEnd = moment('14:35:00', 'HH:mm:ss')
      const width = window.innerWidth > 720 ? window.innerWidth : 720
      let pos = (lessonStart.toDate().getTime() - dayStart.toDate().getTime()) / (dayEnd.toDate().getTime() - dayStart.toDate().getTime()) * width
      return pos
    }
  }
}
</script>

<style scoped lang="css">
.teacher {
  text-align: left;
}

.subject {
  text-align: center;
}

.room {
  text-align: right;
}

.lesson {
  float: left;
  border: 1px solid #000000;
  position: absolute;
  border-radius: 10px;
}

.day {
  border-collapse: collapse;
  border-spacing: 0;
  float: left;
  min-width: 720px;
  width: 100vw;
  height: 56px;
  position: relative;
}

#main {
  width: 100vw;
  overflow: auto;
}
</style>

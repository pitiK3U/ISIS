<template lang="html">
  <table>
    <thead>
      <td v-for = "(key, keyIndex) in head"
          v-bind:key = "keyIndex">
        {{ key }}
      </td>
    </thead>
    <tbody>
        <tr v-for = "(day, dayIndex) in bodyData"
            v-bind:key = "dayIndex">
            <td v-for ="(hour, hourIndex) in day"
                v-if = "(JSON.stringify(hour) != JSON.stringify(day[hourIndex-1])) == (JSON.stringify(hour) != JSON.stringify(day[hourIndex+1]))"
                v-bind:key = "hourIndex"
                 >
              <div class = "teacher">
                {{ hour.ucitel }}
              </div>
              <div class = "subject">
                {{ hour.predmet }}
              </div>
              <div class = "room">
                {{ hour.mistnost }}
              </div>
            </td>
            <td v-else-if="JSON.stringify(hour) != JSON.stringify(day[hourIndex+1])" colspan="2">
              <div class = "teacher">
                {{ hour.ucitel }}
              </div>
              <div class = "subject">
                {{ hour.predmet }}
              </div>
              <div class = "room">
                {{ hour.mistnost }}
              </div>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script lang="js">
import SchoolHours from '../assets/default.json'
export default {
  name: 'PageTimeTable',
  data: function () {
    let maxHour = 0
    for (let day of SchoolHours) {
      if (day.length > length) maxHour = day.length
    }

    let array = ['0.', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.']
    array.length = maxHour

    return {
      test: JSON.stringify(SchoolHours[0][4]) === JSON.stringify(SchoolHours[0][5]),
      head: array,
      bodyData: SchoolHours
    }
  }
  /* methods: {
    isObject: function (o) {
      return typeof o === 'object'
    }
  } */
}
</script>

<style scoped lang="css">
  .teacher{
    text-align: left;
  }

  .subject{
    text-align: center;
  }

  .room{
    text-align: right;
  }

  table{
    border-collapse: collapse;
    border-spacing: 0;
  }

  tbody{
    position: relative;
  }

  td, th {
    border: 1px solid #CCC;
    width: 100px;
    height: 100px;
  }

  td {
    border-left-color: black;
    border-right-color: black;
  }

  thead {
    background-color: #ebebeb;
  }

</style>

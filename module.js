const $ = require('jquery')

module.exports = function (data) {
  return {
    renderStatus: function (domNode) {
      const clock = $('<span class="smm-clock-time"></span>')
      const hour = $('<span></span>')
      const minute = $('<span></span>')
      clock.append(hour)
      clock.append('<span class="smm-clock-blink">:</span>')
      clock.append(minute)
      const date = $('<span class="smm-clock-date"></span>')

      const container = $('<div class="smm-clock-container"></div>')
      container.append(clock)
      container.append('<br>')
      container.append(date)
      container.appendTo(domNode)

      const update = () => {
        var curDate = new Date()
        let curHours = curDate.getHours() + ''
        let curMinutes = curDate.getMinutes() + ''
        if (curHours.length === 1)
          curHours = '0' + curHours
        if (curMinutes.length === 1)
          curMinutes = '0' + curMinutes
        hour.text(curHours)
        minute.text(curMinutes)
        let curDay = curDate.getDate() + ''
        if (curDay.length === 1)
          curDay = '0' + curDay
        let curMonth = (curDate.getMonth()+1) + ''
        if (curMonth.length === 1)
          curMonth = '0' + curMonth
        date.text(curDay + '.' + curMonth + '.' + curDate.getFullYear())
      }
      update();

      const timer = setInterval(update, 60000)
    }
  }
}

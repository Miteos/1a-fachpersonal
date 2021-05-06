import AOS from 'aos'

import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: function () {
      const maxWidth = 1024
      return window.innerWidth < maxWidth
    },
  }) // eslint-disable-line new-cap
}

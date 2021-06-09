import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({
      disable: function () {
        const maxWidth = 1024
        return window.innerWidth < maxWidth
      },
    })
  },
}

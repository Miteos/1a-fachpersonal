import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  async mounted() {
    import('aos').then((AOS) => AOS.init())
  },
}

// Styles
import '@/styles/variables.scss'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  defaults: {
    VAppBar: {
      flat: true,
    },
    VBtn: {
      color: 'primary',
      height: 44,
      rounded: 'sm',
    },
    VSheet: {
      color: '#212121',
    },
  },
  theme: {
    defaultTheme: 'dark',
  },
})

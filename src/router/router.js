import { createMemoryHistory, createRouter } from 'vue-router'
import FirstPage from '../pages/FirstPage.vue'
import SecondPage from '../pages/SecondPage.vue'
import ThirdPage from '../pages/ThirdPage.vue'
import ForthPage from '../pages/ForthPage.vue'
import FifthPage from '../pages/FifthPage.vue'
import SixthPage from '../pages/SixthPage.vue'
import SeventhPage from '../pages/SeventhPage.vue'
import EventsAndEmissions from '../pages/ComponentsTabs/EventsAndEmissions.vue'
import Slots from '../pages/ComponentsTabs/Slots.vue'
import DynamicComponents from '../pages/ComponentsTabs/DynamicComponents.vue'
import ComponentRegistration from '../pages/ComponentsTabs/ComponentRegistration.vue'
import Props from '../pages/ComponentsTabs/Props.vue'

const routes = [
  { path: '/first-page', component: FirstPage },
  { path: '/second-page', component: SecondPage },
  { path: '/third-page', component: ThirdPage },
  { path: '/forth-page', component: ForthPage },
  { path: '/fifth-page', component: FifthPage },
  { path: '/sixth-page', component: SixthPage },
  { 
    path: '/components',
    component: SeventhPage,
    children: [
        { path: 'events-and-emissions', component: EventsAndEmissions },
        { path: 'slots', component: Slots },
        { path: 'dynamic-components', component: DynamicComponents },
        { path: 'component-registration', component: ComponentRegistration },
        { path: 'props', component: Props }, 
    ]
  },
]
    
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
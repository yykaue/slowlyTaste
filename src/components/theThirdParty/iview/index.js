import {
  Rate,
  Poptip,
  Page,
  Button,
  Table,
  Menu,
  Row,
  Col,
  Icon,
  Input,
  InputNumber,
  Select,
  Option,
  MenuItem,
  MenuGroup,
  Submenu,
  Radio,
  RadioGroup,
  Modal
} from 'iview'

const iview = {
  install: function (Vue) {
    Vue.component('Rate', Rate)
    Vue.component('Poptip', Poptip)
    Vue.component('Page', Page)
    Vue.component('Button', Button)
    Vue.component('Table', Table)
    Vue.component('Menu', Menu)
    Vue.component('Submenu', Submenu)
    Vue.component('MenuGroup', MenuGroup)
    Vue.component('MenuItem', MenuItem)
    Vue.component('Row', Row)
    Vue.component('Col', Col)
    Vue.component('Icon', Icon)
    Vue.component('Input', Input)
    Vue.component('InputNumber', InputNumber)
    Vue.component('Select', Select)
    Vue.component('Option', Option)
    Vue.component('Radio', Radio)
    Vue.component('RadioGroup', RadioGroup)
    Vue.component('Modal', Modal)
  }
}

export default iview

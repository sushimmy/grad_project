import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilEnvelopeOpen,
  cilGrid,
  cilHappy,
  cilLayers,
  cilMap,
  cilMenu,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

const _nav = [
  {
    component: CNavItem,
    name: 'Map Screen',
    to: '/dashboard',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Write Posts',
    to: '/theme/colors',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Community Board',
    to: '/theme/typography',
    icon: <CIcon icon={cilMenu} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'My Page',
    to: '/base/accordion',
    icon: <CIcon icon={cilHappy} customClassName="nav-icon" />,
  },
]

export default _nav

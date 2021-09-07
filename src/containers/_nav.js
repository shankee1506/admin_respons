import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
    
    
  },
 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Inventory',
    route: '/pages/Inventory',
    icon: 'cil-notes',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Stocks',
        to: '/pages/Inventory/Stocks',
      }

     
    ]
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Accounting',
    route: '/pages/Accounting',
    icon: 'cil-chart-pie',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Analytics',
        to: '/pages/Accounting/Analytics',
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'Reports',
        to: '/pages/Accounting/Reports',
      }
    ]
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Purchase',
    route: '/pages/Purchase',
    icon: 'cil-basket',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase1',
        to: '/pages/Purchase/Purchase1',
      }

     
    ]
  },


  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sales',
    route: '/pages/Sales',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Details',
        to: '/pages/Sales/Details',
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'Receipts',
        to: '/pages/Sales/Receipts',
      }
    ]
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Producttree',
    route: '/pages/Producttree',
    icon: 'cil-calculator',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Tree',
        to: '/pages/Producttree/Tree',
      }
    ]
  }

  

      
      
 
]

export default _nav

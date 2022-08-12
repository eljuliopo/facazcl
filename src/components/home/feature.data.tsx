import React, { ReactNode } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Dirección Casa Matriz',
    description: 'Avda. Manso de Velasco #499, Curicó',
    icon: <LocationOnIcon />,
  },
  {
    title: 'Teléfono',
    description: '+56 75 2 530104',
    icon: <LocalPhoneIcon />,
  },
  {
    title: 'Correo electrónico',
    description: 'fidel.facaz@gmail.com',
    icon: <MailIcon />,
  },
]

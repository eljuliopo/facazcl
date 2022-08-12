import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}


const Logo: FC<Props> = ({ onClick, variant }) => {
  return ( 
    <Box onClick={onClick}>
      <img src="/images/logofacazred.png" width={150} alt="Logo Facaz" />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo

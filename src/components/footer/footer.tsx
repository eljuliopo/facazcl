import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6 }, color: 'primary.contrastText' }}
    >
      <Container>
            <Box sx={{ width: { xs: '100%' }, mb: { xs: 3, md: 0 }, textAlign: 'center' }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                <img src="/images/logofacaz.png" alt="Logo Facaz" />
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Facaz Ltda. Empresa Chilena 2022
              </Typography>
              <FooterSocialLinks />
            </Box>
      </Container>
    </Box>
  )
}

export default Footer

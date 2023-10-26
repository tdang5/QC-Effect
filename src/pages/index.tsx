import { Box, Grid } from '@mui/material'
import { Header, Main } from '../styles/Index.Styles'
import Contact from '../components/Contact/Contact'


export default function Home() {

  return (
    <>
      <Main>
        <Header>
          World-Class Special Effects
        </Header>
        <Grid container justifyContent='center' spacing={20}>
          <Grid item>
            <Box sx={{ border: 'solid 1px black' }}>
              I need Content
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ border: 'solid 1px black' }}>
              I need a space
            </Box>
          </Grid>
        </Grid>
      </Main>
      <Contact />
    </>
  )
}

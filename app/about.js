import { Box, Typography } from '@mui/material'

export default function About() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      gap={2}
    >
      <Typography variant={'h2'} color={'#333'} textAlign={'center'}>
        About Inventory Tracker
      </Typography>
      <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
        This is an application to manage your inventory efficiently.
      </Typography>
    </Box>
  )
}
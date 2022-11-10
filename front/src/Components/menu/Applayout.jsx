import React, { memo, useState } from "react"
import { AppBar, Toolbar, Box, IconButton, ListItemIcon } from '@material-ui/core'
import { More } from 'mdi-material-ui'
import AppRoutes from "./AppRoutes"
import MenuBurger from "./MenuBurger"

const Applayout = memo(() => {

  const mobileMenuId = 'primary-search-account-menu-mobile'

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuBurger />
          <typographyClasses
            variant="h6"
            // noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </typographyClasses>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <ListItemIcon><More /></ListItemIcon>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        <AppRoutes />
      </main>
    </Box>
  )
})

export default Applayout

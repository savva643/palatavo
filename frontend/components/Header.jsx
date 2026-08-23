'use client';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, TextField, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import VisionImpairedToggle from './VisionImpairedToggle';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'О палате', href: '/about' },
    { label: 'Деятельность', href: '/activities' },
    { label: 'Муниципальные палаты', href: '/municipal' },
    { label: 'Новости', href: '/news' },
    { label: 'Анонсы', href: '/announcements' },
    { label: 'Штаб наблюдения', href: '/observation' },
    { label: 'Контакты', href: '/contacts' },
    { label: 'Интернет-приемная', href: '/feedback' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMobileOpen(open);
  };

  const titleText = 'Общественная палата Владимирской области';
  const shortTitle = 'Палата Владимира';

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          sx={{ mr: 1, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography 
          variant="h6" 
          component={Link}
          href="/"
          sx={{ 
            flexGrow: 1,
            fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem', lg: '1.25rem' },
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: 'white',
            textDecoration: 'none',
            mr: 2
          }}
        >
          {titleText}
        </Typography>

        <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.5, alignItems: 'center', flexGrow: 0 }}>
          {navItems.map((item) => (
            <Button
              key={item.href}
              color="inherit"
              component={Link}
              href={item.href}
              sx={{ 
                color: 'white', 
                textTransform: 'none',
                fontSize: '0.8rem',
                px: 0.5,
                py: 0.5
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <form onSubmit={handleSearch}>
              <TextField
                size="small"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 1,
                  width: { sm: 100, md: 120, lg: 150 },
                  '& .MuiInputBase-root': { height: 32 },
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton type="submit" size="small" sx={{ p: 0.5 }}>
                      <SearchIcon fontSize="small" />
                    </IconButton>
                  ),
                }}
              />
            </form>
          </Box>
          <VisionImpairedToggle />
        </Box>
      </Toolbar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { md: 'none' } }}
      >
        <Box sx={{ width: 280, role: 'presentation' }}>
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Меню</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem 
                key={item.href} 
                button 
                component={Link}
                href={item.href}
                onClick={toggleDrawer(false)}
                sx={{ 
                  py: 1.5,
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                  }
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <form onSubmit={handleSearch}>
              <TextField
                fullWidth
                size="small"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 1,
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton type="submit" size="small" sx={{ p: 0.5 }}>
                      <SearchIcon fontSize="small" />
                    </IconButton>
                  ),
                }}
              />
            </form>
          </Box>
          <Box sx={{ p: 2 }}>
            <VisionImpairedToggle />
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

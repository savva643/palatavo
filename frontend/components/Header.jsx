'use client';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, TextField, Drawer, List, ListItem, ListItemText, Divider, Fade, Paper, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import VisionImpairedToggle from './VisionImpairedToggle';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../app/AppLayout';

export default function Header() {
  const { theme, toggleTheme, isRedTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const [aboutAnchor, setAboutAnchor] = useState(null);
  const [activitiesAnchor, setActivitiesAnchor] = useState(null);
  const [newsAnchor, setNewsAnchor] = useState(null);
  const [contactsAnchor, setContactsAnchor] = useState(null);

  const handleSearchClick = () => {
    setSearchOpen(true);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100);
  };

  const handleSearchBlur = () => {
    if (!searchQuery.trim()) {
      setSearchOpen(false);
    }
  };

  const navItems = [
    { label: 'Главная', href: '/' },
  ];

  const aboutMenuItems = [
    { label: 'О палате', href: '/about' },
    { label: 'Члены палаты', href: '/members' },
    { label: 'Комиссии', href: '/commissions' },
  ];

  const activitiesMenuItems = [
    { label: 'Деятельность', href: '/activities' },
    { label: 'Проекты', href: '/projects' },
    { label: 'Документы', href: '/documents' },
    { label: 'Штаб наблюдения', href: '/observation' },
  ];

  const newsMenuItems = [
    { label: 'Новости', href: '/news' },
    { label: 'Анонсы', href: '/announcements' },
  ];

  const contactsMenuItems = [
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

  const titleText = 'Общественная палата';
  const subtitleText = 'Владимирской области';

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.primary, transition: 'background-color 0.3s ease' }}>
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
        
        <Box
          component={Link}
          href="/"
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            mr: 2
          }}
        >
          <Box 
            component="img"
            src="/logo.png" 
            alt="Общественная палата Владимирской области"
            sx={{ 
              width: { xs: 50, sm: 60, md: 70, lg: 80 },
              height: 'auto',
              objectFit: 'contain'
            }}
          />
          <Box sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="h6" sx={{ color: 'white', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, fontWeight: 500, lineHeight: 1.2 }}>
              {titleText}
            </Typography>
            <Typography variant="caption" sx={{ color: 'white', fontSize: { xs: '0.7rem', sm: '0.8rem' }, opacity: 0.9 }}>
              {subtitleText}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center', flexGrow: 0 }}>
          {navItems.map((item) => (
            <Button
              key={item.href}
              color="inherit"
              component={Link}
              href={item.href}
              sx={{ 
                color: 'white', 
                textTransform: 'none',
                fontSize: '0.85rem',
                px: 1,
                py: 0.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            color="inherit"
            onClick={(e) => setAboutAnchor(e.currentTarget)}
            sx={{ 
              color: 'white', 
              textTransform: 'none',
              fontSize: '0.85rem',
              px: 1,
              py: 0.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            О палате
          </Button>
          <Menu
            anchorEl={aboutAnchor}
            open={Boolean(aboutAnchor)}
            onClose={() => setAboutAnchor(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{ mt: 1 }}
          >
            {aboutMenuItems.map((item) => (
              <MenuItem
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setAboutAnchor(null)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          <Button
            color="inherit"
            onClick={(e) => setActivitiesAnchor(e.currentTarget)}
            sx={{ 
              color: 'white', 
              textTransform: 'none',
              fontSize: '0.85rem',
              px: 1,
              py: 0.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Деятельность
          </Button>
          <Menu
            anchorEl={activitiesAnchor}
            open={Boolean(activitiesAnchor)}
            onClose={() => setActivitiesAnchor(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{ mt: 1 }}
          >
            {activitiesMenuItems.map((item) => (
              <MenuItem
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setActivitiesAnchor(null)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          <Button
            color="inherit"
            onClick={(e) => setNewsAnchor(e.currentTarget)}
            sx={{ 
              color: 'white', 
              textTransform: 'none',
              fontSize: '0.85rem',
              px: 1,
              py: 0.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Новости
          </Button>
          <Menu
            anchorEl={newsAnchor}
            open={Boolean(newsAnchor)}
            onClose={() => setNewsAnchor(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{ mt: 1 }}
          >
            {newsMenuItems.map((item) => (
              <MenuItem
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setNewsAnchor(null)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          <Button
            color="inherit"
            onClick={(e) => setContactsAnchor(e.currentTarget)}
            sx={{ 
              color: 'white', 
              textTransform: 'none',
              fontSize: '0.85rem',
              px: 1,
              py: 0.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Контакты
          </Button>
          <Menu
            anchorEl={contactsAnchor}
            open={Boolean(contactsAnchor)}
            onClose={() => setContactsAnchor(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{ mt: 1 }}
          >
            {contactsMenuItems.map((item) => (
              <MenuItem
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setContactsAnchor(null)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto', pr: 2 }}>
          <Fade in={searchOpen}>
            <Box sx={{ display: searchOpen ? 'block' : 'none' }}>
              <form onSubmit={handleSearch}>
                <TextField
                  inputRef={searchInputRef}
                  size="small"
                  placeholder="Поиск"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={handleSearchBlur}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 1,
                    width: { xs: 120, sm: 150, md: 200 },
                    '& .MuiInputBase-root': { height: 36 },
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
          </Fade>
          <IconButton
            color="inherit"
            onClick={handleSearchClick}
            sx={{ display: searchOpen ? 'none' : 'flex' }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{ 
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 1,
              px: 1,
              fontSize: '0.75rem'
            }}
          >
            {isRedTheme ? '🔵' : '🔴'}
          </IconButton>
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

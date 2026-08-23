'use client';
import { Box, ImageList, ImageListItem, Dialog, DialogContent, IconButton } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Gallery({ images }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body1">Нет изображений</Typography>
      </Box>
    );
  }

  const handleClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
        {images.map((image) => (
          <ImageListItem key={image.id} onClick={() => handleClick(image)} sx={{ cursor: 'pointer' }}>
            <img
              src={image.url}
              alt={image.alt || 'Gallery image'}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage.url}
              alt={selectedImage.alt || 'Gallery image'}
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

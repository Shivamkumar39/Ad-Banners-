import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ id, title, description, cta, image, background, onEdit }) => {
  return (
    <Card style={{ background }} className="m-4 p-4 rounded-lg shadow-lg w-full max-w-xl mx-auto">
      <CardMedia component="img" alt={title} height="200" image={image} className="rounded-t-lg" />
      <CardContent className="flex flex-col items-center text-center">
        <Typography variant="h5" className="mb-2">{title}</Typography>
        <Typography variant="body2" color="textSecondary" className="mb-4">{description}</Typography>
        <Button variant="contained" color="primary" className="mb-2">{cta}</Button>
        <IconButton onClick={() => onEdit(id)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default BannerImageComp;

import { Box } from '@mui/material';
import { useState } from 'react';
import { productDetailStyles } from '../../pages/ProductDetail.styles';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <Box sx={productDetailStyles.galleryContainer}>
      <Box
        component="img"
        src={images[selectedImageIndex]}
        alt={productName}
        sx={productDetailStyles.mainImage}
      />

      {/* other images */}
      {images.length > 1 && (
        <Box sx={productDetailStyles.thumbnailCarousel}>
          {images.map((imageUrl, index) => (
            <Box
              key={index}
              component="img"
              src={imageUrl}
              alt={`${productName} - ${index + 1}`}
              onClick={() => setSelectedImageIndex(index)}
              sx={productDetailStyles.thumbnail(selectedImageIndex === index)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductImageGallery;

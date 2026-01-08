import { Box } from '@mui/material';
import { useState, memo } from 'react';
import { productDetailStyles } from '../../pages/ProductDetail.styles';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGalleryComponent = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <Box sx={productDetailStyles.galleryContainer}>
      <Box
        component="img"
        src={images[selectedImageIndex]}
        alt={productName}
        loading="eager"
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
              loading="lazy"
              onClick={() => setSelectedImageIndex(index)}
              sx={productDetailStyles.thumbnail(selectedImageIndex === index)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export const ProductImageGallery = memo(ProductImageGalleryComponent);

export default ProductImageGallery;

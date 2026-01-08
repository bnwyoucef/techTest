import { Box, Container, Breadcrumbs, Link, CircularProgress, Alert, Typography } from '@mui/material';
import { useProduct } from '../hooks/queries';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import { productDetailStyles } from './ProductDetail.styles';

interface ProductDetailProps {
  productId: number;
}

export const ProductDetail = ({ productId }: ProductDetailProps) => {
  const { data: product, isLoading, error } = useProduct(productId);


  if (isLoading) {
    return (
      <Container sx={productDetailStyles.loadingContainer}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container sx={productDetailStyles.errorContainer}>
        <Alert severity="error">
          {error instanceof Error ? error.message : 'Failed to load product details'}
        </Alert>
      </Container>
    );
  }


  return (
    <Container maxWidth="lg" sx={productDetailStyles.mainContainer}>
      <Breadcrumbs sx={productDetailStyles.breadcrumbs}>
        {product.breadcrumbs.map((crumb, index) => (
          <Link
            key={index}
            underline="hover"
            color={index === product.breadcrumbs.length - 1 ? 'text.primary' : 'inherit'}
            href="#"
          >
            {crumb.label}
          </Link>
        ))}
      </Breadcrumbs>

      <Box sx={productDetailStyles.contentBox}>
        <ProductImageGallery images={product.imagesUrls} productName={product.headline} />

        <ProductInfo
          headline={product.headline}
          globalRating={product.globalRating}
          buybox={product.buybox}
          newBestPrice={product.newBestPrice}
          description={product.description}
          reviews={product.reviews}
        />
      </Box>

      {product.edito && (
        <Box sx={productDetailStyles.editoWrapper}>
          <Typography variant="h3" gutterBottom>
            À propos de cet article:
          </Typography>
          <Box
            sx={productDetailStyles.editoBox}
            dangerouslySetInnerHTML={{ __html: product.edito }}
          />
        </Box>
      )}
    </Container>
  );
};

export default ProductDetail;

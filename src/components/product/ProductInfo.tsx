import { Box, Typography, Rating, Chip, Divider } from '@mui/material';
import Button from '../common/Button';
import { productDetailStyles } from '../../pages/ProductDetail.styles';
import type { GlobalRating, Buybox, Review } from '../../types/product.types';

interface ProductInfoProps {
  headline: string;
  globalRating?: GlobalRating;
  buybox: Buybox;
  newBestPrice: number;
  description?: string;
  reviews?: Review[];
}

export const ProductInfo = ({
  headline,
  globalRating,
  buybox,
  newBestPrice,
  description,
  reviews,
}: ProductInfoProps) => {
  return (
    <Box sx={productDetailStyles.infoContainer}>
      <Typography variant="h4" component="h1" gutterBottom>
        {headline}
      </Typography>

      {globalRating && (
        <Box sx={productDetailStyles.ratingContainer}>
          <Rating value={globalRating.score} precision={0.1} readOnly />
          <Typography variant="body2" color="text.secondary">
            ({globalRating.score.toFixed(1)})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • {globalRating.nbReviews} avis
          </Typography>
        </Box>
      )}

      {/* Price */}
      <Box sx={productDetailStyles.priceContainer}>
        <Box sx={productDetailStyles.priceBox}>
          <Typography variant="h3" color="primary" sx={productDetailStyles.currentPrice}>
            {buybox?.salePrice.toFixed(2)} €
          </Typography>
          {newBestPrice < buybox?.salePrice && (
            <Typography variant="h5" color="text.secondary" sx={productDetailStyles.oldPrice}>
              {newBestPrice.toFixed(2)} €
            </Typography>
          )}
        </Box>
        {buybox?.shippingAmount > 0 && (
          <Typography variant="body2" color="text.secondary">
            + {buybox.shippingAmount.toFixed(2)} € de frais de livraison
          </Typography>
        )}
        {buybox?.shippingAmount === 0 && (
          <Typography variant="body2" color="success.main" sx={productDetailStyles.freeShipping}>
            Livraison gratuite
          </Typography>
        )}
        {buybox?.rspCampaignDiscount > 0 && (
          <Chip
            label={`Cashback: ${buybox.rspCampaignDiscount.toFixed(2)} €`}
            color="success"
            size="small"
            sx={productDetailStyles.cashbackChip}
          />
        )}
      </Box>


      {/* Seller Info */}
      <Box sx={productDetailStyles.sellerBox}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Vendu par
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
          {buybox?.seller.login}
        </Typography>
      </Box>

      {description && (
        <Box
          sx={productDetailStyles.descriptionBox}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      <Box sx={productDetailStyles.actionButtonsContainer}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          fullWidth
          onClick={() => window.alert('In progress... !')}
          sx={productDetailStyles.actionButton}
        >
          Ajouter au panier
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={() => window.alert('In progress... !')}
          sx={productDetailStyles.actionButton}
        >
          Achetez maintenant
        </Button>
      </Box>

      {reviews && reviews.length > 0 && (
        <Box sx={productDetailStyles.reviewsContainer}>
          <Divider sx={productDetailStyles.reviewsDivider} />
          <Typography variant="h6" gutterBottom>
            Avis clients
          </Typography>
          <Box sx={productDetailStyles.reviewsBox}>
            {reviews.map((review, index) => (
              <Box
                key={index}
                sx={productDetailStyles.reviewCard}
              >
                <Box sx={productDetailStyles.reviewHeader}>
                  <Typography variant="subtitle2" sx={productDetailStyles.reviewTitle}>
                    {review.title}
                  </Typography>
                  <Rating value={review.note} readOnly size="small" />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={productDetailStyles.reviewDescription}>
                  {review.description}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={productDetailStyles.reviewAuthor}>
                  Par {review.author.firstName}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductInfo;

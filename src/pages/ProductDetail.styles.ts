import type { SxProps, Theme } from "@mui/material/styles";

export const productDetailStyles = {
  // ProductDetail Page Styles
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
  } as SxProps<Theme>,

  errorContainer: {
    py: 4,
  } as SxProps<Theme>,

  mainContainer: {
    py: 4,
  } as SxProps<Theme>,

  breadcrumbs: {
    mb: 3,
  } as SxProps<Theme>,

  contentBox: {
    display: "flex",
    gap: 4,
    flexDirection: { xs: "column", md: "row" },
  } as SxProps<Theme>,

  editoWrapper: {
    mt: 4,
  } as SxProps<Theme>,

  editoBox: {
    p: 3,
    pt: 1,
    bgcolor: "grey.50",
    borderRadius: 1,
    "& img": { maxWidth: "100%", height: "auto" },
    "& p": { mb: 1 },
  } as SxProps<Theme>,

  // ProductImageGallery Styles
  galleryContainer: {
    flex: 1,
    maxWidth: { xs: "100%", md: "500px" },
  } as SxProps<Theme>,

  mainImage: {
    width: "100%",
    height: "auto",
    borderRadius: 2,
    boxShadow: 2,
    mb: 2,
  } as SxProps<Theme>,

  thumbnailCarousel: {
    display: "flex",
    gap: 1,
    overflowX: "auto",
    pb: 1,
    "&::-webkit-scrollbar": {
      height: 8,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey.400",
      borderRadius: 1,
    },
  } as SxProps<Theme>,

  thumbnail: (isSelected: boolean) =>
    ({
      width: 80,
      height: 80,
      objectFit: "cover",
      borderRadius: 1,
      cursor: "pointer",
      border: 2,
      borderColor: isSelected ? "primary.main" : "grey.300",
      opacity: isSelected ? 1 : 0.6,
      transition: "all 0.2s",
      "&:hover": {
        opacity: 1,
        borderColor: "primary.light",
      },
    } as SxProps<Theme>),

  // ProductInfo Styles
  infoContainer: {
    flex: 1,
  } as SxProps<Theme>,

  ratingContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 2,
  } as SxProps<Theme>,

  priceContainer: {
    mb: 1,
  } as SxProps<Theme>,

  priceBox: {
    display: "flex",
    alignItems: "baseline",
    gap: 2,
  } as SxProps<Theme>,

  currentPrice: {
    fontWeight: "bold",
  } as SxProps<Theme>,

  oldPrice: {
    textDecoration: "line-through",
  } as SxProps<Theme>,

  freeShipping: {
    fontWeight: "medium",
  } as SxProps<Theme>,

  cashbackChip: {
    mt: 1,
  } as SxProps<Theme>,

  sellerBox: {
    mt: 2,
    mb: 3,
    bgcolor: "grey.50",
    borderRadius: 1,
  } as SxProps<Theme>,

  descriptionBox: {
    ml: 2,
    mb: 3,
    "& h3": {
      fontSize: "1.1rem",
      fontWeight: "bold",
      mb: 1.5,
      mt: 2,
    },
    "& p": {
      mb: 1.5,
      color: "text.secondary",
      lineHeight: 1.7,
    },
    "& ul": {
      mb: 2,
      pl: 2,
    },
    "& li": {
      mb: 1,
      color: "text.secondary",
      lineHeight: 1.6,
    },
    "& b": {
      fontWeight: 600,
      color: "text.primary",
    },
  } as SxProps<Theme>,

  actionButtonsContainer: {
    display: "flex",
    gap: 2,
    mb: 3,
    flexDirection: { xs: "column", sm: "row" },
  } as SxProps<Theme>,

  actionButton: {
    py: 1.5,
    fontWeight: "bold",
  } as SxProps<Theme>,

  reviewsContainer: {
    mb: 3,
  } as SxProps<Theme>,

  reviewsDivider: {
    mb: 2,
  } as SxProps<Theme>,

  reviewsBox: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    maxHeight: "400px",
    overflowY: "auto",
    pr: 1,
    "&::-webkit-scrollbar": {
      width: 8,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey.400",
      borderRadius: 1,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "grey.100",
      borderRadius: 1,
    },
  } as SxProps<Theme>,

  reviewCard: {
    p: 2,
    border: 1,
    borderColor: "grey.200",
    borderRadius: 1,
  } as SxProps<Theme>,

  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 1,
  } as SxProps<Theme>,

  reviewTitle: {
    fontWeight: "bold",
  } as SxProps<Theme>,

  reviewDescription: {
    mb: 1,
  } as SxProps<Theme>,

  reviewAuthor: {
    fontStyle: "italic",
  } as SxProps<Theme>,
};

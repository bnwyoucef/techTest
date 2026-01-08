import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductInfo } from '../ProductInfo';
import type { GlobalRating, Buybox, Review } from '../../../types/product.types';

describe('ProductInfo', () => {
  const mockGlobalRating: GlobalRating = {
    score: 4.5,
    nbReviews: 100,
  };

  const mockBuybox: Buybox = {
    salePrice: 99.99,
    shippingAmount: 5.99,
    rspCampaignDiscount: 10,
    seller: {
      login: 'TestSeller',
    },
  };

  const mockReviews: Review[] = [
    {
      note: 5,
      title: 'Great product',
      description: 'test description',
      author: {
        firstName: 'John',
      },
    },
    {
      note: 4,
      title: 'Good quality',
      description: 'test description 2',
      author: {
        firstName: 'Jane',
      },
    },
  ];

  it('should render product headline', () => {
    render(
      <ProductInfo
        headline="Monitor"
        buybox={mockBuybox}
        newBestPrice={89.99}
      />
    );

    expect(screen.getByText('Monitor')).toBeInTheDocument();
  });

  it('should display rating information when provided', () => {
    render(
      <ProductInfo
        headline="Monitor"
        globalRating={mockGlobalRating}
        buybox={mockBuybox}
        newBestPrice={89.99}
      />
    );

    expect(screen.getByText(/4\.5/)).toBeInTheDocument();
    expect(screen.getByText(/100 avis/)).toBeInTheDocument();
  });

  it('should display price information', () => {
    render(
      <ProductInfo
        headline="Monitor"
        buybox={mockBuybox}
        newBestPrice={89.99}
      />
    );

    expect(screen.getByText(/89\.99/)).toBeInTheDocument();
    expect(screen.getByText(/99\.99/)).toBeInTheDocument();
  });

  it('should display seller information', () => {
    render(
      <ProductInfo
        headline="Monitor"
        buybox={mockBuybox}
        newBestPrice={89.99}
      />
    );

    expect(screen.getByText(/TestSeller/)).toBeInTheDocument();
  });

  it('should render action buttons', () => {
    render(
      <ProductInfo
        headline="Monitor"
        buybox={mockBuybox}
        newBestPrice={89.99}
      />
    );

    expect(screen.getByText('Ajouter au panier')).toBeInTheDocument();
    expect(screen.getByText('Achetez maintenant')).toBeInTheDocument();
  });

  it('should render description when provided', () => {
    const description = '<p>Test description</p>';
    render(
      <ProductInfo
        headline="Monitor"
        buybox={mockBuybox}
        newBestPrice={89.99}
        description={description}
      />
    );

    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('should render reviews when provided', () => {
    render(
      <ProductInfo
        headline="Monitor"
        buybox={mockBuybox}
        newBestPrice={89.99}
        reviews={mockReviews}
      />
    );

    expect(screen.getByText('Avis clients')).toBeInTheDocument();
    expect(screen.getByText('Great product')).toBeInTheDocument();
    expect(screen.getByText('Good quality')).toBeInTheDocument();
    expect(screen.getByText(/John/)).toBeInTheDocument();
    expect(screen.getByText(/Jane/)).toBeInTheDocument();
  });

  it('should not render reviews section when no reviews provided', () => {
    render(
      <ProductInfo
        headline="Monitor"
        buybox={mockBuybox}
        newBestPrice={89.99}
      />
    );

    expect(screen.queryByText('Avis clients')).not.toBeInTheDocument();
  });
});

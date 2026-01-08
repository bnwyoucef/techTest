import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductImageGallery } from '../ProductImageGallery';

describe('ProductImageGallery', () => {
  const mockImages = [
    'https://fr.shopping.rakuten.com/photo/16435273730.jpg',
    'https://fr.shopping.rakuten.com/photo/16435274130.jpg',
    'https://fr.shopping.rakuten.com/photo/16435275330.jpg',
  ];
  const mockProductName = 'Monitor';

  it('should render the first image as the main image by default', () => {
    render(<ProductImageGallery images={mockImages} productName={mockProductName} />);

    const mainImage = screen.getByAltText(mockProductName);
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute('src', mockImages[0]);
    expect(mainImage).toHaveAttribute('loading', 'eager');
  });

  it('should render all thumbnail images when multiple images exist', () => {
    render(<ProductImageGallery images={mockImages} productName={mockProductName} />);

    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails).toHaveLength(4);
    const thumbnail = screen.getByAltText(`${mockProductName} - 1`);
    expect(thumbnail).toHaveAttribute('loading', 'lazy');
  });

  it('should not render thumbnails when only one image exists', () => {
    render(<ProductImageGallery images={[mockImages[0]]} productName={mockProductName} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(1);
  });

  it('should change main image when thumbnail is clicked', async () => {
    const user = userEvent.setup();
    render(<ProductImageGallery images={mockImages} productName={mockProductName} />);

    const mainImage = screen.getByAltText(mockProductName);
    expect(mainImage).toHaveAttribute('src', mockImages[0]);

    const secondThumbnail = screen.getByAltText(`${mockProductName} - 2`);
    await user.click(secondThumbnail);

    expect(mainImage).toHaveAttribute('src', mockImages[1]);
  });

});

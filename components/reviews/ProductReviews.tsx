import { fetchProductReviews } from '@/utils/fetchData';
import SectionTitle from '../shared/SectionTitle';
import ReviewCard from './ReviewCard';

async function ProductReviews({ productId }: { productId: string }) {
  const reviews = await fetchProductReviews(productId);
  if (reviews.length === 0)
    return (
      <SectionTitle
        text="no reviews yet"
        className="text-muted-foreground my-8"
      />
    );

  return (
    <div className="mt-16">
      <SectionTitle text="reviews" className="text-muted-foreground" />
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {reviews.map((review) => {
          const { comment, rating, authorImageUrl, authorName } = review;
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}

export default ProductReviews;

import { deleteReviewAction } from '@/utils/actions';
import { fetchProductReviewsByUser } from '@/utils/fetchData';
import ReviewCard from '@/components/reviews/ReviewCard';
import SectionTitle from '@/components/shared/SectionTitle';
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';
import Link from 'next/link';

async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();
  if (reviews.length === 0) {
    return (
      <div className="text-center">
        <SectionTitle text="You have no reviews yet." />
        <p className="mt-4">
          Browse our{' '}
          <Link href="/products" className="text-blue-500 underline">
            products
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <>
      <SectionTitle text="Your Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image } = review.product;
          const reviewInfo = { comment, rating, name, image };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default ReviewsPage;

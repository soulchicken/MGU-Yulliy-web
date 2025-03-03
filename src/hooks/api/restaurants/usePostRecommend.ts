import { useMutation } from '@tanstack/react-query';
import { post } from '~/libs/api';

type Request = {
	evaluation: number;
};

export const postRecommendQueryKey = (reviewId: number) => [
	'recommend',
	reviewId,
];

const usePostRecommend = (restaurantId: number, reviewId: number) => {
	const mutation = useMutation<unknown, Error, Request>({
		mutationFn: (request: Request) => {
			return post<unknown>(
				`/restaurants/${restaurantId}/reviews/${reviewId}/`,
				request,
			);
		},
	});

	return mutation;
};

export default usePostRecommend;

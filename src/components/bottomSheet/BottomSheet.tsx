import { useAtom } from 'jotai';
import styled from 'styled-components';
import RestaurantSummary from '~/components/bottomSheet/restaurantSummary/RestaurantSummary';
import useDraggable from '~/hooks/useDraggable';
import { restaurantAtom } from '~/store/restaurants';

type BottomSheetProps = {
	onClose: () => void;
};

const BottomSheetWrapper = styled.div<{ $translateY: number }>`
	position: fixed;
	bottom: 0;
	z-index: 100;
	width: 400px;
	background-color: ${({ theme }) => theme.colors.white};
	filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2));

	border-top-left-radius: 16px;
	border-top-right-radius: 16px;

	max-height: 80vh;

	overflow-y: auto;
	transform: translateY(${({ $translateY }) => $translateY}px);
`;

const Handle = styled.div`
	width: 50px;
	height: 5px;
	background-color: ${({ theme }) => theme.colors.gray};
	border-radius: 5px;
	margin: 10px auto;
	cursor: grab;
`;

const BottomSheetContent = styled.div`
	padding: 16px;
	// TODO: 임시 크기
	height: 1000px;
`;

const BottomSheet: React.FC<BottomSheetProps> = ({ onClose }) => {
	const { translateY, handleMouseDown } = useDraggable(onClose);
	const [restaurants] = useAtom(restaurantAtom);

	return (
		<BottomSheetWrapper $translateY={translateY}>
			<Handle onMouseDown={handleMouseDown} />
			<BottomSheetContent>
				<ul>
					{restaurants?.map((restaurant) => (
						<RestaurantSummary key={restaurant.id} restaurant={restaurant} />
					))}
				</ul>
			</BottomSheetContent>
		</BottomSheetWrapper>
	);
};

export default BottomSheet;

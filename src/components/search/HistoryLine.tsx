import { styled } from 'styled-components';
import XIcon from '~/assets/icons/XIcon';
import useDelSearch from '~/hooks/api/search/useDelSearch';

type HistoryLineProps = {
	id: number;
	removeHistory: (id: number) => void;
	query: string;
};

const LineWarpper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const DelButton = styled.button`
	border: none;
	cursor: pointer;
	background-color: transparent;
	margin-right: 3px;
`;

const HistoryLine: React.FC<HistoryLineProps> = ({
	id,
	removeHistory,
	query,
}) => {
	const { mutate: deleteSearch } = useDelSearch();

	const handleDelButton = () => {
		deleteSearch({ id });
		console.log(`${id} 삭제`);
		removeHistory(id);
	};

	return (
		<LineWarpper>
			{query}
			{id}
			<DelButton onClick={handleDelButton}>
				<XIcon />
			</DelButton>
		</LineWarpper>
	);
};

export default HistoryLine;

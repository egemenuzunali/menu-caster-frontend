import { gql } from '@apollo/client';

const GET_MESSAGE_QUERY = gql`
	query GET_MESSAGE_QUERY {
		getMessage {
			id
			text
		}
	}
`;

export default GET_MESSAGE_QUERY;

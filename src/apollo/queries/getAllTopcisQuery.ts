import { gql } from '@apollo/client';

const GET_ALL_TOPICS_QUERY = gql`
	query GET_ALL_TOPICS_QUERY {
		getAllTopics {
			id
			description
			title
		}
	}
`;

export default GET_ALL_TOPICS_QUERY;

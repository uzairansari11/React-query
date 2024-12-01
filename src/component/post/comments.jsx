import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchComments } from "../../api";

const Comments = ({ postId }) => {
	const { data, error, isLoading, isError } = useQuery({
		queryKey: ["comment", postId],
		queryFn: () => fetchComments(postId),
	});

	if (isLoading) return <div>Loading...</div>;

	if (isError) return <div>Error: {error.message}</div>;

	return data.map((item) => (
		<ul>
			<li>{item.name} </li>
		</ul>
	));
};

export default Comments;

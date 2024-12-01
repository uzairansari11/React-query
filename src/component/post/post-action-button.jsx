import React from "react";

export const SeeCommentsButton = ({ selectCommentHandler, id }) => {
	return <button onClick={() => selectCommentHandler(id)}>See Comments</button>;
};
export const DeletePostButton = ({ deleteMutation, id }) => {
	return (
		<button onClick={() => deleteMutation.mutate(id)}>
			Delete Post Button
		</button>
	);
};

export const UpdatedPostButton = ({ updateMutation, id }) => {
	return (
		<button onClick={() => updateMutation.mutate(id)}>
			Update Post Button
		</button>
	);
};

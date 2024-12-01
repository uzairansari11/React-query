import {
	DeletePostButton,
	SeeCommentsButton,
	UpdatedPostButton,
} from "./post-action-button";

export const PostCard = ({
	title,
	body,
	userId,
	id,
	selectCommentHandler,
	deleteMutation,
	updateMutation,
}) => {
	return (
		<div
			style={{
				padding: "20px",
				border: "1px solid #ddd",
				margin: "10px",
				borderRadius: "5px",
			}}
		>
			<h2>{title}</h2>
			<p>{body}</p>
			<small>Posted by User {userId}</small>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "5px",
					marginTop: "10px",
				}}
			>
				<SeeCommentsButton
					selectCommentHandler={selectCommentHandler}
					id={id}
				/>
				<>
					<DeletePostButton deleteMutation={deleteMutation} id={id} />
				</>

				<>
					<UpdatedPostButton updateMutation={updateMutation} id={id} />
				</>
			</div>
		</div>
	);
};

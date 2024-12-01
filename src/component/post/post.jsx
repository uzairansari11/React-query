import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPost, updatePost } from "../../api";
import { PostCard } from "./post-card";
import Comments from "./comments";
import Pagination from "./pagination";

// Define a basic container style for the main layout
const containerStyle = {
	display: "flex",
	justifyContent: "space-between",
	width: "80%",
	height: "80vh",
	boxSize: "border-box",
	margin: "auto",
	borderRadius: "5px",
};

// Define the style for the posts list on the left side
const postsContainerStyle = {
	flex: 1,
	maxHeight: "80vh",
	overflowY: "auto",
	paddingRight: "10px",
	alignItems: "center",
	justifyContent: "center",
};

// Define style for the comments container on the right side
const commentsContainerStyle = {
	flex: 0.4,
	maxHeight: "80vh",
	overflowY: "auto",
	paddingLeft: "10px",
	alignItems: "center",
	justifyContent: "center",
};

export const Post = () => {
	const [selectPost, setSelectedPost] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const queryClient = useQueryClient();
	const deleteMutation = useMutation({
		mutationFn: (postId) => deletePost(postId),
	});
	const updateMutation = useMutation({
		mutationFn: (postId) => updatePost(postId),
	});
	useEffect(() => {
		if (currentPage < 10) {
			const nextPage = currentPage + 1;
			queryClient.prefetchQuery({
				queryKey: ["posts", nextPage],
				queryFn: () => fetchPost(nextPage),
			});
		}
	}, [currentPage, queryClient]);
	const { data, error, isFetching, isLoading } = useQuery({
		queryKey: ["posts", currentPage],
		queryFn: () => fetchPost(currentPage),
		staleTime: 2000, // 2 SECONDS
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	const selectCommentHandler = (id) => {
		setSelectedPost(id);
		deleteMutation.reset();
		updateMutation.reset();
	};

	return (
		<>
			<div style={containerStyle}>
				{/* Left side: Posts List */}
				<div style={postsContainerStyle}>
					{data?.length > 0 &&
						data?.map((item) => (
							<PostCard
								{...item}
								key={item.id}
								selectCommentHandler={selectCommentHandler}
								deleteMutation={deleteMutation}
								updateMutation={updateMutation}
							/>
						))}
				</div>

				{/* Right side: Comments Section */}
				<div style={commentsContainerStyle}>
					{selectPost && <Comments postId={selectPost} />}
				</div>
			</div>

			<>
				{deleteMutation.isPending && <p>Deleting post</p>}
				{deleteMutation.isError && (
					<p>Error while deleting post : {deleteMutation.error.toString()}</p>
				)}
				{deleteMutation.isSuccess && <p>Post deleted (not) successfully</p>}
			</>

			<>
				{updateMutation.isPending && <p>Updating post</p>}
				{updateMutation.isError && (
					<p>Error while updating post : {updateMutation.error.toString()}</p>
				)}
				{updateMutation.isSuccess && <p>Post updated (not) successfully</p>}
			</>
			<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</>
	);
};

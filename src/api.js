export async function fetchPost(pageNum) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
	);
	return response.json();
}

export async function fetchComments(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);
	return response.json();
}

export async function deletePost(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`,
		{
			method: "DELETE",
		}
	);
	return response.json();
}

export async function updatePost(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: "Updated Post",
				body: "This post has been updated",
			}),
		}
	);

	return response.json();
}

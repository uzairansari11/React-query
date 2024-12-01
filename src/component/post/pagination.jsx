import React from "react";

const Pagination = ({ currentPage, setCurrentPage }) => {
	return (
		<div
			style={{
				margin: "auto",
				justifyContent: "center",
				display: "flex",
				gap: "20px",
			}}
		>
			<button
				onClick={() => setCurrentPage(currentPage - 1)}
				disabled={currentPage <= 1}
			>
				Previous
			</button>
			<span>Page {currentPage}</span>
			<button
				onClick={() => setCurrentPage(currentPage + 1)}
				disabled={currentPage >= 10}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;

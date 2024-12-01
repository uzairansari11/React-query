import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import PersonComponent from "./person-component";

const initialUrl = "https://swapi.dev/api/people";
const fetchUrl = async (url) => {
	const response = await fetch(url);
	return response.json();
};

export const StarWar = () => {
	const { data, fetchNextPage, hasNextPage, isFetching, isLoading, error } =
		useInfiniteQuery({
			queryKey: ["sw-people"],
			queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
			getNextPageParam: (lastPage) => lastPage.next || undefined,
		});

	if (isLoading) {
		return (
			<div className="loading-container">
				<div className="loader"></div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="error-container">
				<span className="error-message">Error: {error?.message}</span>
			</div>
		);
	}

	return (
		<>
			{/* Inline CSS */}

			<InfiniteScroll
				loadMore={() => {
					if (!isFetching) {
						fetchNextPage();
					}
				}}
				hasMore={hasNextPage}
			>
				{data?.pages?.map((pageData) =>
					pageData?.results?.map((result, index) => (
						<PersonComponent
							key={index}
							name={result.name}
							eyeColor={result.eye_color}
							hairColor={result.hair_color}
						/>
					))
				)}
			</InfiniteScroll>
			{isFetching && (
				<div className="loader-container">
					<div className="loader"></div>
				</div>
			)}
			{!hasNextPage && !isLoading && (
				<p className="no-more-data">No more data..</p>
			)}
		</>
	);
};

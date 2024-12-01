import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { StarshipComponent } from "./star-ship-component";
const initialUrl = "https://swapi.dev/api/starships";

const fetchUrl = async (url) => {
	const response = await fetch(url);
	return response.json();
};

export const Ships = () => {
	const { data, error, isLoading, isFetching, hasNextPage, fetchNextPage } =
		useInfiniteQuery({
			queryKey: ["sw-ships"],
			queryFn: async ({ queryUrl = initialUrl }) => fetchUrl(queryUrl),
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
		<InfiniteScroll
			loadMore={() => {
				if (!isFetching) {
					fetchNextPage();
				}
			}}
			hasMore={hasNextPage}
		>
			{data.pages.map((page) =>
				page.results.map((ship, index) => (
					<StarshipComponent {...ship} key={index} />
				))
			)}
		</InfiniteScroll>
	);
};


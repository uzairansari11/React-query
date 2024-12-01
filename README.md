## Key Points

#### Stale Time : when data need to be refetch. By default stale time is 0ms.

#### gcTime : how long to keep the data that might be used later.

- query goes into "cold storage" if there is no active useQuery.
- cache data expires after gcTime (default : 5 minutes).
- how long it's been since the last active useQUery.

- cache contains backup data to display while fetching

#### Display data

- Fresh and in cache : display cached data,no refetch.

- stale and in cache : display cached data,refetch.

- not in cache : nothing to display during refetch.

### Dependencies

- Every query use the same key (['comment'])

- Data for queries with known keys only re-fetched upon trigger .

##### Example Triggers

- component remount
- window re-focus
- running re-fetch function
- automated re-fetch
- query invalidation

#### isFetching vs isLoading

##### isFetching

- the async query function hasn't yet resolved.

##### isLoading

- no cached data, plus isFetching

## Mutation

- making a network call that changes data on the server.

#### useMutation

- return mutate function
- doesn't need query key
- isLoading but no isFetching
- by default no retires (but can configure)

#### Infinite Scrolling

- track current page in component state
- new query updates page number
- useInfiniteQuery tracks next query
- next query is returned as part of the data

#### Shape of useInfiniteQuery Data

- shape of data different than useQuery

- Object with two properties :

  - page
  - pageParams

- Every query has its own elements in the page array .
- pageParams tracks the key of queries that have been retrieved
  - rarely used

##### useInfiniteQuery Syntax

- pageParam is a parameter passed to the query function

```
useInfiniteQuery({

    queryKey : ['sw-people']

    queryFn:({pageParam=initialUrl})=>fetchUrl(pageParam)

  })
```

- fetchNextPage
- function call when the user need more data

- hasNextPage
  - based on the return value of getNextPageParams
  - if undefined, no more data
- isFetchingNextPage
  - for displaying a loader

## The Flow

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

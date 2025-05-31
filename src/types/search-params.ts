export type SearchParams<T extends Record<string, string>> = {
	params: Promise<T>;
};

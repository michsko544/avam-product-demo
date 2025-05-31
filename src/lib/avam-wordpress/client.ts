"use server";

import { HTTPError } from "@/utils/http-error";

const endpoint = "https://avam.com";

export async function apiClient<Result, RequestBody = undefined>(
	path: string,
	options: {
		headers?: HeadersInit;
		cache?: RequestCache;
		revalidate?: number;
		tags?: string[];
		body?: RequestBody;
		method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
	},
): Promise<Result> {
	if (!endpoint) {
		throw new Error("No endpoint set as environment variable");
	}

	const { headers, cache, revalidate, tags, method = "GET" } = options;

	const input = {
		method,
		headers: {
			"Content-Type": "application/json",
			"User-Agent":
				"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36", // Required to bypass bot protection on WordPress API
			...headers,
		},
		body: method !== "GET" && options.body ? JSON.stringify(options.body) : null,
		cache: cache,
		next: { revalidate, tags },
	};

	const url = new URL(`/wp-json/wp/v2${path}`, endpoint);

	const response = await fetch(url, input);

	if (!response.ok) {
		const body = await (async () => {
			try {
				return await response.text();
			} catch {
				return "";
			}
		})();
		console.error(input.body);
		throw new HTTPError(response, body);
	}

	const body = (await response.json()) as Result;

	return body;
}

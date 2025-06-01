import { apiClient } from "@/lib/avam-wordpress/client";
import type { Media, Product } from "@/types/products";
import { cache } from "react";

export const getProducts = cache(async () => {
	return apiClient<Product[]>(`/product?per_page=100`, {
		tags: ["products"],
		revalidate: 60 * 60,
		cache: "force-cache",
	});
});

export const getProductByHandle = cache(async (handle: string) => {
	return apiClient<Product[]>(`/product?slug=${handle}`, {
		tags: ["products"],
		revalidate: 60 * 60,
		cache: "force-cache",
	});
});

export const getProductsByCategoryId = cache(async (id: number) => {
	return apiClient<Product[]>(`/product?product_cat=${id}&per_page=100`, {
		tags: ["products", "categories"],
		revalidate: 60 * 60,
		cache: "force-cache",
	});
});

export const getMediaById = cache(async (id: number) => {
	return apiClient<Media>(`/media/${id}`, {
		tags: ["media"],
		revalidate: 60 * 60 * 6,
		cache: "force-cache",
	});
});

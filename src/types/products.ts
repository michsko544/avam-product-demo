export type Product = {
	date: string;
	modified: string;
	excerpt: { rendered: string };
	id: number;
	slug: string;
	title: { rendered: string };
	status: string;
	featured_media: number;
	product_cat: number[];
};

export type Media = {
	id: number;
	alt_text: string;
	title: { rendered: string };
	source_url: string;
};

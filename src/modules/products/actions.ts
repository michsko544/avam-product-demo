"use server";

export async function addToCart(_prevState: null, formData: FormData) {
	const swabType = formData.get("swab_type");
	const productQuantity = formData.get("product_quantity");
	const quantity = formData.get("quantity");

	// TODO: Implement actual cart logic here
	console.log("Adding to cart", {
		swabType,
		productQuantity,
		quantity,
	});

	return null;
}

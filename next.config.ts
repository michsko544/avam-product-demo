import type { NextConfig } from "next";
import Icons from "unplugin-icons/webpack";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i0.wp.com",
			},
			{
				protocol: "https",
				hostname: "avam.com",
			},
		],
	},
	webpack(config) {
		config.plugins.push(
			Icons({
				compiler: "jsx",
				jsx: "react",
			}),
		);
		return config;
	},
};

export default nextConfig;

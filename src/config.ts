import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Misha's Gallery",
	subtitle: "Blog & Portfolio Site",
	lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/omfgdogs.gif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
		   src: '/favicon/favicon.ico',    // Path of the favicon, relative to the /public directory
		   // theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		   // sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/doggo.gif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Misha Schnee",
	bio: "Silly gay zombie | I make art and games stuff",
	links: [
		{
			name: "Bluesky",
			icon: "mingcute:bluesky-social-fill", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://bsky.app/profile/mishabishi.bsky.social",
		},
		{
			name: "GitHub",
			icon: "mingcute:github-fill",
			url: "https://github.com/it-misha",
		},
		{
			name: "Email",
			icon: "mingcute:mail-send-fill",
			url: "mailto:contact@misha.gallery",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-ND 4.0",
	url: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

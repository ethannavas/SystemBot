module.exports = {
	/* The token of your Discord Bot */
	token: "",
	/* For the support server */
	support: {
		id: "765783173501550593", // The ID of the support server
		logs: "766140939772100619", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "XXXXXXXXXXX", // Your discord client secret
		baseURL: "", // The base URl of the dashboard
		logs: "XXXXXXXXXXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb://localhost:27017/AtlantaBot", // The URl of the mongodb database
	prefix: "?", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#080808", // The default color for the embeds
		footer: "System Utilities / Made by Ethan" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "250438579438747648", // The ID of the bot's owner
		name: "Ethan N | FS#5926" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
	},
	/* The others utils links */
	others: {
		github: "", // Founder's github account
		donate: "https://www.paypal.com/paypalme/CH1LDSUPPORT" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "Central Solutions",
			type: "WATCHING"
		},
		{
			name: "?help",
			type: "PLAYING"
		}
	],
	/* Language configuration */
	languages: [
		{
			name: "en-US",
			nativeName: "English",
			moment: "en",
			defaultMomentFormat: "MMMM Do YYYY",
			default: true,
			aliases: [
				"English",
				"en",
				"en-us",
				"en_us",
				"en_US"
			]
		},
		{
			name: "fr-FR",
			nativeName: "Français",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "fr",
			default: false,
			aliases: [
				"French",
				"français",
				"francais",
				"fr",
				"fr_fr"
			]
		},
		{
			name: "es-ES",
			nativeName: "Español",
			defaultMomentFormat: "MMM Do, YYYY",
			moment: "es",
			default: false,
			aliases: [
				"Spanish",
				"es",
				"es_es"
			]
		},
		{
			name: "it-IT",
			nativeName: "Italiano",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "it",
			default: false,
			aliases: [
				"Italian",
				"it",
				"it_it"
			]
		},
		{
			name: "nl-NL",
			nativeName: "Nederlands",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "nl",
			default: false,
			aliases: [
				"Dutch",
				"nl",
				"nl_nl"
			]
		},
		{
			name: "pt-PT",
			nativeName: "Português",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "pt",
			default: false,
			aliases: [
				"Portuguese",
				"pt",
				"pt_pt"
			]
		}
	]
};

import { GameMode } from "../Configuration";
import { Rewards } from "../rewards";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

export const twilightTownRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (The Old Mansion)",
		value: "11CE022E",
		reward: Rewards.POTION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.ULTIMA_WEAPON },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (The Old Mansion)",
		value: "11CE023A",
		reward: Rewards.MYTHRIL_SHARD,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.CHAMPION_BELT },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (The Woods)",
		value: "11CE0246",
		reward: Rewards.POTION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.CENTURION },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (The Woods)",
		value: "11CE0252",
		reward: Rewards.MYTHRIL_SHARD,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.MEDAL },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (The Woods)",
		value: "11CE025E",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tram Common)",
		value: "11CE026A",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tram Common)",
		value: "11CE0276",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tram Common)",
		value: "11CE0282",
		reward: Rewards.TENT,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tram Common)",
		value: "11CE028E",
		reward: Rewards.MYTHRIL_SHARD,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.LUCKY_RING },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tram Common)",
		value: "11CE029A",
		reward: Rewards.POTION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.FROZEN_PRIDE },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tram Common)",
		value: "11CE02A6",
		reward: Rewards.MYTHRIL_SHARD,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.SHADOW_ARCHIVE },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tram Common)",
		value: "11CE02B2",
		reward: Rewards.POTION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.NOBODY_LANCE },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Central Station)",
		value: "11CE02BE",
		reward: Rewards.TENT,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.SHOCK_CHARM },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Central Station)",
		value: "11CE02CA",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Central Station)",
		value: "11CE02D6",
		reward: Rewards.ETHER,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (The Tower)",
		value: "11CE02E2",
		reward: Rewards.POTION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.SHAMANS_RELIC },
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (The Tower)",
		value: "11CE02EE",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (The Tower)",
		value: "11CE02FA",
		reward: Rewards.ETHER,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tower Entryway)",
		value: "11CE0306",
		reward: Rewards.ETHER,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tower Entryway)",
		value: "11CE0312",
		reward: Rewards.MYTHRIL_SHARD,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: { reward: Rewards.FULL_BLOOM },
			},
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Twilight Town (Sorcerer's Loft)",
		value: "11CE031E",
		reward: Rewards.TOWER_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tower Wardrobe)",
		value: "11CE032A",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Underground Concourse)",
		value: "11CE0336",
		reward: Rewards.MYTHRIL_GEM,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Underground Concourse)",
		value: "11CE0342",
		reward: Rewards.ORICHALCUM,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Underground Concourse)",
		value: "11CE034E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Underground Concourse)",
		value: "11CE035A",
		reward: Rewards.MYTHRIL_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tunnelway)",
		value: "11CE0366",
		reward: Rewards.ORICHALCUM,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Tunnelway)",
		value: "11CE0372",
		reward: Rewards.MYTHRIL_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Sunset Terrace)",
		value: "11CE037E",
		reward: Rewards.ORICHALCUM_PLUS,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Sunset Terrace)",
		value: "11CE038A",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Sunset Terrace)",
		value: "11CE0396",
		reward: Rewards.MYTHRIL_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Sunset Terrace)",
		value: "11CE03A2",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Mansion Foyer)",
		value: "11CE03AE",
		reward: Rewards.MYTHRIL_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Mansion Foyer)",
		value: "11CE03BA",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Mansion Foyer)",
		value: "11CE03C6",
		reward: Rewards.SERENITY_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Mansion Dining Room)",
		value: "11CE03D2",
		reward: Rewards.MYTHRIL_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Mansion Dining Room)",
		value: "11CE03DE",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Mansion Library)",
		value: "11CE03EA",
		reward: Rewards.ORICHALCUM,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Twilight Town (Mansion Basement Corridor)",
		value: "11CE03F6",
		reward: Rewards.ULTIMATE_RECIPE,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Munny Pouch (Mickey)",
		value: "11CE065A",
		reward: Rewards.MUNNY_POUCH_MICKEY,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Crystal Orb",
		value: "11CE0666",
		reward: Rewards.CRYSTAL_ORB,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Star Seeker",
		value: "11CE0672",
		reward: Rewards.STAR_SEEKER,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Valor Form",
		value: "11CE067E",
		reward: Rewards.VALOR_FORM,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Seifer's Trophy",
		value: "11CE07E6",
		reward: Rewards.SEIFERS_TROPHY,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Oathkeeper",
		value: "11CE07F2",
		reward: Rewards.OATHKEEPER,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Limit Form",
		value: "11CE07FE",
		reward: Rewards.LIMIT_FORM,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Bond of Flame",
		value: "11CE0966",
		reward: Rewards.BOND_OF_FLAME,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Secret Ansem's Report 2 (Station Plaza Nobodies)",
		value: "11CE09AE",
		reward: Rewards.REPORT_TWO,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Secret Ansem's Report 10 (Twilight Town 3)",
		value: "11CE0A0E",
		reward: Rewards.REPORT_TEN,
	},
];

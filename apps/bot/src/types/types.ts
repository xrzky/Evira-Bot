import {
	ApplicationCommandType,
	ApplicationIntegrationType,
	InteractionContextType,
	type ApplicationCommandOptionType,
	type ChannelType,
	type Permissions
} from 'discord-api-types/v10';
import type { ApplicationCommandOptionChoiceData, PermissionsString, Snowflake } from 'discord.js';
import type { Client } from '@/lib/structures/client.js';
import { EventEmitter } from 'node:events';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace client {
	export interface Settings {
		token?: string;
		owners?: Snowflake[];
		defaultPermissions?: PermissionsString[];
		debug?: boolean;
		unsafeMode?: boolean;
	}
}

export interface CommandParameter {
	type: ApplicationCommandOptionType;
	name: string;
	description: string;
	required?: boolean;
	choices?: ApplicationCommandOptionChoiceData[];
	options?: CommandParameter[];
	channel_types?: ChannelType[];
	min_value?: number;
	max_value?: number;
	min_length?: number;
	max_length?: number;
	autocomplete?: boolean;
}

export interface CommandOptions {
	/**
	 * Type of the command
	 */
	type: ApplicationCommandType;
	/**
	 * 1-32 character name; `CHAT_INPUT` command names must be all lowercase matching `^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$`
	 */
	name: string;
	/**
	 * 1-100 character description for `CHAT_INPUT` commands, empty string for `USER` and `MESSAGE` commands
	 */
	description: string;
	/**
	 * The parameters for the `CHAT_INPUT` command, max 25
	 */
	options?: CommandParameter[];
	/**
	 * Set of permissions represented as a bitset
	 */
	defaultMemberPermissions?: Permissions | null;
	/**
	 * Indicates whether the command is age-restricted.
	 */
	nsfw?: boolean;
	/**
	 * Installation context(s) where the command is available, only for globally-scoped commands.
	 */
	integrationTypes?: ApplicationIntegrationType[];
	/**
	 * Interaction context(s) where the command can be used, only for globally-scoped commands.
	 */
	contexts?: InteractionContextType[] | null;
	category?: string;
	enabled?: boolean;
	cooldown?: number;
	clientPermissions?: PermissionsString[];
	userPermissions?: PermissionsString[];
	unsafe?: boolean;
	guild?: boolean;
	owner?: boolean;
}

export interface CommandData {
	type: ApplicationCommandType;
	name: string;
	description: string;
	options?: CommandParameter[];
	default_member_permissions?: Permissions | null;
	nsfw?: boolean;
	integration_types?: ApplicationIntegrationType[];
	contexts?: InteractionContextType[] | null;
}

export interface ListenerOptions {
	name: string;
	once?: boolean;
	emitter?: keyof Client | EventEmitter;
}

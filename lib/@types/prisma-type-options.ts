export type StringFieldOptions = ({
	id?: never;
	default?: string;
	unique?: never;
	optional?: true
	list?: never;
} | {
	id?: true;
	default?: ({ uuid?: true, cuid?: never } | { uuid?: never, cuid?: true });
	unique?: true;
	optional?: true;
	list?: never;
} | {
	id?: never;
	default?: never;
	unique?: never;
	optional?: never;
	list: true;
}) & { map?: string; };

export type IntFieldOptions = ({
	id?: true;
	default?: { autoincrement: true }
	unique?: true;
	optional?: never;
	list?: never;
} | {
	id?: never;
	default?: number;
	unique?: never;
	optional?: true;
	list?: never;
} | {
	id?: never;
	default?: never;
	optional?: never;
	unique?: never;
	list?: true;
}) & { map?: string; };

export type FloatFieldOptions = ({
	default?: true;
	optional?: never;
	unique?: true;
	list?: never;
} | {
	default?: number;
	optional?: never;
	unique?: never;
	list?: never;
} | {
	default?: never;
	optional?: true;
	unique?: never;
	list?: never;
} | {
	default?: never;
	optional?: never;
	unique?: never;
	list: true;
}) & { map?: string; };

export type BooleanFieldOptions = ({
	default?: boolean;
	optional?: true;
	list?: never;
} | {
	default?: never;
	optional?: never;
	list?: true;
}) & { map?: string };

export type DateTimeFieldOptions = ({
	default?: { now: true };
	updatedAt?: true;
	optional?: true;
}) & { map?: string; };

export type FieldOptions =
	| StringFieldOptions
	| IntFieldOptions
	| FloatFieldOptions
	| BooleanFieldOptions
	| DateTimeFieldOptions;

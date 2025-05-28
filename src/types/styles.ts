type CSSVariable = `--${string}`;
export type CSSVariables = Partial<Record<CSSVariable, string>>;

declare module "react" {
	// ? Override the CSSProperties interface to include CSSVariables
	interface CSSProperties extends CSSVariables {}
}

interface ActionReturn<Parameter = unknown> {
	update?: (parameter: Parameter) => void;
	destroy?: () => void;
}

export default function (node: HTMLBodyElement, color: string): ActionReturn<string> {
	node.style.setProperty('--color-main-bg', `#${color}`);

	return {
		update(color: string) {
			node.style.setProperty('--color-main-bg', `#${color}`);
		},
		destroy() {
			node.style.removeProperty('--color-main-bg');
		}
	};
}

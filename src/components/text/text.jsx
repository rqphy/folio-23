import { createElement } from "react"

export default function Text({
	children,
	tag = "p",
	size = "s",
	color = "typo",
	typo = "main",
}) {
	const element = createElement(
		tag,
		{ className: `text size-${size} color-${color} typo-${typo}` },
		children
	)
	return element
}

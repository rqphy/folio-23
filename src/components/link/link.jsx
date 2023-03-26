import Text from "../text/text"
import { Link as DOMLink } from "react-router-dom"

export default function Link({ to, children }) {
	return (
		<div className="link">
			<DOMLink to={to}>{children}</DOMLink>
		</div>
	)
}

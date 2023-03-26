import { Link } from "react-router-dom"

function LinkButton({ children, to }) {
	return (
		<Link to={to} className="cta">
			{children}
		</Link>
	)
}

function ExternalButton({ children, to }) {
	return (
		<a href={to} target="_blank" className="cta">
			{children}
		</a>
	)
}

export default function Button({ children, to, isExternal = null }) {
	return isExternal ? (
		<ExternalButton to={to}>{children}</ExternalButton>
	) : (
		<LinkButton to={to}>{children}</LinkButton>
	)
}

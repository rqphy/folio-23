import Text from "../text/text"
import Link from "../link/link"

export default function Header() {
	return (
		<>
			<header className="header">
				<Link to="/">
					<Text tag="p">Raphaël Ferreira</Text>
				</Link>
				<Text tag="p">Front-end / Creative developper</Text>
				<nav className="header__nav">
					<Link to="/works">
						<Text tag="p" size="s">
							Works
						</Text>
					</Link>
				</nav>
			</header>
		</>
	)
}

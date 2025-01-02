import Text from "../text/text"
import Link from "../link/link"

export default function Footer() {
	return (
		<footer>
			<div className="contact">
				<p>Contact me : fdev.raphael@gmail.com</p>

				<p>
					© {new Date().getFullYear()} Raphaël Ferreira. All rights
					reserved.
				</p>

				<ul className="contact__socials">
					<li>
						<a
							href="https://github.com/rqphy"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/raph-ferreira/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
			<svg
				width="3095"
				height="690"
				viewBox="0 0 3095 690"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M188 680V511H371C530 511 630 419 630 260C630 101 530 9.99998 371 9.99998H1.19209e-06V680H188ZM350 179C416 179 443 192 443 260C443 329 416 342 350 342H188V179H350ZM840.922 680L892.922 556H1210.92L1261.92 680H1477.92L1187.92 9.99998H918.922L629.922 680H840.922ZM1002.92 293L1045.92 180H1058.92L1102.92 293L1141.92 387H963.922L1002.92 293ZM1686.05 680V452H1763.05C1836.05 452 1856.05 466 1880.05 516L1960.05 680H2177.05L2094.05 512C2069.05 461 2047.05 428 1978.05 410V400C2106.05 384 2159.05 321 2159.05 215C2159.05 84 2066.05 9.99998 1889.05 9.99998H1498.05V680H1686.05ZM1686.05 179H1887.05C1942.05 179 1962.05 192 1962.05 245C1962.05 302 1942.05 312 1887.05 312H1686.05V179ZM2395.03 680V9.99998H2207.03V680H2395.03ZM2780.08 690C3006.08 690 3094.08 588 3094.08 473C3094.08 387 3050.08 303 2886.08 279L2676.08 248C2640.08 243 2628.08 233 2628.08 212C2628.08 183 2649.08 170 2745.08 170C2871.08 170 2892.08 186 2892.08 234V249H3080.08V243C3080.08 93 2978.08 -7.15256e-06 2765.08 -7.15256e-06C2523.08 -7.15256e-06 2440.08 112 2440.08 219C2440.08 327 2503.08 394 2628.08 411L2838.08 439C2893.08 446 2906.08 456 2906.08 480C2906.08 510 2894.08 519 2780.08 519C2654.08 519 2638.08 507 2638.08 462V441H2450.08V447C2450.08 617 2575.08 690 2780.08 690Z"
					fill="black"
				/>
			</svg>
		</footer>
	)
}

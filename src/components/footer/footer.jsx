import './footer.scss'
import { Link } from 'react-router-dom'
import Text from '../text/text'

export default function Footer()
{
    return <footer>
        <div className='contact'>
            <p>Contactez-moi : test@test.com</p>

            <ul className="contact__socials">
                <li>
                    <a href="https://github.com/rqphy" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rapha%C3%ABl-ferreira" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
            </ul>

            <Link to="/works" >
                <Text tag='p' size='s'>Projets</Text>
            </Link>
        </div>
        <svg width="2892" height="680" viewBox="0 0 2892 680" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M328 9.99997C384.667 9.99997 432.667 19 472 37C512 54.3333 542.333 79.9999 563 114C584.333 147.333 595 188.333 595 237C595 285.667 584.333 327 563 361C542.333 394.333 512 420 472 438C432.667 455.333 384.667 464 328 464H204V670H4.41074e-06V9.99997H328ZM295 316C325 316 348.333 309.667 365 297C381.667 283.667 390 263.667 390 237C390 210.333 381.667 190.667 365 178C348.333 164.667 325 158 295 158H204V316H295ZM1240.26 670H1030.26L993.258 533H792.258L754.258 670H550.258L772.258 9.99997H1017.26L1240.26 670ZM826.258 401H960.258L893.258 155L826.258 401ZM1635.85 9.99997C1717.85 9.99997 1781.18 29 1825.85 67C1871.18 104.333 1893.85 154.333 1893.85 217C1893.85 287 1871.85 340 1827.85 376C1783.85 412 1720.52 430 1637.85 430L1617.85 441H1497.85V670H1297.85V9.99997H1635.85ZM1602.85 302C1631.52 302 1652.85 296.667 1666.85 286C1681.52 274.667 1688.85 256.333 1688.85 231C1688.85 205.667 1681.52 187.333 1666.85 176C1652.85 164.667 1631.52 159 1602.85 159H1497.85V302H1602.85ZM1723.85 345L1931.85 670H1708.85L1547.85 381L1723.85 345ZM2200.09 9.99997V670H1996.09V9.99997H2200.09ZM2596.27 -1.66893e-05C2658.93 -1.66893e-05 2714.6 8.66664 2763.27 25.9999C2811.93 42.6666 2854.6 68.3333 2891.27 103L2802.27 234C2772.27 208.667 2740.27 189 2706.27 175C2672.93 160.333 2635.93 153 2595.27 153C2574.6 153 2557.93 155 2545.27 159C2532.6 163 2523.27 168.667 2517.27 176C2511.93 182.667 2509.27 190.333 2509.27 199C2509.27 209.667 2515.6 218.333 2528.27 225C2541.6 231.667 2559.93 237.667 2583.27 243L2683.27 266C2749.93 281.333 2799.6 304 2832.27 334C2864.93 363.333 2881.27 403.667 2881.27 455C2881.27 505 2868.6 546.667 2843.27 580C2818.6 613.333 2784.6 638.333 2741.27 655C2697.93 671.667 2648.93 680 2594.27 680C2550.93 680 2508.6 675.667 2467.27 667C2426.6 658.333 2389.27 646 2355.27 630C2321.27 613.333 2291.93 593.667 2267.27 571L2355.27 436C2373.27 453.333 2395.27 469 2421.27 483C2447.27 496.333 2474.93 507 2504.27 515C2533.6 523 2561.93 527 2589.27 527C2608.6 527 2624.27 525.333 2636.27 522C2648.93 518 2657.93 512.667 2663.27 506C2668.6 499.333 2671.27 491.333 2671.27 482C2671.27 470.667 2666.93 461.667 2658.27 455C2649.6 447.667 2633.27 441.333 2609.27 436L2499.27 411C2463.27 403 2429.93 392 2399.27 378C2368.6 364 2343.93 344.667 2325.27 320C2307.27 294.667 2298.27 261.667 2298.27 221C2298.27 177.667 2309.93 139.333 2333.27 106C2356.6 72.6666 2390.6 46.6666 2435.27 28C2479.93 9.33332 2533.6 -1.66893e-05 2596.27 -1.66893e-05Z" fill="black"/>
        </svg>
    </footer>
}
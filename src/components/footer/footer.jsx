import './footer.scss'

export default function Footer()
{
    return <footer>
        <div className='contact'>
            <p>Contactez-moi : test@test.com</p>

            <ul className="contact__socials">
                <li>Github</li>
                <li>LinkedIn</li>
            </ul>

            <p>Paris • 2023©</p>
        </div>
        <div className='location'>RAPHAËL</div>
    </footer>
}
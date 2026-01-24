export default function NetflixFooterComponent() {
    return (
        <div className="container" style={{ color: '#b3b3b3' }}>
            <p className="mb-4">Questions? Call 000-800-919-1743</p>
            <div className="row">
                <div className="col-md-3 col-6 mb-3">
                    <ul className="list-unstyled d-flex flex-column gap-2">
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">FAQ</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Investor Relations</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Privacy</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Speed Test</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-6 mb-3">
                    <ul className="list-unstyled d-flex flex-column gap-2">
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Help Center</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Jobs</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Cookie Preferences</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Legal Notices</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-6 mb-3">
                    <ul className="list-unstyled d-flex flex-column gap-2">
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Account</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Ways to Watch</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Corporate Information</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Only on Netflix</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-6 mb-3">
                    <ul className="list-unstyled d-flex flex-column gap-2">
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Media Center</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Terms of Use</a></li>
                        <li><a href="#" className="text-decoration-none text-light opacity-75 small">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                <select className="form-select bg-black text-white border-secondary" style={{ width: 'auto' }}>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <p className="mt-3 small">Netflix India</p>
            </div>
        </div>
    )
}
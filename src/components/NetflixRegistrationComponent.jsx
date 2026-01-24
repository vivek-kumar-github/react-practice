export default function NetflixRegisterComponent() {
    return (
        <div className="px-3">
            <p className="fs-5 text-center pb-3">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="d-flex justify-content-center">
                <div className="input-group input-group-lg" style={{ maxWidth: '500px' }}>
                    <input type="email" className="form-control bg-dark text-white border-secondary" placeholder="Email address" style={{ background: 'rgba(0,0,0,0.5)' }} />
                    <button className="btn btn-danger fw-bold fs-4 d-flex align-items-center px-4">
                        Get Started
                        <span className="bi bi-chevron-right ms-2 fs-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default function NetflixHeaderComponent() {
    return (
        <>
            <div className="d-flex justify-content-between p-4">
                <div>
                    <h1 className="text-danger fw-bold m-0" style={{ fontSize: '2.5rem', letterSpacing: '2px' }}>NETFLIX</h1>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <select className="form-select bg-black text-white border-secondary" style={{ width: 'auto' }}>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button className="btn btn-danger btn-sm fs-6 fw-bold px-3 py-1">Sign In</button>
                </div>
            </div>
        </>
    )
}
import './NetflixIndexComponent.css'
import NetflixHeaderComponent from './NetflixHeaderComponent'
import NetflixMainComponent from './NetflixMainComponent'
import NetflixRegisterComponent from './NetflixRegistrationComponent'
import NetflixFooterComponent from './NetflixFooterComponent'

export default function NetflixIndexComponent() {
    return (
        <div className="netflix-bg">
            <div className="box">
                <header>
                    <NetflixHeaderComponent />
                </header>
                <section className="d-flex justify-content-center align-items-center flex-grow-1">
                    <main className="text-center w-100">
                        <NetflixMainComponent />
                        <NetflixRegisterComponent />
                    </main>
                </section>
                <footer className="p-2">
                    <NetflixFooterComponent />
                </footer>
            </div>
        </div>
    )
}

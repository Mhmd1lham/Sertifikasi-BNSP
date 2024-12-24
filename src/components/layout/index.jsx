import Container from "../container";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout({children}) {
    return (
        <>
            <Header />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
import StyledHero from "./Hero.styled";

function Hero() {
    return (
        <StyledHero>
            <div className="detail">
                <h2>Your trusted partner in Technology and Innovation</h2>
                <p>At TechNova we give out clients solutions they need with innovation and determination</p>
            </div>
            <div className="poster">
                <img
                    src={`https://nos.wjv-1.neo.id/technova/assets/images/about-us.webp`}
                    alt="placeholder"
                />
            </div>
        </StyledHero>
    );
}

export default Hero;
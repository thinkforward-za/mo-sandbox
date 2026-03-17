import Navbar from "./components/Navbar";
import Section from "./components/Section";
import HeroTitle from "./components/HeroTitle";
import HeroCTA from "./components/HeroCTA";
import downArrow from "/src/assets/down.svg";

function App() {
    return (
        <body>
            <Navbar />
            <Section idName="modelS" classes="car-section">
                <img
                    src="./images/ModelS.jfif"
                    alt="Model S image"
                    className="car-img"
                />

                <HeroTitle
                    divClasses="car-details transform-50"
                    titleClasses="model-name"
                    taglineClasses="tag-line"
                    title="Model S"
                    tagline="Order Online for "
                    emphasisText="Touchless Delivery"
                />
                <HeroCTA divClasses="car-buttons transform-50" />

                <a href="#model3">
                    <img
                        className="down-svg"
                        src={downArrow}
                        alt="down arrow"
                    />
                </a>
            </Section>

            <Section idName="model3" classes="car-section">
                <img
                    src="./images/Model3.jfif"
                    alt="Model 3 image"
                    className="car-img"
                />

                <HeroTitle
                    divClasses="car-details transform-50"
                    titleClasses="model-name"
                    taglineClasses="tag-line"
                    title="Model 3"
                    tagline="Order Online for "
                    emphasisText="Touchless Delivery"
                />
                <HeroCTA divClasses="car-buttons transform-50" />

                <a href="#modelX">
                    <img
                        className="down-svg"
                        src={downArrow}
                        alt="down arrow"
                    />
                </a>
            </Section>

            <Section idName="modelX" classes="car-section">
                <img
                    src="./images/ModelX.jfif"
                    alt="Model X image"
                    className="car-img"
                />

                <HeroTitle
                    divClasses="car-details transform-50"
                    titleClasses="model-name"
                    taglineClasses="tag-line"
                    title="Model X"
                    tagline="Order Online for "
                    emphasisText="Touchless Delivery"
                />
                <HeroCTA divClasses="car-buttons transform-50" />

                <a href="#modelY">
                    <img
                        className="down-svg"
                        src={downArrow}
                        alt="down arrow"
                    />
                </a>
            </Section>

            <Section idName="modelY" classes="car-section">
                <img
                    src="./images/ModelY.jfif"
                    alt="Model Y image"
                    className="car-img"
                />

                <HeroTitle
                    divClasses="car-details transform-50"
                    titleClasses="model-name"
                    taglineClasses="tag-line"
                    title="Model Y"
                    tagline="Order Online for "
                    emphasisText="Touchless Delivery"
                />
                <HeroCTA divClasses="car-buttons transform-50" />

                <a href="#solarRoof">
                    <img
                        className="down-svg"
                        src={downArrow}
                        alt="down arrow"
                    />
                </a>
            </Section>

            <Section idName="solarRoof" classes="car-section">
                <img
                    src="./images/SolarRoof.jfif"
                    alt="Solar Roof image"
                    className="car-img"
                />

                <HeroTitle
                    divClasses="car-details transform-50"
                    titleClasses="model-name"
                    taglineClasses="tag-line"
                    title="Solar Roof"
                    tagline="Order Online for "
                    emphasisText="Touchless Delivery"
                />
                <HeroCTA divClasses="car-buttons transform-50" />

                <a href="#solarPanels">
                    <img
                        className="down-svg"
                        src={downArrow}
                        alt="down arrow"
                    />
                </a>
            </Section>

            <Section idName="solarPanels" classes="car-section">
                <img
                    src="./images/SolarPanels.jfif"
                    alt="Solar Panels image"
                    className="car-img"
                />

                <HeroTitle
                    divClasses="car-details transform-50"
                    titleClasses="model-name"
                    taglineClasses="tag-line"
                    title="Solar Panels"
                    tagline="Order Online for "
                    emphasisText="Touchless Delivery"
                />
                <HeroCTA divClasses="car-buttons transform-50" />

                {/* <a href="#solarPanels">
                    <img
                        className="down-svg"
                        src={downArrow}
                        alt="down arrow"
                    />
                </a> */}
            </Section>
        </body>
    );
}

export default App;

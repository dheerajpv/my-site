import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
    return (
        <div>
            <h1
                className="text-black dark:text-white text-4xl m-2 mb-4"
                style={{ fontFamily: "Montserrat" }}
            >
                My Portfolio
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-2 p-4 mt-4">
                <PortfolioCard
                    title="AeroBot"
                    description="An open-source, fully featured Discord bot."
                    imgSrc="/img/portfolio/aero-bot/icon.png"
                    tags={["discord.js", "ts"]}
                    href="/aero-bot"
                />
                <PortfolioCard
                    title="AeroClient"
                    description="An open-source framework for discord.js"
                    imgSrc="https://cdn.discordapp.com/avatars/809548335349497867/fe8ccc9e0055882febdd46d078c458e1.webp?size=512"
                    tags={["ts", "discord.js", "library"]}
                    href="https://aero-ware.github.io/aeroclient"
                />
                <PortfolioCard
                    title="Enigma"
                    description="NewtonHACKS 2020 Submission, along with team"
                    tags={["react", "crypto"]}
                    href="https://github.com/dheerajpv/newtonhacks2020-enigma"
                />
                <PortfolioCard
                    title="Exoplanet Enterprise"
                    description="HackMIT Blueprint 2021 Submission, along with my team"
                    imgSrc="https://cdn.discordapp.com/attachments/739879501067976756/813181527180443658/Screen_Shot_2021-02-21_at_5.46.14_PM.png"
                    tags={["react", "python", "flask"]}
                    href="https://github.com/dheerajpv/blueprint-2021"
                />
            </div>
            <h3
                className="text-black dark:text-white text-3xl m-2"
                style={{ fontFamily: "Montserrat" }}
            >
                More projects soon...
            </h3>
        </div>
    );
};

export default Portfolio;

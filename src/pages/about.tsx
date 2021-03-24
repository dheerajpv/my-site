import Head from "next/head";
import Counter from "../components/Counter";
import LangInfo from "../components/LangInfo";
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <>
            <Head>
                <title key="title">Dheeraj Prakash - About</title>
                <meta
                    key="og:title"
                    name="og:title"
                    content="Dheeraj Prakash - About"
                />
                <meta
                    key="og:description"
                    name="og:description"
                    content="About Dheeraj Prakash - A student aspiring Computer Scientist"
                />
            </Head>
            <main className={`dark:text-white pl-2 pr-2 ${styles["about"]}`}>
                <h1 className={styles["title"]}>About Me</h1>
                <div className="flex flex-col md:flex-row p-4">
                    <img
                        src="/img/profile-img.jpg"
                        className="m-2 rounded-md block h-1/4 md:inline md:w-1/4"
                    />
                    <p
                        className="text-xl md:text-2xl"
                        style={{
                            fontFamily: "Montserrat, Open Sans, sans-serif",
                            fontWeight: "lighter",
                        }}
                    >
                        I have a passion for physics, engineering, and computer
                        science. I am currently a sophomore at Quincy High
                        School, and I am taking Principles Of Engineering,
                        Chemistry, and Introduction to Programming and
                        Statistics, just to name a few of my classes this year.
                        I am currently looking for internships, summer programs
                        and jobs in the compupter science industry.
                    </p>
                </div>
                <h2 className="pl-4">At a Glance</h2>
                <section className="flex flex-row justify-around mb-4">
                    <Counter
                        iconClass="fas fa-square-root-alt"
                        num={42}
                        postNum="nd"
                        info="National Rank in 2019 Math Kangaroo"
                    />
                    <Counter
                        iconClass="fas fa-code"
                        num={5}
                        info="Programming Languages I Know"
                    />
                    <Counter
                        iconClass="fas fa-scroll"
                        num={12}
                        info="Online Programming Courses Taken"
                    />
                    <Counter
                        iconClass="fas fa-cog"
                        num={4}
                        postNum="th"
                        info="State Rank for our Robotics Team"
                    />
                </section>
                <h2 className="pl-4">Facts about me</h2>
                <section
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-6 m-3 ml-0"
                    style={{ fontSize: "1.25rem" }}
                >
                    <ul className={styles["about-list"]}>
                        <li>
                            <i className="fas fa-chevron-right" />
                            <strong>History Bowl:</strong> I was one of a few
                            people to recreate Quincy High School's History Bowl
                            team after the old team members graduated. I am also
                            part of the FulLTilt FTC team that also makes a
                            smaller robot for a different challenge.
                        </li>
                        <li>
                            <i className="fas fa-chevron-right" />
                            <strong>Robotics Team:</strong> I am a programmer in{" "}
                            <a
                                href="https://hyperonline.org"
                                target="_blank"
                                rel="noopener"
                            >
                                Team Hyper
                            </a>{" "}
                            and I am part of the Programming Leadership Team
                            this year.
                        </li>
                        <li>
                            <i className="fas fa-chevron-right" />
                            <strong>Other Interests:</strong> I am interested in
                            all things space: I watch rocket launches, read up
                            on space news, and watch astronomy videos.
                        </li>
                        <li>
                            <i className="fas fa-chevron-right" />
                            <strong>Math</strong> I am in the 9th grade Honors
                            class in Russian School of Mathematics and I placed
                            42nd in the country in last year's Math Kangaroo.
                        </li>
                    </ul>
                    {/* todo: add another list here */}
                </section>
                <h2 className="pl-4">Skills</h2>
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-6 m-3 ml-0 mb-5">
                    <LangInfo
                        lang="Java"
                        info="I know Java concepts like classes, Collections,
                            lambdas, and functional programming. I have used my
                            Java skills mostly in code for robotics."
                    />
                    <LangInfo
                        lang="Python"
                        info="I know python basic python concepts like classes,
                            lists, and some standard library components. I am
                            learning machine learning libraries like
                            scikit-learn and TensorFlow."
                    />
                    <LangInfo
                        lang="JavaScript/TypeScript"
                        info="I know JS frameworks and concepts like React.
                            I have made multiple web projects to learn web
                            development topics like React and discord bots to
                            increase my JavaScript skills. I also know basic
                            React Native concepts."
                    />
                    <LangInfo
                        lang="C#"
                        info="I have learned some C# to make some basic
                            Windows applications and am in the process of
                            learning some basic Unity development."
                    />
                    <LangInfo
                        lang="C++"
                        info="I am currently learning basic C++ to make
                        fast-performing applications and to learn development
                        in Unreal Engine and computer vision using OpenCV."
                    />
                </section>
            </main>
        </>
    );
};

export default About;

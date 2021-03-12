const Error = () => {
    return (
        <div
            className={`flex flex-col text-black dark:text-white p-3`}
            style={{
                height: "calc(100vh - 64px)",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <p
                className="text-7xl"
                style={{ fontFamily: "Montserrat", fontWeight: "bold" }}
            >
                404
            </p>
            <div className="text-2xl mt-4" style={{ fontFamily: "Open Sans" }}>
                You seem to be lost. Go back to the{" "}
                <a href="/" className="inline text-blue-400 hover:underline">
                    homepage
                </a>{" "}
                or the{" "}
                <a
                    href="/blog"
                    className="inline text-blue-400 hover:underline"
                >
                    blog
                </a>
                .
            </div>
        </div>
    );
};

export default Error;

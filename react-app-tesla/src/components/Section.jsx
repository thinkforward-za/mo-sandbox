const Section = ({ idName, classes, children }) => {
    return (
        <section id={idName} className={classes}>
            {children}
        </section>
    );
};

export default Section;

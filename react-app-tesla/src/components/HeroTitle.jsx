const HeroTitle = ({
    title,
    tagline,
    divClasses,
    titleClasses,
    taglineClasses,
    emphasisText,
}) => {
    return (
        <div className={divClasses}>
            <h1 className={titleClasses}>{title}</h1>
            <h2 className={taglineClasses}>
                {tagline}
                <span className="underline cursor-pointer">{emphasisText}</span>
            </h2>
        </div>
    );
};

export default HeroTitle;

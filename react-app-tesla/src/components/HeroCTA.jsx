const HeroCTA = ({ divClasses }) => {
    return (
        <div className={divClasses}>
            <button type="button" className="btn">
                Custom Order
            </button>
            <button type="button" className="btn inventory">
                Existing Inventory
            </button>
        </div>
    );
};

export default HeroCTA;

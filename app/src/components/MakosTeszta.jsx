const Asztalfoglalas = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="kep">
                        <img 
                            src="kepek/teszta.jpg" 
                            alt="tészta"
                            style={{
                                width: '100%',
                            }} 
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="leiras">
                        <h1>Mákos tészta</h1>
                        <h4>Összetevők</h4>
                        <ul>
                            <li>első</li>
                            <li>második</li>
                            <li>harmadik</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asztalfoglalas;

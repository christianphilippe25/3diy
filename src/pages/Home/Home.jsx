import './css.css'

function App(){
    return (
        <main>
            <div className="container">
                <div className="paths">
                    <div className="print">
                        <a href="">Quero imprimir algo</a>
                    </div>
                    <div className="3dprinter">
                        <a href="">Procuro uma impressora</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className='center'>Tipos de Impressoras</h2>
                <div className="printers">
                    <div className="cartesiana">
                        <h4>Cartesiana</h4>
                    </div>
                    <div className="polar">
                        <h4>Polar</h4>
                    </div>
                    <div className="resina">
                        <h4>Resina</h4>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default App;
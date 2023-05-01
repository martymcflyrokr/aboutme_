import "../sobremi/sobremi.css"

import { Col, Row } from "react-bootstrap"

const SobreMi = (() => {

    const skills = [

        {title : 'HTML', link:'#sobremi'},
        {title : 'CSS', link:"#experiencia"},
        {title : 'JAVASCRIPT', link:"#proyectos"},
        {title : 'REACT JS', link:"#contacto"},
        {title : 'GITHUB', link:"#resume"},
        {title : 'FIREBASE', link:"#resume"},
        {title : 'ADOBE PS', link:"#resume"},
        {title : 'ADOBE AI', link:"#resume"},
      
    ];

    return(
        <section className="seccion-sobre-mi">
            <h2>Sobre mí</h2>
            <Row className="row-texto-e-imagen" >
                <Col className="columna-texto" sm={12} md={12} lg={6} xl={6} >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quaerat tempora
                        provident aliquam nesciunt suscipit quas qui temporibus corrupti, ea unde magni
                        doloremque ad, ullam, consectetur esse voluptatem! Perspiciatis iusto ab culpa,
                        fuga amet dolorum totam aspernatur explicabo, in, consectetur accusamus
                        reprehenderit id enim. Excepturi ab, debitis soluta architecto maiores mollitia
                    </p>      
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quaerat tempora
                        provident aliquam nesciunt suscipit quas qui temporibus corrupti, ea unde magni
                        doloremque ad, ullam, consectetur esse voluptatem! Perspiciatis iusto ab culpa,
                        fuga amet dolorum totam aspernatur explicabo, in, consectetur accusamus
                        reprehenderit id enim. Excepturi ab, debitis soluta architecto maiores mollitia
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quaerat tempora
                        provident aliquam nesciunt suscipit quas qui temporibus corrupti, ea unde magni
                        doloremque ad, ullam, consectetur esse voluptatem! Perspiciatis iusto ab culpa,
                        fuga amet dolorum totam aspernatur explicabo, in, consectetur accusamus
                        reprehenderit id enim. Excepturi ab, debitis soluta architecto maiores mollitia
                    </p>
                    <ul className="lista-skills">
                        <Row className="grilla-sobre-mi">
                            <div className="contenedor-skills">
                             {skills.map((item, link, index) => {
                                return (
                                        <div key={index} class='contenedor-texto-skills'>
                                            <p class='texto-skills'>
                                                * {item.title}
                                            </p>
                                        </div>
                                        )
                                    })}
                            </div>
                        </Row>
                    </ul>            
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} className="columna-imagen">
                    <div className="contenedor-img">
                        <img src="foto_mm.jpg" className="imagen-mia" alt="unafoto"/>
                    </div>
                </Col>
            </Row>
        </section>
    )
})

export default SobreMi
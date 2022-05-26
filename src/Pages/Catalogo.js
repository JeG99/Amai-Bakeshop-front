import React from 'react'
import {Button, Card} from "react-bootstrap";
import Navbar from "../components/Navbar"
import Item from "../components/Item"
import pastel1 from '../assets/pastel1.jfif';
import pastel2 from '../assets/pastel2.jfif';
import pastel3 from '../assets/pastel3.jfif';
import pastel4 from '../assets/pastel4.jfif';
import pastel5 from '../assets/pastel5.jfif';
import pastel6 from '../assets/pastel6.jfif';
import pastel7 from '../assets/pastel7.jfif';
import pastel8 from '../assets/pastel8.jfif';
import pastel9 from '../assets/pastel9.jfif';
import pastel10 from '../assets/pastel10.jfif';
import pastel11 from '../assets/pastel11.jfif';
import pastel12 from '../assets/pastel12.jfif';
import pastel13 from '../assets/pastel13.jfif';

function Catalogo() {

    return (
        <div className="Formato">
            <Navbar/>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row mt-3">
                    <div className='container d-flex justify-content-center'>
                        <h2>Catalogo de Pasteles</h2>
                    </div>
                    <Item title='Pastel 1' price='350' image={pastel1} description='Descripción breve del producto'/>
                    <Item title='Pastel 2' price='350' image={pastel2} description='Descripción breve del producto'/>
                    <Item title='Pastel 3' price='350' image={pastel3} description='Descripción breve del producto'/>
                    <Item title='Pastel 4' price='350' image={pastel4} description='Descripción breve del producto'/>
                    <Item title='Pastel 5' price='350' image={pastel5} description='Descripción breve del producto'/>
                    <Item title='Pastel 6' price='350' image={pastel6} description='Descripción breve del producto'/>
                </div>
            </div>
        </div>
    )
}

export default Catalogo
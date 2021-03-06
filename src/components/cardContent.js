import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
    CardHeader
    
  } from 'reactstrap'
//import Primario from './primario';
//import './primario/index.css'
//import '../app.css'
import '../css/cardcontent.css'
import '../css/header.css'
import '../css/footer.css'
import Header from './header';
import Footer from './footer';

import Button from '../components/button'


function cardContent() {
    
    const categoria = ['Primeiro', 'Segundo', 'Terceiro'];
    const subcategorias = [
        [
            {
                name : 'Primeiro.primeiro',
                url : 'Primeiro.primeiro'
            },
            {
                name : 'Primeiro.segundo',
                url : 'Primeiro.segundo'
            }
        ],
        [
            {
                name : 'Segundo.primeiro',
                url : 'Segundo.primeiro'
            },
            {
                name : 'Segundo.segundo',
                url : 'Segundo.segundo'
            }
        ],
        [
            {
                name : 'Terceiro.primeiro',
                url : 'Terceiro.primeiro'
            },
            {
                name : 'Terceiro.segundo',
                url : 'Terceiro.segundo'
            }
        ]
    ];

    return (
        <Card className="card-bg">
            <CardHeader>
                <Header />
            </CardHeader>
            <CardTitle>
                <h1>
                    Salem Aziel 
                </h1> 
            </CardTitle>
        <CardBody>
        
          
            <CardSubtitle>
                <h2>System Administrator. <br />
                    Web Developer. <br />
                    <br />
                    Hit me up.
                </h2>
            </CardSubtitle>
           
            <CardText>
                <div style={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                }}>
              {/**<Button primary prefetch href="/gallery">Gallery display</Button>**/}
              <Button primary prefetch href="https://behance.net/codestaff-salem">Portfolio on Behance</Button>
              
              <Button primary prefetch href="https://codestaff-salem.appointlet.com/s/1-hour-consultation/salem">Book Consultation</Button>
              </div>
                    {/**<div className='items'>
                        <div className='items-head'>
                            <h3>Linktree Dashboard</h3>
                            <hr/>
                        </div>
                            {categoria.map( (x, y) => {
                              return <Primario Cat={x} Sub={subcategorias[y]} key={x} />;
                                })}
                            </div>**/}
                
                
                </CardText>
  
                
        </CardBody>

        <Footer />
        </Card>
    )
}

export default cardContent
import { Link } from 'react-router-dom';
import React from 'react';
import { Button, Container, InputGroup } from 'reactstrap';
import { ThemeContext, themes } from './theme/ThemeContext';

const Nav = () => {
  const [darkMode, setDarkMode] = React.useState(true);

    return (
      <>



    <div id="hat" class="nav nav-horizontal justify-content-center  p-2 mb-5">
  
        <li class="nav-item"><Link class="nav-link "to='./fooldal'>Főoldal</Link></li>
        <li class="nav-item"><Link class="nav-link "to='./asztalfoglalas'>Asztalfoglalás</Link></li>
        <li class="nav-item"><Link class="nav-link"to='./etlap'>Étlap</Link></li>
        <li class="nav-item"><Link class="nav-link "to='./rendeles'>Rendelés</Link></li>
        <span style={{width:"0px"}}><Link class="nav-link "to='./fooldal'> <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <button 
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
                id="gomb"
              >
              </button>
            )}
          </ThemeContext.Consumer>
        </InputGroup> </Link></span>
        </div>
     
       
        <div class="container center" id="navkep">
          
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
          
            
              <div class="carousel-inner ">
          
                <div class="item active ">
                  <img  src="https://heartofthecity.co.nz/sites/default/files/styles/ratio_5_x_3_medium_/public/2019-09/GG3%20big%20b-17%20White%20%2B%20Wong_s.jpg?itok=SnPR47ao" style={{width: '100%', height:'400px'}}/>
                  <div class="carousel-caption " >
                    <h1>Ázsia kincsei</h1>

                        <h4 class="cszoveg">Ha ránk találsz, kincset találsz!</h4>
                  </div>
                </div>
          
                <div class="item">
                    <img src="https://sdg-migration-id.s3.amazonaws.com/Interior-Design-GAO-Architects-Han-_KAM2972-2005.jpg" style={{width: '100%', height:'400px'}}/>
                    <div class="carousel-caption">
                      <h1>Ázsia kincsei</h1>
                      <h4 class="cszoveg"> Fedezd fel páratlan ízeinket!</h4>
                    </div>
                  </div>
              
                  <div class="item">
                    <img src="https://blog.yelp.com/wp-content/uploads/2020/02/Full-Article-Feature-Image-900x354-1.png" style={{width: '100%', height:'400px'}} />
                    <div class="carousel-caption" >
                      <h1 >Ázsia kincsei</h1>
                      <h4 class="cszoveg"> Akár otthonod kényelméből is élvezheted!</h4>
                    </div>
                  </div>
            
              </div>
          
              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
              
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
            
              </a>
            </div>
          </div>
          
  

</>
    )
}

export default Nav;

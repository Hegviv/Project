import { Link } from 'react-router-dom';
import React from 'react';

const Fololdal = () => {
    return (
<>


  
<div id="alaphatter" className="container ">

    <div id="kep" className="row justify-content-center">
        <div className=" row col-sm-12"><h2>Kínálatuk</h2></div>
        
        <div className="col-sm-3 text-center"><img src="https://i.pinimg.com/564x/f1/8c/cf/f18ccffe2f416604b9e6dc3d8865142c.jpg" alt="" className="img-fluid " style={{borderRadius:"20%" }}/> Japán</div>
        <div className="col-sm-3 text-center" ><img src="https://i.pinimg.com/564x/25/55/57/2555570e24e0a5a5fae689a504c9a63b.jpg" alt="" className="img-fluid " style={{borderRadius:"20%" }}/>Kínai </div>
        <div className="col-sm-3 text-center"><img src="https://i.pinimg.com/564x/fc/70/04/fc70040f872944c62aa50134999cd7e1.jpg" alt="" className="img-fluid" style={{borderRadius:"20%" }}/>Koreai </div>
    </div>
           

    <div id="ro">
        <h3 id className="rolunkfelir">Rólunk</h3 >
        <div className="row">
            <div className="col-sm-6 ">
              
              
                <p>
                Szeretettel várunk minden kedves vendéget Ázsiai stílusú éttermünkben, ahol minden tőlünk telhetőt megtesznk azért, hogy átadhassunk a keleti gasztronómia élményeit vendégeinknek.
                    Képzett és szenvedélyes személyzetünk évek óta alkalmazza gasztronómiai és vendéglátási tudását és ennek eredményéül az évek során csupán dícséreteket kapunk mind vendégeinktől, mind kritikusoktól.
                </p>
                <p>
                Éttermünk a Szegedi Szent György tér 3. szám alatt helyezkedik el, a belvárostól 5 perc sétára. Az alacsony jármű forgalom és
                     a szomszédos park ideális helyet nyújt azok számára akik némi kikapcsolódásra vágynak. A teraszonkun bőséggel előforduló ritka keleti növények továbbá fokozzák éttermünk kulturális autentikusságát.
                     Ezen felül szándékunkban áll további két éttermet nyitni a város különböző pontjain, amik magukba foglalják a belvárost és a Tisza túlpartján fekvő Újszegedet is.
                </p>
            </div>

            <div className="col-sm-6">
                <img src="https://i.pinimg.com/564x/49/1c/8f/491c8fbc7e37f1ab551f0671c7d2afeb.jpg" className="img-fluid" alt="" title=""/>
            </div> 
        </div>      
    </div>
</div>

<div className="container">
    <h3 className="row">Szakácsaink</h3>
                
    <table  className="table-image">

        <tbody className="text-light">
            <tr>
  
                <td className="w-25">
                    <img src="https://i.pinimg.com/236x/81/d2/bc/81d2bc7ac156b421c39b60a3140044c2.jpg" className="img-fluid " alt=""style={{borderRadius:"50%" }}/>
                </td>
                <td >Nagy Antal</td>

                <td className="w-25 ">
                    <img src="https://i.pinimg.com/564x/99/6a/9c/996a9cdad74da29715436034bc1e2a74.jpg" className="img-fluid " alt="" style={{borderRadius:"50%" }}/>
                </td>
                <td >Fábián Dénes</td>
            </tr>
            <tr>
     
                <td className="w-25">
                    <img src="https://i.pinimg.com/236x/cf/f6/a0/cff6a03c23179fa22428191f0268f5ce.jpg" className="img-fluid " alt="" style={{borderRadius:"50%" }}/>
                </td>
                <td> Horváth Csilla</td>

                <td className="w-25">
                    <img src="https://i.pinimg.com/236x/8c/39/a8/8c39a89a6b17a9f42bcc2bb0b1f2424c.jpg" className="img-fluid " alt="" style={{borderRadius:"50%" }}/>
                </td>
                <td> Károlyi Ádám</td>
      
            </tr>
        </tbody>
    </table>   
</div>
</>
    )
}

export default Fololdal;
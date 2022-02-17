import { Link } from 'react-router-dom';

const Fololdal = () => {
    return (
<>
<div id="al" class="container ">

    <div id="kep" class="row justify-content-center ">
        <div class=" row col-sm-12"><h2>Kínálatuk</h2></div>
        
        <div class="col-sm-3 text-center"><img src="https://i.pinimg.com/564x/f1/8c/cf/f18ccffe2f416604b9e6dc3d8865142c.jpg" alt="" class="img-fluid " style={{borderRadius:"20%" }}/> Japán</div>
        <div class="col-sm-3 text-center" ><img src="https://i.pinimg.com/564x/25/55/57/2555570e24e0a5a5fae689a504c9a63b.jpg" alt="" class="img-fluid " style={{borderRadius:"20%" }}/>Kínai </div>
        <div class="col-sm-3 text-center"><img src="https://i.pinimg.com/564x/fc/70/04/fc70040f872944c62aa50134999cd7e1.jpg" alt="" class="img-fluid" style={{borderRadius:"20%" }}/>Koreai </div>
    </div>
           

    <div id="ro">
        <h3 id class="text-light">Rólunk</h3 >
        <div class="row">
            <div class="col-sm-6 text-light">
              
                <p>
                (valami szoveg majd az éteremről)
                Aliquam vel porta lorem, sed elementum nulla. Duis gravida ut lacus sit amet pellentesque. Pellentesque faucibus, magna sit amet malesuada volutpat, sem sem rhoncus nibh, ac auctor turpis ex sed quam. Ut ut magna cursus, tempor ex in, hendrerit mauris. Donec facilisis lacus in magna vulputate, sit amet tincidunt magna sollicitudin. Nunc quis diam purus. Aenean at ante est. Etiam lobortis dignissim erat, vitae varius justo. Nulla ipsum arcu, facilisis ac dapibus posuere, tincidunt ac felis. Donec blandit maximus urna, a dictum odio gravida non. Nam tempus molestie metus vulputate tincidunt.
                </p>
                <p>
                Aliquam vel porta lorem, sed elementum nulla. Duis gravida ut lacus sit amet pellentesque. Pellentesque faucibus, magna sit amet malesuada volutpat, sem sem rhoncus nibh, ac auctor turpis ex sed quam. Ut ut magna cursus, tempor ex in, hendrerit mauris. Donec facilisis lacus in magna vulputate, sit amet tincidunt magna sollicitudin. Nunc quis diam purus. Aenean at ante est. Etiam lobortis dignissim erat, vitae varius justo. Nulla ipsum arcu, facilisis ac dapibus posuere, tincidunt ac felis. Donec blandit maximus urna, a dictum odio gravida non. Nam tempus molestie metus vulputate tincidunt.
                </p>
            </div>

            <div class="col-sm-6">
                <img src="https://i.pinimg.com/564x/49/1c/8f/491c8fbc7e37f1ab551f0671c7d2afeb.jpg" class="img-fluid" alt="" title=""/>
            </div> 
        </div>      
    </div>
</div>

<div class="container ">
    <h3 class="row">Szakácsaink</h3>
                
    <table  class="table-image">

        <tbody class="text-light">
            <tr>
  
                <td class="w-25">
                    <img src="https://i.pinimg.com/236x/81/d2/bc/81d2bc7ac156b421c39b60a3140044c2.jpg" class="img-fluid " alt=""style={{borderRadius:"50%" }}/>
                </td>
                <td >Nagy Antal</td>

                <td class="w-25 ">
                    <img src="https://i.pinimg.com/564x/99/6a/9c/996a9cdad74da29715436034bc1e2a74.jpg" class="img-fluid " alt="" style={{borderRadius:"50%" }}/>
                </td>
                <td >Fábián Dénes</td>
            </tr>
            <tr>
     
                <td class="w-25">
                    <img src="https://i.pinimg.com/236x/cf/f6/a0/cff6a03c23179fa22428191f0268f5ce.jpg" class="img-fluid " alt="" style={{borderRadius:"50%" }}/>
                </td>
                <td> Horváth Csilla</td>

                <td class="w-25">
                    <img src="https://i.pinimg.com/236x/8c/39/a8/8c39a89a6b17a9f42bcc2bb0b1f2424c.jpg" class="img-fluid " alt="" style={{borderRadius:"50%" }}/>
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
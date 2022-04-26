
import Kosar from "./Kosar";
import Etelek from "./Etelek";
import Kosarhoz from "./Kosarhoz";
import { useState } from "react";

const Etlap = () => {
    const { termek } = Etelek;
    const [kosarElem, setkosarElem] = useState([]);
    const onAdd = (termek) => {
        const exist = kosarElem.find(x => x.id === termek.id);
        if(exist) {
            setkosarElem(kosarElem.map(x => x.id === termek.id ? {...exist, qty: exist.qty + 1} : x
                )
                );
        } else {
            setkosarElem([...kosarElem, {...termek, qty: 1}]);
        }
    }
    return (
        <div className="App">
            <div>
                <Kosarhoz onAdd={onAdd} termek={termek}></Kosarhoz>
                <Kosar onAdd={onAdd}>kosarElem={kosarElem}</Kosar>
            </div>
        </div>
    )
}

export default Etlap;

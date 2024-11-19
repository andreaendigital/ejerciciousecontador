import { useState } from "react";

function Contador() {
  const [contar, setContar] = useState(0);
  return (
    <>
      <button onClick={() => setContar((contar) => contar + 1)}> ME GUSTA</button>
      <button onClick={() => setContar((contar) => contar - 1)}> NO ME GUSTA</button>
      <button onClick={() => { if (contar > 0) setContar(contar - 1); }}> NO ME GUSTA</button>

      <p>Contador {contar} </p>
    </>
  );
}
export default Contador;



// const incrementar = () => setContador(contador + 1);
//   const decrementar = () => { if (contador > 0) setContador(contador - 1);
//   };

//   return (
//     <div>
//       <h1>Contador de Me gusta: {contador}</h1>
//       <button onClick={incrementar}>Me gusta</button>
//       <button onClick={decrementar}>Quitar Me gusta</button>
//     </div>
//   );
// }
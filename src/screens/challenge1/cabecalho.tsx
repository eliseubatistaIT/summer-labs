// Referência: https://bobbyhadz.com/blog/react-optional-props-typescript

export interface CabecalhoProps {
    titulo: string; // 👈️ required (no question mark)
    subtitulo?: string// 👈️ marked optional
}

export default function Cabecalho({titulo, subtitulo} : CabecalhoProps) {
    // if (subtitulo) { // se contém subtítulo
    //     return (
    //         <div>
    //           <h2>{titulo}</h2>
    //           <h4>{subtitulo}</h4>
    //         </div>
    //     );
    // }
    // else {
    //     return (
    //         <div>
    //           <h2>{titulo}</h2>
    //         </div>
    //     );
    // }
    return (
        <div>
            <h2>{titulo}</h2>
            {subtitulo && <h4>{subtitulo}</h4>}
        </div>
    );
}
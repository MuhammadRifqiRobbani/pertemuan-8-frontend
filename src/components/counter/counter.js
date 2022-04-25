import { useState } from "react";

function Counter() {
    // membuat variaebel state
    // mengembalikan 2 data 
    // nilai saat ini = 0
    // fungsi untuk mengubah state
    const [hasil, setHasil] useState(0);

    function tambah() {
        // jalanin fungsi setHasil
        // untuk mengubah state
        setHasil(hasil + 1);
    }

    return ( <
        p > hasil: {
            hasil
        } < /p> <
        div > < button > Tambah < /button> < /div >
    )
}
export default Counter;
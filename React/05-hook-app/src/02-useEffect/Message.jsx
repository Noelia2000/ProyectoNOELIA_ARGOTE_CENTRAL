import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {


        const mouseMove = ({ x, y }) => {
            // const coords = { x, y };
            setCoords({ x, y });

        }

        window.addEventListener('mousemove', mouseMove);


        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }

    }, []);


    return (
        <>


            <h3>Usuario ya existe</h3>

            {JSON.stringify(coords)}


        </>
    )
}

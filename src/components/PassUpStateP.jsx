import { useState } from 'react'
import PassUpStateC from './PassUpStateC'

function PassUpStateP({ ethanName }) {
    const [favNum, setFavNum] = useState(0);

    return (
        <>
            <PassUpStateC
                ethanName={ethanName}
                setFavNum={setFavNum}
            />
            <h1>{favNum}</h1>
        </>
    )
}

export default PassUpStateP
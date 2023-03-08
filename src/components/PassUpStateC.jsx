function PassUpStateP({ethanName, setFavNum}) {

    function handleClick() {
        setFavNum((favNum) => favNum + 1)
    }

    return (
        <button onClick={handleClick}>{ethanName}</button>
    )
}

export default PassUpStateP;
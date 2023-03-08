//has to be named props
// Cringe way 
// function ChildComponentExample(props) {

//     console.log(props);


//     return(
//         <h1>Hi From {props.name}</h1>
//     );
// }


function ChildComponentExample({name}) {
    return(
        <h1>Hi From {name}</h1>
    );
}

export default ChildComponentExample;
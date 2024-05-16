import React, {useEffect, useState} from 'react';

function Landing(props) {
    const {desiredState, setDesiredState} = useState(null);
    const[ gas, setNumber] = useState(0);
    const getData = async() =>{
        let url = 'https://7xmof66bwm76id5rl3d5dti3t40rmszu.lambda-url.us-east-2.on.aws/'
        const response = await fetch(url)
        const data =await response.json()

        setDesiredState(data)
    }
    useEffect(() => {
        getData();

    }, []);


    return (
        <div>
            <div className={'bg-blue-100 font-bold'}>Now it's working </div>
            <div></div>


        </div>
    );
}

export default Landing;
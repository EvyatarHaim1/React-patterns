import {useState} from 'react';

const withCounter = (OriginalComponent) => {

    const UpdatedComponent = () => {
        const [count, setCount] = useState(0);
    
        const increment = () => {
            setCount((prev) => prev + 1);
        }
    
        return <OriginalComponent count={count} increment={increment} />
    }

    return UpdatedComponent;
}

export default withCounter;
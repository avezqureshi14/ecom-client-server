import React from 'react'
import { useHistory } from 'react-router-dom';

const Button = () => {
    const history = useHistory();
    const [textData, setTextData] = useState('');

    const handleClick = () => {
        setTextData('some text');
        history.push({
            pathname: '/search',
            state: { text: textData }
        });
    }
  return (
    <>
    <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default Button
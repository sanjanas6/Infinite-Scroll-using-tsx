import 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Data = () => {
let location = useLocation();
let item= location.state;
let navigate= useNavigate();

useEffect(() => {
    if (item == null) {
      navigate("/");
    }
  }, []);

return(
    <div data-testid='Data'>
        <h2>
            {JSON.stringify(item)}
        </h2>
    </div >
    
)
}
export default Data;

import 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Data =()=> {
let location = useLocation();
let data= location.state;
let navigate= useNavigate();

useEffect(() => {
    if (data == null) {
      navigate("/");
    }
  }, []);

return(
    <div>
        <h2>
            {JSON.stringify(data)}
        </h2>
    </div >
    
)
}
export default Data;

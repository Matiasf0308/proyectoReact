import React from 'react';
import './contador.css';

function Form (){
    return( 
    <form>
        <div className="form-group">
            <label htmlFor="ingreseEmail">Email</label>
            <input onInput= {onChangeEmail} type="email" className="form-control" id="ingreseEmail" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
            <label htmlFor="ingresePassword">Password</label>
            <input onInput= {onChangePassword} type="password" className="form-control" id="ingresePassword"/>
        </div>
        <button   type="submit" className="btn btn-primary">Submit</button>
        <div className="row">
             Contador: <span id="contador">0</span>
        </div>
        <div className="row">
            <button onClick= {onChangeButton}  className="btn btn-primary col" id="botonmasuno">+</button>
            <button onClick= {onChangeButtonless}  className="btn btn-primary col" id="botonmasuno">-</button>
        
        </div>
          
        
    </form>
    );
  }
  function onChangeEmail(event){
    console.log(event.target.value);
  }
  
  function onChangePassword(event){
    console.log(event.target.value);
  }
  
  let contador = 0;
  function onChangeButton(event){
    event.preventDefault()
    contador++;
    console.log (contador);
    document.getElementById('contador').innerHTML = contador;
  }

  function onChangeButtonless(event){
    event.preventDefault()
    contador--;
    console.log (contador);
    document.getElementById('contador').innerHTML = contador;
    // buscar como hacer para que no cuente en negativo
  }


  export default Form;
   
  
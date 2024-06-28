import { useForm } from "react-hook-form";
import "./App.css";
import Button from 'react-bootstrap/Button';

function App() {
  const {register,formState:{errors}, handleSubmit}= useForm();
  const onSubmit=(data)=>{
    console.log(data);
  };
  const calcular=()=>{
    const x1=document.getElementById("x1").value;
    const y1=document.getElementById("y1").value;
    const x2=document.getElementById("x2").value;
    const y2=document.getElementById("y2").value;
    console.log(x1,y1,x2,y2);
    const movida1=(x1)-(x2);
    const movida2=(y1)-(y2);
    const a=(movida2)/(movida1);
    console.log(a);
    const b=(y1)-(x1)*(a);
    console.log(b);
    const funcion="y="+a+"x+"+b;
    console.log(funcion);
    document.getElementById("mostrar").innerHTML = "y="+a+"x+"+b;
  }
  const limpiar=()=>{
    const x1=document.getElementById("x1").value=("");
    document.getElementById("x1").innerHTML = x1;
    const y1=document.getElementById("y1").value=("");
    document.getElementById("y1").innerHTML = y1;
    const x2=document.getElementById("x2").value=("");
    document.getElementById("x2").innerHTML = x2;    
    const y2=document.getElementById("y2").value=("");
    document.getElementById("y2").innerHTML = y2;

  }
  return (
    <>
      <video src="./src/assets/video.mp4" autoplay="true" muted="true" loop="true" ></video>
      <div className="contenedor1" >
        <h1>Bienvenido!</h1>
        <h3>Ingrese las coordenadas de sus dos puntos notables</h3>
            
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="orden">
            <div className="punto1">
              <h5>Punto 1</h5>
              <div>
                <label>x1 </label>
                <input type="number" {...register("x1" ,{required:true})} id="x1"></input>
                {errors.x1?.type==="required" && <p>Tienes que ingresar un número para continuar!</p>}
              </div>
              <br></br>
              <div>
                <label>y1 </label>
                <input type="number" {...register("y1", {required:true})} id="y1"></input>
                {errors.y1?.type==="required" && <p>Tienes que ingresar un número para continuar!</p>}
              </div>
            </div>
            <div className="punto2">
              <h5>Punto 2</h5>
              <div>
                <label>x2 </label>
                <input type="number" {...register("x2" , {required:true})} id="x2"></input>
                {errors.x2?.type==="required" && <p>Tienes que ingresar un número para continuar!</p>}
              </div>
              <br></br>
              <div>
                <label>y2 </label>
                <input type="number" {...register("y2", {required:true})} id="y2"></input>
                {errors.y2?.type==="required" && <p>Tienes que ingresar un número para continuar!</p>}
              </div>
            </div>
          </div>
          <br></br>
          <div className="movida"> 
            <Button variant="dark" className='boton'type="submit" value={"Encontrar función!"} onClick={calcular}>Encontrar Función</Button>
            <br></br>
            <Button variant="dark" className='boton'type="submit" value={"Encontrar función!"} onClick={limpiar}>Limpiar</Button>
          </div>
        </form>
        <h4 id="mostrar"></h4>
      </div>
    </>
  )
}

export default App

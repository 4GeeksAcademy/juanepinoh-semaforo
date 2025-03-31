import React,{useState,useEffect} from "react";
import "./HomeStyles.css"

let colors=["red","yellow","green"]

const LightBulb=({color,activeLight,colorHandler})=>{
	

	return(
		<div onClick={()=>colorHandler(color)} style={{background:color}} className={`lightbulb_body  ${activeLight===color ? "selected" :""} ` } />
	)
}

//create your first component
const Home = () => {
	const [activeLight,setActiveLight]=useState(null)
	

	const colorHandler=(newActiveColor)=>{
		
		setActiveLight(newActiveColor)
	
	}

	return (
		<div className="text-center d-flex justify-content-center flex-column align-items-center">
				<div className="palo_de_semaforo" />

			<div className="sem_body">
		{
			colors.map((elem,i)=>(
				<LightBulb key={i} color={elem} activeLight={activeLight}  colorHandler={colorHandler}  />
			))
		}
			</div>


		</div>
	);
};

export default Home;
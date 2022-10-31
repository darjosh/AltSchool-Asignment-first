import { useContext } from "react";
import { CalcuContext } from "../context/CalcuContext";





const Screen = () => {
    const { calc} = useContext(CalcuContext)
    return (
        <div className="screen" max={70} mode="single">{calc.num ? calc.num : calc.res}</div>
    )
}


export default Screen 
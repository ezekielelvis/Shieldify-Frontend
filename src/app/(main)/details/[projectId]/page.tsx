"use client"
import { data } from "@/data/data"
import { useContext } from "react"
import { Tab } from "../../layout"



const ProjectDisplay = () => {

  // const {tab, handleTab} = useContext(Tab)
  // console.log(tab)
  // console.log(handleTab)
  return (
    <>
      <h2 className="my-5">Quality status: {data.analysis_result.qualityGate.status}</h2>
      
      {/* <div className="my-4">
        {tab === 1 ? <Issues /> : <Hotspot />}
      </div> */}
    </>
  )
}

export default ProjectDisplay

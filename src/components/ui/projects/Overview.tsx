import { data } from "@/data/data"
import { useContext} from "react"
import  {Tab} from "@/app/(main)/layout"

const Overview: React.FC = () => {
  const {tab, handleTab} = useContext(Tab)
  return (
    <>

      <h2>Quality gate status: {data.analysis_result.qualityGate.status}</h2>
    </>
  )
}

export default Overview

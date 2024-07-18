import { data } from "@/data/data"

const HotspotPage = () => {
  const hotspot = data.analysis_result.hotspots.hotspots
  return (
    <>
      {hotspot.map((cont, index) => {
        return (
          <div className="mockup-code my-5" key={index}>
            <pre data-prefix="">
              <code>Line: {cont.line}</code>
            </pre>
            <pre data-prefix="">
              <code>Message: {cont.message}</code>
            </pre>
            <pre data-prefix="">
              <code>Component:{cont.component}</code>
            </pre>
            <pre data-prefix="">
              <code>Status: {cont.status}</code>
            </pre>
            <pre data-prefix="" className="bg-warning text-warning-content">
              <code>
                Vulnerabilty Probability: {cont.vulnerabilityProbability}
              </code>
            </pre>
          </div>
        )
      })}
    </>
  )
}

export default HotspotPage

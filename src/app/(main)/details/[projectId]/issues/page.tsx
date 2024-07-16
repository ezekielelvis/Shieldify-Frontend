import { data } from "@/data/data"

const IssuePage = async () => {
  const issues = data.analysis_result.issues
  return (
    <>
      {issues.issues.map((cont, index) => {
        return (
          // <div key={index}>{cont.line}</div>
          <div className="mockup-code my-5" key={index}>
            <pre data-prefix="$">
              <code>line:{cont.line}</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>Message:{cont.message}</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Type:{cont.type}</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Component:{cont.component}</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Severity:{cont.severity}</code>
            </pre>
          </div>
        )
      })}
    </>
  )
}

export default IssuePage

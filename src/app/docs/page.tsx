import Image from "next/image"
import LOGO from "../../../public/Exclude.svg"
import Dash1 from "../../../public/Screenshot 2024-07-29 at 4.21.01 PM.png"
import Dash2 from "../../../public/Screenshot 2024-07-29 at 4.21.42 PM.png"
import dash3 from "../../../public/Screenshot 2024-07-29 at 4.22.05 PM.png"
const ShieldifyDocumentation: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 px-6 py-10">
      <header className="mb-12 text-center">
        <Image
          alt="Shieldify Logo"
          src={LOGO}
          className="mx-auto mb-4 h-16 w-auto"
        />
        <h1 className="text-4xl font-bold text-gray-900">
          Shieldify Documentation
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Automate your code testing and analysis with Shieldify.
        </p>
      </header>

      <section className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800">
          What is Shieldify?
        </h2>
        <p className="mt-4 text-gray-700">
          Shieldify is an advanced automated code testing and analysis tool
          designed to cater to the needs of startups, companies, and individual
          developers. By seamlessly integrating with your GitHub repository,
          Shieldify virtualizes your code using Docker containers, ensuring an
          isolated and consistent environment for testing. This automated
          solution performs comprehensive tests on your codebase, analyzing
          various aspects such as performance, security vulnerabilities, and
          code quality. The results are presented in an intuitive graphical
          format, making it easy for developers to understand and address issues
          promptly.
        </p>
      </section>

      <section className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
        <ul className="mt-4 list-inside list-disc text-gray-700">
          <li>
            <strong>Easy integration with GitHub:</strong> Shieldify allows you
            to easily integrate with your GitHub account by providing your
            GitHub token and repository URL. This seamless integration ensures
            that Shieldify can access your codebase, perform automated tests,
            and provide real-time analysis without any manual intervention.
          </li>
          <li>
            <strong>Automatic code virtualization using Docker:</strong>{" "}
            Shieldify leverages Docker to virtualize your code environment. By
            creating isolated Docker containers for each test run, Shieldify
            ensures that your code is tested in a consistent environment,
            eliminating the discrepancies caused by different local setups and
            dependencies.
          </li>
          <li>
            <strong>Comprehensive code testing and analysis:</strong> Shieldify
            performs a wide range of tests on your codebase, including unit
            tests, integration tests, performance tests, and security scans.
            This comprehensive approach helps identify potential issues early in
            the development cycle, ensuring that your code is robust and secure.
          </li>
          <li>
            <strong>Graphical representation of analysis results:</strong> The
            results of the code analysis are presented in a graphical format
            using various charts such as line charts, bar charts, and pie
            charts. This visual representation makes it easy to understand the
            analysis outcomes and prioritize issues based on their impact and
            severity.
          </li>
          <li>
            <strong>Free and reliable:</strong> Shieldify is a free tool that
            provides reliable and consistent code testing and analysis. Its
            automated nature ensures that tests are performed accurately and
            consistently, making it an ideal solution for startups, companies,
            and individual developers looking to maintain high code quality
            without incurring additional costs.
          </li>
        </ul>
      </section>

      <section className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
        <ol className="mt-4 list-inside list-decimal text-gray-700">
          <li>
            <strong>Provide your GitHub token and repository URL:</strong> To
            start using Shieldify, you need to provide your GitHub token and the
            URL of the repository you want to analyze. This information is used
            to securely access your codebase and perform automated tests.
          </li>
          <li>
            <strong>Clone and virtualize your repository:</strong> Once the
            repository URL and token are provided, Shieldify clones the
            repository and sets up a virtual environment using Docker. This
            ensures that the code is tested in an isolated and consistent
            environment, free from any external dependencies or conflicts.
          </li>
          <li>
            <strong>Perform automated tests:</strong> Shieldify runs a suite of
            automated tests on your codebase, including unit tests, integration
            tests, performance tests, and security scans. These tests help
            identify potential issues, measure code performance, and ensure that
            the code meets the desired quality standards.
          </li>
          <li>
            <strong>Analyze and visualize results:</strong> The results of the
            tests are analyzed and presented in a graphical format. Shieldify
            uses various charts such as line charts, bar charts, and pie charts
            to visualize the analysis outcomes, making it easy to understand the
            results and identify areas that need improvement.
          </li>
        </ol>
      </section>

      <section className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800">Benefits</h2>
        <p className="mt-4 text-gray-700">
          Shieldify offers numerous benefits for startups, companies, and
          individual developers:
        </p>
        <ul className="mt-4 list-inside list-disc text-gray-700">
          <li>
            <strong>Cost-effective solution:</strong> Shieldify is a free tool,
            making it an affordable option for startups and individual
            developers. By providing automated code testing and analysis without
            any additional costs, Shieldify helps reduce development expenses
            while maintaining high code quality.
          </li>
          <li>
            <strong>Reliable and consistent testing:</strong> The automated
            nature of Shieldify ensures that tests are performed consistently
            and accurately. This reliability helps identify issues early in the
            development cycle, reducing the risk of bugs and vulnerabilities in
            the final product.
          </li>
          <li>
            <strong>Improved code quality:</strong> By performing comprehensive
            tests and providing detailed analysis, Shieldify helps improve the
            overall quality of your codebase. This results in more robust,
            secure, and maintainable code, which is crucial for the success of
            any software project.
          </li>
          <li>
            <strong>Enhanced productivity:</strong> Shieldify automates the code
            testing and analysis process, allowing developers to focus on
            writing code rather than manually running tests and analyzing
            results. This increased productivity helps speed up the development
            process and ensures timely delivery of high-quality software.
          </li>
          <li>
            <strong>Scalable and adaptable:</strong> Shieldify can be easily
            integrated into your existing development workflow, regardless of
            the size and complexity of your project. Its scalable nature ensures
            that it can handle projects of any size, making it suitable for both
            small startups and large enterprises.
          </li>
        </ul>
      </section>

      <section className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800">
          Graphical Results
        </h2>
        <p className="mt-4 text-gray-700">
          Shieldify presents the results of your code analysis in a graphical
          format, using various charts for better visualization and
          understanding. This visual representation helps you quickly identify
          areas that need improvement and prioritize issues based on their
          impact and severity.
        </p>
        <Image alt="Shieldify Logo" src={Dash1} className="mx-auto my-10" />
        <Image alt="Shieldify Logo" src={Dash2} className="mx-auto mb-10" />

        <Image alt="Shieldify Logo" src={dash3} className="mx-auto mb-10" />
      </section>

      <section className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800">
          Metrics Explained
        </h2>
        <p className="mt-4 text-gray-700">
          Shieldify uses a comprehensive set of metrics to analyze your code.
          Here's what each metric means:
        </p>
        <ul className="mt-4 list-inside list-disc text-gray-700">
          <li>
            <strong>ncloc:</strong> Number of lines of code, excluding comments
            and blank lines.
          </li>
          <li>
            <strong>complexity:</strong> Cyclomatic complexity, measuring the
            number of linearly independent paths through the code.
          </li>
          <li>
            <strong>cognitive_complexity:</strong> A measure of how difficult it
            is to understand and maintain the code.
          </li>
          <li>
            <strong>duplicated_lines_density:</strong> Percentage of duplicated
            lines in the codebase.
          </li>
          <li>
            <strong>coverage:</strong> Overall code coverage by tests.
          </li>
          <li>
            <strong>line_coverage:</strong> Percentage of lines covered by
            tests.
          </li>
          <li>
            <strong>branch_coverage:</strong> Percentage of code branches
            covered by tests.
          </li>
          <li>
            <strong>bugs:</strong> Number of detected bugs or defects.
          </li>
          <li>
            <strong>vulnerabilities:</strong> Number of security vulnerabilities
            found.
          </li>
          <li>
            <strong>code_smells:</strong> Issues in code that might lead to
            deeper problems.
          </li>
          <li>
            <strong>security_hotspots:</strong> Areas in the code that might
            need security review.
          </li>
          <li>
            <strong>sqale_index:</strong> An estimate of the time needed to fix
            all maintainability issues.
          </li>
          <li>
            <strong>sqale_debt_ratio:</strong> Ratio of the cost to develop the
            software vs. the cost to fix its technical debt.
          </li>
          <li>
            <strong>reliability_rating:</strong> Rating of the code's
            reliability.
          </li>
          <li>
            <strong>security_rating:</strong> Rating of the code's security.
          </li>
          <li>
            <strong>test_success_density:</strong> Percentage of successful
            tests.
          </li>
          <li>
            <strong>test_failures:</strong> Number of failed tests.
          </li>
          <li>
            <strong>test_errors:</strong> Number of errors encountered during
            testing.
          </li>
          <li>
            <strong>tests:</strong> Total number of tests.
          </li>
          <li>
            <strong>comment_lines_density:</strong> Density of comments in the
            code.
          </li>
          <li>
            <strong>files:</strong> Number of files in the project.
          </li>
          <li>
            <strong>functions:</strong> Number of functions in the code.
          </li>
          <li>
            <strong>classes:</strong> Number of classes in the code.
          </li>
          <li>
            <strong>new_coverage:</strong> Code coverage for new or modified
            code.
          </li>
          <li>
            <strong>new_line_coverage:</strong> Line coverage for new or
            modified code.
          </li>
          <li>
            <strong>new_branch_coverage:</strong> Branch coverage for new or
            modified code.
          </li>
          <li>
            <strong>lines_to_cover:</strong> Number of lines that should be
            covered by tests.
          </li>
          <li>
            <strong>uncovered_lines:</strong> Number of lines not covered by
            tests.
          </li>
          <li>
            <strong>security_review_rating:</strong> Rating of security review
            status.
          </li>
          <li>
            <strong>new_security_review_rating:</strong> Security review rating
            for new or modified code.
          </li>
          <li>
            <strong>new_maintainability_rating:</strong> Maintainability rating
            for new or modified code.
          </li>
          <li>
            <strong>new_reliability_rating:</strong> Reliability rating for new
            or modified code.
          </li>
          <li>
            <strong>confirmed_issues:</strong> Number of confirmed issues.
          </li>
          <li>
            <strong>false_positive_issues:</strong> Number of issues marked as
            false positives.
          </li>
          <li>
            <strong>open_issues:</strong> Number of open issues.
          </li>
          <li>
            <strong>reliability_remediation_effort:</strong> Estimated effort to
            fix reliability issues.
          </li>
          <li>
            <strong>security_remediation_effort:</strong> Estimated effort to
            fix security issues.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          These metrics provide a comprehensive view of your code's quality,
          security, and maintainability. Shieldify uses these metrics to
          generate detailed reports and visualizations, helping you identify
          areas for improvement in your codebase.
        </p>
      </section>
    </div>
  )
}

export default ShieldifyDocumentation

import Image from "next/image"
import LOGO from "../../../public/Exclude.svg"
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
      </section>
    </div>
  )
}

export default ShieldifyDocumentation

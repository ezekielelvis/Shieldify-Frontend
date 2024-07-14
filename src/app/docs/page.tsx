const ShieldifyDocumentation: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 px-6 py-10">
      <header className="mb-12 text-center">
        <img
          alt="Shieldify Logo"
          src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
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

      <footer className="bg-base-200 text-base-content w-full">
        <div className="footer bg-base-200 text-base-content border-base-300 flex flex-col items-center justify-between border-t px-10 py-4 md:flex-row">
          <div className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="mr-2 fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-                .21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:place-self-center md:justify-self-end">
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ShieldifyDocumentation

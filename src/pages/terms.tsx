
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using our browser extension, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-700">
              We grant you a personal, non-exclusive, non-transferable, limited license to use our browser extension for personal or business purposes, subject to these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700">
              You agree to:
              - Use the extension in compliance with all applicable laws
              - Not attempt to reverse engineer the extension
              - Not use the extension for any illegal or unauthorized purpose
              - Not transmit any malicious code or interfere with the extension's operation
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700">
              The extension, including all content, features, and functionality, is owned by us and is protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              The extension is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700">
              For any questions regarding these Terms of Service, please contact us at: <a href="mailto:chen.rvn@gmail.com" className="text-blue-600 hover:text-blue-800">chen.rvn@gmail.com</a>
            </p>
          </section>
        </div>

        <div className="mt-8 text-gray-500 text-sm">
          Last Updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700">
              We collect information that you provide directly to us when using our browser extension, including:
              - Your prompts and interactions with the extension
              - Usage data and analytics
              - Technical information about your browser and system
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the collected information to:
              - Provide and improve our services
              - Analyze usage patterns and optimize user experience
              - Communicate with you about updates and changes
              - Ensure the security and functionality of our extension
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to:
              - Access your personal data
              - Request correction of your personal data
              - Request deletion of your personal data
              - Object to processing of your personal data
              - Request restriction of processing your personal data
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Updates to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:chen.rvn@gmail.com" className="text-blue-600 hover:text-blue-800">chen.rvn@gmail.com</a>
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

export default PrivacyPolicy; 
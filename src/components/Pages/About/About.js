import React from "react";

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4 lg:mb-0">
            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
              Your Consent to this Privacy Policy
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
                By accessing, browsing or using the Yamaha web site or providing
                us with Personal Information, as defined below, you signify that
                you agree to the terms of our current Privacy Policy as posted
                in this page of the site. If you do not agree with any term in
                this Privacy Policy, please do not access, browse or use the
                site or provide us with Personal Information. The Yamaha web
                site you have entered is operated by or on behalf of Yamaha
                Corporation. We, Yamaha Corporation, comply with the laws and
                regulations regarding personal data protection, and place great
                importance on protecting your privacy. This Privacy Policy
                prescribes the type of information that we collect, and how we
                use and manage such information.
              </p>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4 lg:mb-0">
            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
              Collection of Personal Information
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
                "Personal Information", as referenced in this Privacy Policy,
                means personally identifiable information including, without
                limitation, your name, address, telephone number, and e-mail
                address. When you are visiting our site, you may be asked for
                Personal Information to allow you to order Yamaha products or
                services, participate in sales promotion services or prize
                competitions, answer our questionnaires or inquiries by e-mail
                or through the web site, register as a Yamaha user, monitor
                Yamaha products, or e-mail news services concerning the Yamaha
                product lines, etc. We will not collect any Personal Information
                unless and until you provide such information to us voluntarily.
                When you provide us with Personal Information, you authorize us
                to use such information in accordance with the terms of this
                Privacy Policy. If you do not agree with any term in this
                Privacy Policy, please do not provide us with your Personal
                Information. Certain services may be conditioned on the
                provision of your Personal Information.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
          <div className="mb-4 lg:mb-0">
            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
              How We Use Your Information
            </h5>
            <div className="relative pr-8">
              <p className="text-base text-gray-700 md:text-lg">
                When we collect your Personal Information, we reasonably specify
                the purpose of such collection. Any Personal Information that
                you provide will be used to meet your request such as forwarding
                Yamaha products, brochures, magazines, etc. and offering certain
                services. We may also use your Personal Information to contact
                you regarding other products and services that may be of
                interest to you. If you do not wish to be contacted by us
                concerning other products or services that may be of interest to
                you, you can request that we limit our contact with you to the
                express purpose that you provided your Personal Information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

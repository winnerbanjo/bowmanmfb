import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions | Bowman Microfinance Bank",
  description:
    "Read the terms and conditions governing access to and use of Bowman Microfinance Bank services.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-[#003566]/10 bg-white/85 p-8 shadow-lg shadow-blue-950/5 backdrop-blur-sm">
      <h2 className="text-2xl font-bold tracking-tight text-[#003566]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-[#003566]/85">
        {children}
      </div>
    </section>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      title="Terms and Conditions"
      subtitle="The rules governing access to and use of Bowman Microfinance Bank services, channels, and digital platforms."
      lastUpdated="April 28, 2026"
    >
      <Section title="Agreement to Terms">
        <p>
          Welcome to Bowman Microfinance Bank. These Terms and Conditions
          govern your access to and use of our website, mobile applications,
          and all related services.
        </p>
        <p>
          By accessing or using the service, you confirm that you have read,
          understood, and agree to be bound by these Terms and our Privacy
          Policy. If you do not agree, you must discontinue use immediately.
        </p>
      </Section>

      <Section title="Customer Duties and Regulatory Cooperation">
        <p>
          To ensure compliance with local and international financial
          regulations, customers agree to the following duties:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Compliance obligations:</strong> customers must satisfy KYC
            requirements and AML/CFT obligations.
          </li>
          <li>
            <strong>Accurate statements:</strong> customers must provide
            accurate and truthful information, especially regarding the source
            of funds.
          </li>
          <li>
            <strong>Regulatory cooperation:</strong> customers must provide
            updated information when required and cooperate with anti-fraud and
            AML checks.
          </li>
          <li>
            <strong>Account restriction:</strong> failure to comply may result
            in restriction or termination of the account.
          </li>
        </ul>
      </Section>

      <Section title="Fees, Charges, and Interest Terms">
        <p>
          Bowman Microfinance Bank may apply fees, charges, or interest as
          disclosed in the applicable product agreement and published tariff
          guide.
        </p>
        <p>
          Any change to pricing, charges, or interest rules for loans and
          deposits will be communicated to customers before implementation where
          required by law.
        </p>
      </Section>

      <Section title="Electronic Communications Agreement">
        <p>
          By using the service, you consent to receive official account
          notifications and service-related communications electronically.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Consent:</strong> this includes communications by email,
            SMS, WhatsApp, mobile app notifications, or other electronic
            means.
          </li>
          <li>
            <strong>Legal validity:</strong> you agree that these electronic
            notices satisfy any requirement for written communication.
          </li>
        </ul>
      </Section>

      <Section title="Use of the Service and Account Responsibilities">
        <p>
          Access to some features may require account registration and accurate
          customer information.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Eligibility:</strong> you must be at least 18 years old and
            legally capable of entering binding contracts.
          </li>
          <li>
            <strong>Account security:</strong> you are responsible for
            maintaining the confidentiality of your credentials and for
            activities under your account.
          </li>
          <li>
            <strong>Accuracy of information:</strong> all information provided
            must be true, current, accurate, and complete, and must be updated
            promptly when it changes.
          </li>
        </ul>
      </Section>

      <Section title="Prohibited Activities and Indemnity">
        <p>You may use the service only for lawful purposes.</p>
        <ul className="list-disc space-y-3 pl-5">
          <li>Do not use the service for unlawful purposes or illegal acts.</li>
          <li>
            Do not engage in conduct that harms Bowman Microfinance Bank or
            other users.
          </li>
          <li>
            Do not attempt unauthorized access to any connected system or
            network.
          </li>
          <li>
            Do not interfere with the proper operation of the service,
            including through malware or disruptive behavior.
          </li>
          <li>
            <strong>Indemnity:</strong> customers agree to indemnify and hold
            Bowman Microfinance Bank harmless from losses, liabilities, claims,
            or expenses arising from misuse, fraud, negligence, or breach of
            these Terms.
          </li>
        </ul>
      </Section>

      <Section title="Financial Disclosures, Regulatory Compliance, and Account Freezing">
        <p>
          All accounts, transactions, and services are subject to the rules,
          regulations, directives, and guidelines of the Central Bank of
          Nigeria, NDIC, and other relevant authorities.
        </p>
        <p>
          The Bank may suspend or freeze an account immediately and without
          prior notice where necessary to comply with legal or regulatory
          obligations, including AML requirements.
        </p>
        <p>
          Information on our website is provided for general information only
          and does not constitute financial, investment, legal, or tax advice.
        </p>
      </Section>

      <Section title="Limitation of Liability and Digital Transaction Protection">
        <p>
          Your use of the service is at your sole risk. The service is provided
          on an as-is and as-available basis without warranties of any kind.
        </p>
        <p>
          To the fullest extent allowed by law, Bowman Microfinance Bank is not
          liable for indirect, incidental, special, consequential, or punitive
          damages arising from access to or use of the service.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Scope:</strong> this includes mobile app transactions and
            transactions involving third-party integrations such as payment
            gateways.
          </li>
          <li>
            <strong>Customer negligence:</strong> the Bank is not liable for
            unauthorized transactions caused by customer negligence, such as
            sharing passwords, failing to secure a device, or device malware.
          </li>
        </ul>
      </Section>

      <Section title="Intellectual Property Rights">
        <p>
          The service and all associated content, including text, graphics,
          logos, images, and software, are owned by Bowman Microfinance Bank.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Limited license:</strong> we grant a limited right to use
            the service for personal, non-commercial use, subject to these
            Terms.
          </li>
          <li>
            <strong>Restrictions:</strong> no part of the service may be
            copied, reproduced, or modified without prior written permission.
          </li>
        </ul>
      </Section>

      <Section title="Governing Law and Dispute Resolution">
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria, without regard to conflict of law provisions.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Amicable resolution:</strong> both parties agree to first
            attempt to resolve disputes through good faith negotiation.
          </li>
          <li>
            <strong>Jurisdiction:</strong> unresolved disputes are subject to
            the exclusive jurisdiction of the courts in Lagos, Nigeria.
          </li>
        </ul>
      </Section>

      <Section title="Changes to Terms and Version Control">
        <p>
          Bowman Microfinance Bank may modify these Terms from time to time.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Visible version control:</strong> the last updated date on
            this page will be revised to reflect the effective date of major
            changes.
          </li>
          <li>
            <strong>Continued use:</strong> by continuing to use the service
            after revisions become effective, you agree to be bound by the
            updated Terms.
          </li>
        </ul>
      </Section>

      <Section title="Contact">
        <p>
          For further information about these Terms and Conditions, contact
          Bowman Microfinance Bank at 42, Montgomery Road, Yaba Lagos.
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:info@bowmanmfb.com.ng"
            className="font-medium text-[#003566] underline underline-offset-4"
          >
            info@bowmanmfb.com.ng
          </a>
        </p>
        <p>Phones: +2349165127773, +2349097071511</p>
        <p className="text-sm text-[#003566]/65">
          These Terms and Conditions may be updated periodically. We will
          notify you of any significant changes.
        </p>
      </Section>
    </LegalLayout>
  );
}

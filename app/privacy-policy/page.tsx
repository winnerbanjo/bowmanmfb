import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Bowman Microfinance Bank",
  description:
    "Learn how Bowman Microfinance Bank collects, processes, stores, and protects personal information.",
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

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Bowman Microfinance Bank collects, uses, shares, stores, and protects your personal information."
      lastUpdated="April 28, 2026"
    >
      <Section title="Privacy Matters">
        <p>
          We know that data privacy is an important issue today. We want you to
          enjoy your interaction with us while knowing that we value your
          personal data and protect it.
        </p>
        <p>
          This policy provides a clear overview of how Bowman Microfinance Bank
          processes your personal data, the purposes for which we process it,
          and how you can exercise your rights.
        </p>
      </Section>

      <Section title="The Information We Collect">
        <p>
          We collect only the information necessary in relation to
          transactions, relevant rules, and regulations. This data is essential
          for providing our products and services.
        </p>

        <div className="rounded-2xl border border-[#003566]/10 bg-[#F8FBFF] p-6">
          <h3 className="text-lg font-semibold text-[#003566]">
            Data We Collect Directly
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Account and identity data:</strong> name, gender, date of
              birth, address, mobile numbers, work address, photo ID, passport
              information, National ID card, and nationality.
            </li>
            <li>
              <strong>Transaction data:</strong> information related to opening
              accounts, applying for loans, sourcing investments, and
              completing transactions.
            </li>
            <li>
              <strong>Correspondence data:</strong> information shared when you
              contact our customer service desk for complaints or disputes.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[#003566]/10 bg-[#F8FBFF] p-6">
          <h3 className="text-lg font-semibold text-[#003566]">
            Data We Collect From Third Parties
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Credit history:</strong> information from credit bureaus.
            </li>
            <li>
              <strong>Regulatory data:</strong> due diligence results and
              transaction details used to detect suspicious or unusual
              activities and support our regulatory obligations.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Lawful Bases for Processing Your Data">
        <p>
          Bowman Microfinance Bank processes your data for specific,
          legitimate, and lawful purposes in line with the Nigerian Data
          Protection Regulation and other financial laws.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Contract necessity:</strong> for providing our services and
            managing our relationship with you.
          </li>
          <li>
            <strong>Legal obligation:</strong> to meet compliance requirements,
            including fraud prevention, anti-money laundering, and reporting to
            regulators such as the CBN.
          </li>
          <li>
            <strong>Legitimate interest:</strong> for security, service
            continuity, service improvement, and quality assurance, provided
            your rights are not overridden.
          </li>
          <li>
            <strong>Consent:</strong> for marketing communications about new
            products or services, which you may withdraw at any time.
          </li>
        </ul>
      </Section>

      <Section title="Data Sharing and Third Parties">
        <p>
          We share your information only when we have a legal and permissible
          reason to do so, including situations where regulators require it or
          where you have given consent for a specific activity.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Regulators and law enforcement:</strong> such as the CBN,
            NDIC, EFCC, and other authorities.
          </li>
          <li>
            <strong>Service providers:</strong> including payment processors,
            cloud providers, and IT vendors who act on our behalf and must
            protect your information.
          </li>
          <li>
            <strong>Credit bureaus and financial institutions:</strong> for
            credit checks and fraud prevention.
          </li>
        </ul>
        <p>
          If any service provider hosts data outside Nigeria, we will ensure
          such transfers comply with the NDPR and maintain an adequate level of
          protection.
        </p>
      </Section>

      <Section title="Data Security and Safeguards">
        <p>
          Protecting your private information is our priority. We maintain
          physical and electronic safeguards that align with legal
          requirements, and we train our staff continuously on proper
          information handling.
        </p>
      </Section>

      <Section title="Data Retention Policy">
        <p>
          We store personal data only for as long as it is reasonably needed
          for the purpose it was collected or to satisfy legal and regulatory
          obligations.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Financial records:</strong> core customer records,
            including account and transaction details, are retained for a
            minimum of six years after account closure.
          </li>
          <li>
            <strong>Marketing data:</strong> retained until you object or
            withdraw consent.
          </li>
          <li>
            <strong>Retention review:</strong> data that is no longer needed
            and is not subject to retention rules will be securely deleted.
          </li>
        </ul>
      </Section>

      <Section title="Website, Cookies, and Tracking">
        <p>
          When you visit our website for enquiries, browsing, or updates, we
          may automatically collect certain technical information.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Data collected:</strong> this may include IP address,
            device identifiers, cookies, and analytics data.
          </li>
          <li>
            <strong>Use of cookies:</strong> cookies help the website function
            better, remember preferences, and provide usage statistics.
          </li>
          <li>
            <strong>User choices:</strong> most browsers allow you to manage,
            block, or delete cookies, though this may affect your experience.
          </li>
        </ul>
      </Section>

      <Section title="Marketing and Opt-Out Controls">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Marketing messages:</strong> we may send product and
            service information by email or mobile number where we have your
            explicit consent.
          </li>
          <li>
            <strong>Right to opt out:</strong> you can unsubscribe from
            marketing emails or contact us directly to withdraw consent.
          </li>
        </ul>
      </Section>

      <Section title="Your Rights Over Your Personal Information">
        <p>
          As a customer, you have important rights over how your information is
          used and shared.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Right to be informed:</strong> you will be told why your
            information is requested and why it is necessary.
          </li>
          <li>
            <strong>Right of access:</strong> you may request access to the
            personal and financial information we hold about you.
          </li>
          <li>
            <strong>Right to deletion:</strong> you may request erasure where
            there is no overriding legal or regulatory basis for retention.
          </li>
          <li>
            <strong>Right to data portability:</strong> we will support safe
            movement or transfer of your data where applicable.
          </li>
          <li>
            <strong>Right to object:</strong> you may object to certain uses of
            your data, especially for direct marketing.
          </li>
          <li>
            <strong>Right to restriction:</strong> you may request limits on
            how your data is processed in appropriate situations.
          </li>
        </ul>
      </Section>

      <Section title="Contact">
        <p>
          For further information about this Privacy Policy, contact Bowman
          Microfinance Bank at 42, Montgomery Road, Yaba Lagos.
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
        <p>Phone: +2349165127773</p>
        <p className="text-sm text-[#003566]/65">
          This Privacy Policy may be updated periodically. We will notify you
          of any significant changes.
        </p>
      </Section>
    </LegalLayout>
  );
}

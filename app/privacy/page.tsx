import { LegalDocument, type LegalSection } from "@/components/legal-document";
import { pageMetadata } from "@/lib/metadata";
import { company } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy | Anupama Technologies",
  description: "How Anupama Technologies Private Limited handles information in connection with this website.",
  path: "/privacy",
});

const mail = <a href={`mailto:${company.email}`}>{company.email}</a>;

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <>
        <p>
          This Privacy Policy explains how {company.legalName} (&ldquo;Anupama Technologies&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information in connection with
          anupamatech.com (the &ldquo;Website&rdquo;).
        </p>
        <p>
          It applies to this corporate Website only. Our products, including Carnival, are governed by
          their own privacy policies, which are made available through the relevant product website.
        </p>
      </>
    ),
  },
  {
    id: "information-collected",
    title: "Information we collect",
    body: (
      <>
        <p>This Website is informational. It does not offer user accounts or contact forms. The information we may receive is limited to:</p>
        <ul>
          <li>
            <strong className="text-fg">Information you send us.</strong> If you email us, we receive
            your email address and whatever you include in your message.
          </li>
          <li>
            <strong className="text-fg">Technical information.</strong> Like most websites, the servers
            that deliver this Website may automatically record technical data such as IP address,
            browser type, device information, pages requested and request time.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use information",
    body: (
      <>
        <p>We use information to:</p>
        <ul>
          <li>respond to messages and enquiries sent to us;</li>
          <li>operate, maintain and secure the Website;</li>
          <li>understand and fix technical problems; and</li>
          <li>comply with legal obligations.</li>
        </ul>
        <p>We do not sell personal information collected through this Website.</p>
      </>
    ),
  },
  {
    id: "data-storage",
    title: "Data storage",
    body: (
      <p>
        Emails we receive are stored in our email systems. Technical logs are handled by the
        infrastructure that hosts the Website. We store information only for as long as it is needed
        for the purposes described in this policy.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        This Website does not use advertising or analytics cookies. If that changes, we will update
        this policy and, where required, ask for your consent. Your browser settings let you control
        or delete cookies at any time.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services",
    body: (
      <p>
        The Website is delivered using third-party hosting and infrastructure providers, and may link
        to external websites, including websites for our products. We do not control those websites and are not
        responsible for their content or privacy practices. Please review the privacy policy of any
        site you visit.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <p>
        We keep correspondence and related information for as long as needed to respond to you and
        to maintain appropriate business records, or for longer if the law requires. When information
        is no longer needed, we delete it or anonymise it.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We take reasonable steps to protect information we hold. No method of transmission or storage
        is completely secure, so we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <p>
        Subject to applicable law, you may ask us to confirm what personal information we hold about
        you, to correct it, or to delete it, and you may withdraw consent where we rely on it. To make
        a request, email {mail}.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children’s privacy",
    body: (
      <p>
        This Website is not directed at children, and we do not knowingly collect personal information
        from them through it. If you believe a child has sent us personal information, please contact
        us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top
        of this page shows when it was last revised. Continued use of the Website after a change means
        you accept the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        {company.legalName}
        <br />
        {company.address.join(" ")}
        <br />
        Email: {mail}
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      intro="How we handle information in connection with the Anupama Technologies website."
      updated="7 October 2026"
      sections={sections}
    />
  );
}

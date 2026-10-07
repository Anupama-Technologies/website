import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal-document";
import { pageMetadata } from "@/lib/metadata";
import { company } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service | Anupama Technologies",
  description: "Terms governing use of the Anupama Technologies Private Limited website.",
  path: "/terms",
});

const mail = <a href={`mailto:${company.email}`}>{company.email}</a>;

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: (
      <p>
        By accessing or using anupamatech.com (the &ldquo;Website&rdquo;), operated by{" "}
        {company.legalName}, you agree to these Terms. If you do not agree, please do not use the
        Website. Our products, including Carnival, are governed by their own terms, which are
        provided through the relevant product website.
      </p>
    ),
  },
  {
    id: "website-use",
    title: "Use of the Website",
    body: (
      <>
        <p>You may use the Website for lawful purposes. Please do not:</p>
        <ul>
          <li>attempt to disrupt, damage or gain unauthorised access to the Website or its systems;</li>
          <li>use automated means to place an unreasonable load on the Website; or</li>
          <li>use the Website in a way that violates applicable law or the rights of others.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        The content, design, logo and branding of this Website belong to {company.legalName} or its
        licensors and are protected by applicable intellectual property laws. Product names and marks
        belong to their respective owners. You may view the Website for personal, non-commercial
        purposes, but may not copy, modify or redistribute its content without our written permission.
      </p>
    ),
  },
  {
    id: "external-links",
    title: "External links",
    body: (
      <p>
        The Website links to external sites, such as our product websites, for your convenience. We do not
        control third-party websites and are not responsible for their content, policies or practices.
        Your use of them is at your own discretion and subject to their terms.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <p>
        The Website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
        for general information. We make reasonable efforts to keep information accurate and the
        Website available, but we do not warrant that it will be error-free, uninterrupted or
        complete.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the extent permitted by applicable law, {company.legalName} will not be liable for any
        indirect or consequential loss arising from your use of, or inability to use, the Website.
        Nothing in these Terms limits any liability that cannot be limited by law.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date shows when
        they were last revised, and continued use of the Website means you accept the updated Terms.
        Our handling of information is described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these Terms can be sent to {mail}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      intro="The terms that apply when you use the Anupama Technologies website."
      updated="7 October 2026"
      sections={sections}
    />
  );
}

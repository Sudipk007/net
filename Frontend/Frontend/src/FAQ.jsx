import React from "react";

export default function FAQ() {
  return (
    <div style={styles.container}>

      {/* INTRODUCTION */}
      <h1 style={styles.title}>Netnova IT Solution – Policies & FAQs</h1>

      <section style={styles.section}>
        <h2 style={styles.heading}>1. Introduction</h2>
        <p style={styles.text}>
          Netnova IT Solution is committed to providing reliable, secure, and
          high-quality IT services. This policy outlines the company’s
          standards, operational guidelines, and customer service principles.
        </p>
      </section>

      {/* CODE OF CONDUCT */}
      <section style={styles.section}>
        <h2 style={styles.heading}>2. Code of Conduct</h2>

        <h3 style={styles.subheading}>2.1 Employee Conduct</h3>
        <ul style={styles.list}>
          <li>Employees must maintain professionalism in all communications.</li>
          <li>Confidentiality must be protected at all times.</li>
          <li>No discrimination, harassment, or misconduct is tolerated.</li>
        </ul>

        <h3 style={styles.subheading}>2.2 Client Interaction</h3>
        <ul style={styles.list}>
          <li>Provide timely, respectful, and solution-oriented responses.</li>
          <li>Communicate delays or issues proactively.</li>
          <li>Maintain transparency regarding timelines and deliverables.</li>
        </ul>
      </section>

      {/* DATA PRIVACY */}
      <section style={styles.section}>
        <h2 style={styles.heading}>3. Data Privacy & Security Policy</h2>

        <h3 style={styles.subheading}>3.1 Data Collection</h3>
        <p style={styles.text}>
          Netnova collects only the minimum data necessary to deliver services,
          including names, emails, system logs, and service-related technical
          information.
        </p>

        <h3 style={styles.subheading}>3.2 Data Protection</h3>
        <ul style={styles.list}>
          <li>All client data is stored in encrypted environments.</li>
          <li>Access to sensitive data is restricted on a need-to-know basis.</li>
          <li>Regular backups and security audits are performed.</li>
        </ul>

        <h3 style={styles.subheading}>3.3 Confidentiality Agreement</h3>
        <p style={styles.text}>
          All employees and contractors sign NDAs to ensure protection of
          client intellectual property and data.
        </p>
      </section>

      {/* SERVICE DELIVERY */}
      <section style={styles.section}>
        <h2 style={styles.heading}>4. Service Delivery & Support Policy</h2>

        <h3 style={styles.subheading}>4.1 Service Requests</h3>
        <ul style={styles.list}>
          <li>
            Service requests can be submitted through email, ticketing system,
            or support hotline.
          </li>
          <li>Support hours: Monday–Friday, 9 AM to 6 PM (PST).</li>
        </ul>

        <h3 style={styles.subheading}>4.2 Response Times</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Priority</th>
              <th>Description</th>
              <th>Response Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>High</td>
              <td>System down, security issues</td>
              <td>Within 1 hour</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>Limited functionality</td>
              <td>Within 4 hours</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>General queries, updates</td>
              <td>Within 24 hours</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.subheading}>4.3 Resolution Policy</h3>
        <p style={styles.text}>
          Issues are resolved based on urgency and complexity. Clients receive
          periodic updates until closure.
        </p>
      </section>

      {/* ACCEPTABLE USE */}
      <section style={styles.section}>
        <h2 style={styles.heading}>5. Acceptable Use Policy</h2>
        <ul style={styles.list}>
          <li>Use Netnova’s products and services legally.</li>
          <li>Do not attempt to modify, hack, or damage company systems.</li>
          <li>
            Do not misuse technical support for illegal or unrelated activities.
          </li>
        </ul>
      </section>

      {/* PAYMENT POLICY */}
      <section style={styles.section}>
        <h2 style={styles.heading}>6. Payment & Billing Policy</h2>
        <ul style={styles.list}>
          <li>Invoices must be paid within 15 days unless stated otherwise.</li>
          <li>Late payments may result in service suspension.</li>
          <li>Refunds are evaluated case-by-case based on service completion.</li>
        </ul>
      </section>

      {/* TERMINATION */}
      <section style={styles.section}>
        <h2 style={styles.heading}>7. Termination Policy</h2>
        <p style={styles.text}>Netnova may terminate services if:</p>
        <ul style={styles.list}>
          <li>Payment obligations are not met.</li>
          <li>Client engages in illegal or unethical activities.</li>
          <li>There is a violation of the Acceptable Use Policy.</li>
        </ul>

        <p style={styles.text}>Clients may terminate contracts with:</p>
        <ul style={styles.list}>
          <li>30-day written notice (unless otherwise stated).</li>
        </ul>
      </section>

      {/* IP POLICY */}
      <section style={styles.section}>
        <h2 style={styles.heading}>8. Intellectual Property</h2>
        <p style={styles.text}>
          All custom-developed solutions are owned by the client unless stated
          otherwise. Netnova retains rights to internal tools, frameworks, and
          code libraries not developed exclusively for the client.
        </p>
      </section>

      {/* COMPLIANCE */}
      <section style={styles.section}>
        <h2 style={styles.heading}>9. Compliance & Review</h2>
        <p style={styles.text}>
          All policies are reviewed annually. Employees must undergo periodic
          training to maintain compliance with security and service standards.
        </p>
      </section>

      {/* FAQ SECTION */}
      <h1 style={styles.title}>Frequently Asked Questions (FAQ)</h1>

      <section style={styles.section}>
        <h3 style={styles.subheading}>1. What services does Netnova provide?</h3>
        <p style={styles.text}>
          IT support, development, cloud, DevOps, cybersecurity, networking, and
          automation services.
        </p>

        <h3 style={styles.subheading}>2. How do I contact customer support?</h3>
        <p style={styles.text}>
          Email: support@netnova.com, ticketing portal, or phone support.
        </p>

        <h3 style={styles.subheading}>3. What are your support hours?</h3>
        <p style={styles.text}>Monday–Friday, 9 AM – 6 PM (PST).</p>

        <h3 style={styles.subheading}>4. How fast do you respond?</h3>
        <p style={styles.text}>
          Critical: 1 hour | Functional: 4 hours | General: 24 hours.
        </p>

        <h3 style={styles.subheading}>5. Do you offer onsite support?</h3>
        <p style={styles.text}>Yes, depending on location and contract.</p>

        <h3 style={styles.subheading}>6. How does Netnova protect my data?</h3>
        <p style={styles.text}>
          Encrypted storage, access controls, audits, and NDAs.
        </p>

        <h3 style={styles.subheading}>7. What payment methods do you accept?</h3>
        <p style={styles.text}>
          Credit/debit cards, bank transfers, online invoices, subscriptions.
        </p>

        <h3 style={styles.subheading}>8. Do you offer custom solutions?</h3>
        <p style={styles.text}>Yes, tailored to business needs.</p>

        <h3 style={styles.subheading}>9. Can I cancel my subscription?</h3>
        <p style={styles.text}>Yes, with 30-day written notice.</p>

        <h3 style={styles.subheading}>10. Do you work with small businesses?</h3>
        <p style={styles.text}>Absolutely — flexible pricing & scalable services.</p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "18px",
    marginTop: "15px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#444",
  },
  list: {
    paddingLeft: "20px",
    fontSize: "16px",
    color: "#444",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
};


export default function Contact() {
  return (
    <div className="contact-page">
      <div className="container contact-page__inner">
        <h1 className="contact-page__title">Get in touch</h1>
        <p className="contact-page__subtitle">
          For orders, bulk enquiries, or custom assortments (Ladoo, Thekua, Pickle, Nimki and more), reach out below.
        </p>
        <div className="contact-page__card card">
          <div className="contact-page__content">
            <div className="contact-page__item">
              <strong>Phone</strong>
              <p><a href="tel:+91234567891">+91 234567891</a></p>
            </div>
            <div className="contact-page__item">
              <strong>Email</strong>
              <p><a href="mailto:homemade@gmail.com">homemade@gmail.com</a></p>
            </div>
            <div className="contact-page__item">
              <strong>Address</strong>
              <p>KIIT Road</p>
            </div>
          </div>
          <p className="contact-page__note">
            Mention the products and quantity you need. We’ll confirm availability and delivery details.
          </p>
        </div>
      </div>
      <style>{`
        .contact-page { padding: 3rem 0 5rem; }
        .contact-page__inner { max-width: 600px; margin: 0 auto; }
        .contact-page__title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .contact-page__subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .contact-page__card {
          padding: 2rem;
          background: var(--cream-light);
          border: 1px solid var(--border);
        }
        .contact-page__content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .contact-page__item strong {
          display: block;
          font-size: 0.85rem;
          color: var(--yellow-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .contact-page__item p { margin: 0; color: var(--text); }
        .contact-page__note {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin: 0;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
      `}</style>
    </div>
  );
}

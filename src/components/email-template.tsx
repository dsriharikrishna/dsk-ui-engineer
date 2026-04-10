import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  budget?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  budget,
  message,
}) => (
  <div style={{
    fontFamily: 'Inter, system-ui, sans-serif',
    backgroundColor: '#f9fafb',
    padding: '40px 20px',
    color: '#111827'
  }}>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#EF7722',
        padding: '32px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
          New Project Inquiry
        </h1>
      </div>

      {/* Content */}
      <div style={{ padding: '32px' }}>
        <p style={{ fontSize: '16px', lineHeight: '24px', marginBottom: '24px' }}>
          You have received a new inquiry from your agency website.
        </p>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '12px' }}>
            Contact Details
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr>
              <td style={{ padding: '8px 0', color: '#4b5563', width: '100px' }}>Name:</td>
              <td style={{ padding: '8px 0', fontWeight: '600' }}>{name}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', color: '#4b5563' }}>Email:</td>
              <td style={{ padding: '8px 0', fontWeight: '600' }}>
                <a href={`mailto:${email}`} style={{ color: '#0BA6DF', textDecoration: 'none' }}>{email}</a>
              </td>
            </tr>
            {budget && (
              <tr>
                <td style={{ padding: '8px 0', color: '#4b5563' }}>Budget:</td>
                <td style={{ padding: '8px 0', fontWeight: '600', color: '#FAA533' }}>{budget}</td>
              </tr>
            )}
          </table>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '12px' }}>
            Message
          </h2>
          <div style={{ 
            backgroundColor: '#f3f4f6', 
            padding: '20px', 
            borderRadius: '12px',
            fontSize: '16px',
            lineHeight: '26px',
            whiteSpace: 'pre-wrap'
          }}>
            {message}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href={`mailto:${email}`} style={{
            backgroundColor: '#EF7722',
            color: '#ffffff',
            padding: '14px 28px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            Reply to Message
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '24px',
        textAlign: 'center',
        borderTop: '1px solid #e5e7eb',
        backgroundColor: '#fafafa'
      }}>
        <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>
          This notification was sent automatically from your DSK Website.
        </p>
      </div>
    </div>
  </div>
);

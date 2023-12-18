'use client';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div
      style={{
        display: 'grid',
        height: '90vh',
        padding: '0 1rem',
        placeContent: 'center'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            letterSpacing: 'tight',
            marginTop: '1rem'
          }}
        >
          404 / Upss... x{'(('}
        </p>

        <p style={{ marginTop: '1rem', color: '#CBD5E0' }}>
          We can't find that page.
        </p>

        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.25rem',
            marginTop: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#FFFFFF',
            backgroundColor: '#1A202C',
            borderRadius: '0.375rem',
            textDecoration: 'none',
            transition: 'all 0.2s ease 0.075s',
            outline: 'none'
          }}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

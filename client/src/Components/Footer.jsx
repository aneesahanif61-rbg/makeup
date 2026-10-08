import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#050405', borderTop: '1px solid #1a1417', padding: '60px 40px', color: '#a3989a', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
        
        <div>
          <h3 style={{ color: '#ffffff', letterSpacing: '2px', fontSize: '1.2rem', margin: '0 0 10px 0' }}>LUMÉRA BEAUTY</h3>
          <p style={{ margin: 0, fontSize: '0.85rem' }}>Curating modern premium elegance blueprints global wide.</p>
        </div>

        <div style={{ fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} LUMÉRA. All structural assets reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
n
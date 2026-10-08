import React from 'react';
// Exact extensions ke sath images ka import (primer.webp updated)
import allProductImg from '../assets/all product.webp';
import blushImg from '../assets/blush.jpg';
import eyeImg from '../assets/eye.jpg';
import foundationImg from '../assets/foundation.jpg';
import lipstickImg from '../assets/lipstick.webp';
import lipstickkImg from '../assets/lipstickk.webp';
import primerImg from '../assets/primer.webp'; // Bilkul sahi extension lag gaya
import serumImg from '../assets/serum.jpg';
import thodeproductImg from '../assets/thodeproduct.avif';

const dynamicInventory = [
  { id: 1, name: "Velvet Matte Rouge", price: "$36.00", category: "LIPS", img: lipstickImg },
  { id: 2, name: "Satin Silk Gloss", price: "$29.00", category: "LIPS", img: lipstickkImg },
  { id: 3, name: "Obsidian Shimmer Eye Palette", price: "$64.00", category: "EYES", img: eyeImg },
  { id: 4, name: "Celestial Glow Elixir Oil", price: "$78.00", category: "SKIN", img: serumImg },
  { id: 5, name: "Blush Cheek Tint Duo", price: "$42.00", category: "FACE", img: blushImg },
  { id: 6, name: "Luminous Liquid Silk Base", price: "$52.00", category: "FACE", img: foundationImg },
  { id: 7, name: "Ultra Blur Primer Mousse", price: "$48.00", category: "FACE", img: primerImg },
  { id: 8, name: "The Premium Skincare Kit", price: "$145.00", category: "KIT", img: thodeproductImg },
  { id: 9, name: "The Complete Atelier Set", price: "$195.00", category: "KIT", img: allProductImg }
];

const Collections = () => {
  return (
    <div style={{ backgroundColor: '#0a0809', color: '#ffffff', minHeight: '100vh', fontFamily: "sans-serif", padding: '140px 40px 80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '60px', borderBottom: '1px solid #1a1417', paddingBottom: '20px' }}>
          <p style={{ color: '#e5afb7', letterSpacing: '5px', fontSize: '0.8rem', marginBottom: '10px' }}>// RADICAL BEAUTY HUB</p>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '300', margin: 0 }}>The Collections</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px 30px' }}>
          {dynamicInventory.map(item => (
            <div key={item.id} style={{ cursor: 'pointer' }}>
              <div style={{ width: '100%', height: '380px', overflow: 'hidden', position: 'relative', border: '1px solid #1a1417', borderRadius: '4px', marginBottom: '20px', backgroundColor: '#110d0f' }}>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <button style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#ffffff', color: '#0a0809', border: 'none', padding: '12px 0', width: '90%', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '2px', fontSize: '0.8rem', borderRadius: '2px' }}>
                  QUICK ADD TO CART
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 4px' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '400', margin: 0, letterSpacing: '0.5px' }}>{item.name}</h3>
                  <p style={{ color: '#a3989a', fontSize: '0.8rem', marginTop: '5px' }}>{item.category}</p>
                </div>
                <span style={{ color: '#e5afb7', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collections;

import React from 'react';
import { Phone, MapPin, Clock, Award, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';

const Home = () => {
  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsApp = (number) => {
    const cleanNumber = number.replace(/\s/g, '');
    window.open(`https://wa.me/91${cleanNumber}`, '_blank');
  };

  const cementBrands = [
    'UltraTech Cement',
    'Ambuja Cement',
    'Chettinad Cement',
    'Maha Cement',
    'ACC Cement',
    'Sagar Cement',
    'MPL Cement',
    'Dalmia Cement'
  ];

  const productCategories = [
    'Hardware Materials',
    'Electric & Water Motors',
    'GI Fittings',
    'Profile Sheets',
    'MS Sheets & Pipes',
    'Polycarbonate Sheets',
    'Engineering Items',
    'Tarpaulins',
    'Water Pipes',
    'Hand Bore Pumps',
    'Tree Guards',
    'Bleaching Powder',
    'PVC Plumbing Items',
    'Tools & Safety Equipment',
    'Fencing Materials',
    'Weld Mesh',
    'Barbed Wire'
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Trusted Since 1995',
      description: 'Over 30 years of reliable service to builders and contractors across Telangana'
    },
    {
      icon: ShieldCheck,
      title: 'Authorized Dealer',
      description: 'Official dealer for top cement brands - genuine products guaranteed'
    },
    {
      icon: Truck,
      title: 'Wide Product Range',
      description: 'Complete construction materials and hardware solutions under one roof'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1599995903128-531fc7fb694b" 
            alt="Construction Excellence"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-logo-container" style={{ marginBottom: '24px' }}>
            <img 
              src="/logo.png" 
              alt="Jagadish Traders Logo"
              style={{ maxWidth: '200px', height: 'auto' }}
            />
          </div>
          <div className="hero-badge caption">Established 1995</div>
          <h1 className="hero-title">JAGADISH TRADERS</h1>
          <p className="body-large" style={{ maxWidth: '30ch', marginTop: '24px', marginBottom: '32px' }}>
            Trusted Cement Dealer & Construction Materials Supplier in Karimnagar
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button 
              className="btn-primary" 
              onClick={() => handleCall('9849059948')}
            >
              <Phone size={18} style={{ marginRight: '8px' }} />
              +91 98490 59948
            </Button>
            <Button 
              className="btn-primary" 
              onClick={() => handleCall('9398798984')}
            >
              <Phone size={18} style={{ marginRight: '8px' }} />
              +91 93987 98984
            </Button>
            <Button 
              className="btn-secondary" 
              onClick={() => handleWhatsApp('9398798984')}
            >
              WhatsApp: +91 93987 98984
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-content-single">
            <span className="caption">About Us</span>
            <h2 className="heading-2" style={{ marginTop: '16px', marginBottom: '24px' }}>
              BUILDING TRUST FOR OVER 30 YEARS
            </h2>
            <p className="body-medium" style={{ marginBottom: '20px' }}>
              Since 1995, Jagadish Traders has been the preferred choice for builders, contractors, and construction professionals across Karimnagar and Telangana. What started as a commitment to quality has grown into one of the region's most trusted construction materials suppliers.
            </p>
            <p className="body-small" style={{ marginBottom: '24px' }}>
              As authorized dealers for India's leading cement brands and suppliers of comprehensive construction materials, we take pride in delivering genuine products, competitive pricing, and reliable service. Our family-run business, led by Lion. K. Jagadishwar and Mr. Sai Srujan, continues the legacy of trust and excellence.
            </p>
            <div className="proprietor-info">
              <p className="body-small" style={{ fontWeight: 600 }}>
                Proprietors: Lion. K. Jagadishwar | Mr. Sai Srujan
              </p>
              <p className="body-small" style={{ marginTop: '8px' }}>
                📞 +91 98490 59948 | +91 93987 98984
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="caption">Why Choose Us</span>
            <h2 className="heading-2" style={{ marginTop: '16px' }}>
              YOUR RELIABLE PARTNER
            </h2>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-icon">
                  <item.icon size={32} strokeWidth={2} />
                </div>
                <h3 className="heading-5" style={{ marginTop: '20px', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p className="body-small">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Cement Brands */}
      <section className="cement-section section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="caption">Authorized Dealer</span>
            <h2 className="heading-2" style={{ marginTop: '16px', marginBottom: '16px' }}>
              PREMIUM CEMENT BRANDS
            </h2>
            <p className="body-medium">
              Official dealer for India's most trusted cement manufacturers
            </p>
          </div>
          <div className="cement-grid">
            {cementBrands.map((brand, index) => (
              <div key={index} className="cement-card">
                <div className="cement-card-inner">
                  <h3 className="heading-6">{brand}</h3>
                  <span className="caption" style={{ color: 'var(--text-secondary)', marginTop: '8px', display: 'block' }}>
                    Authorized Dealer
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="cement-showcase">
            <img 
              src="https://images.unsplash.com/photo-1763926025477-423847028860" 
              alt="Quality Construction Materials"
              className="cement-image"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="caption">Our Products</span>
            <h2 className="heading-2" style={{ marginTop: '16px', marginBottom: '16px' }}>
              COMPLETE CONSTRUCTION SOLUTIONS
            </h2>
            <p className="body-medium">
              Everything you need for your construction project
            </p>
          </div>
          <div className="products-showcase-grid">
            <div className="product-showcase-card">
              <img 
                src="https://images.unsplash.com/photo-1631856954913-c751a44490ec" 
                alt="Hardware Materials"
                className="product-showcase-image"
              />
              <div className="product-overlay">
                <h3 className="heading-5">Hardware & Tools</h3>
              </div>
            </div>
            <div className="product-showcase-card">
              <img 
                src="https://images.unsplash.com/photo-1763926025678-95d196d0ab28" 
                alt="Industrial Materials"
                className="product-showcase-image"
              />
              <div className="product-overlay">
                <h3 className="heading-5">Industrial Supplies</h3>
              </div>
            </div>
            <div className="product-showcase-card">
              <img 
                src="https://images.unsplash.com/photo-1759200165738-6366977a73c6" 
                alt="Plumbing & Fittings"
                className="product-showcase-image"
              />
              <div className="product-overlay">
                <h3 className="heading-5">Plumbing & Fittings</h3>
              </div>
            </div>
          </div>
          <div className="products-grid">
            {productCategories.map((product, index) => (
              <div key={index} className="product-item">
                <span className="product-bullet">•</span>
                <span className="body-small">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="caption">Get In Touch</span>
              <h2 className="heading-2" style={{ marginTop: '16px', marginBottom: '32px' }}>
                VISIT OR CALL US TODAY
              </h2>
              
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} className="contact-icon" />
                  <div>
                    <h4 className="heading-6" style={{ marginBottom: '8px' }}>Address</h4>
                    <p className="body-small">
                      Jagadish Traders<br />
                      Shop No 2, Prakasham Gunj Rd<br />
                      Ashoknagar, Karimnagar<br />
                      Telangana 505001, India
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone size={24} className="contact-icon" />
                  <div>
                    <h4 className="heading-6" style={{ marginBottom: '8px' }}>Phone Numbers</h4>
                    <p className="body-small" style={{ marginBottom: '4px' }}>
                      <a href="tel:9849059948" className="contact-link">+91 98490 59948</a>
                      <span style={{ color: 'var(--text-muted)', marginLeft: '8px' }}>(K. Jagadishwar)</span>
                    </p>
                    <p className="body-small">
                      <a href="tel:9398798984" className="contact-link">+91 93987 98984</a>
                      <span style={{ color: 'var(--text-muted)', marginLeft: '8px' }}>(Sai Srujan)</span>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <Clock size={24} className="contact-icon" />
                  <div>
                    <h4 className="heading-6" style={{ marginBottom: '8px' }}>Business Hours</h4>
                    <p className="body-small">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-buttons">
                <Button 
                  className="btn-primary" 
                  onClick={() => handleCall('9849059948')}
                >
                  <Phone size={18} style={{ marginRight: '8px' }} />
                  +91 98490 59948
                </Button>
                <Button 
                  className="btn-primary" 
                  onClick={() => handleCall('9398798984')}
                  style={{ background: 'var(--secondary-olive)', color: 'var(--text-primary)' }}
                >
                  <Phone size={18} style={{ marginRight: '8px' }} />
                  +91 93987 98984
                </Button>
                <Button 
                  className="btn-secondary" 
                  onClick={() => handleWhatsApp('9398798984')}
                >
                  WhatsApp: +91 93987 98984
                </Button>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="Jagadish Traders Location - Shop No 2, Prakasham Gunj Rd, Ashoknagar, Karimnagar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.834!2d79.1246!3d18.4385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334fc9a1c2e8e9%3A0x1234567890abcdef!2sPrakasham%20Gunj%20Rd%2C%20Ashoknagar%2C%20Karimnagar%2C%20Telangana%20505001!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Shop+No+2+Prakasham+Gunj+Rd+Ashoknagar+Karimnagar+Telangana+505001+India" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-small"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img 
                src="/logo.png" 
                alt="Jagadish Traders Logo"
                style={{ maxWidth: '120px', height: 'auto', marginBottom: '16px' }}
              />
              <h3 className="heading-4" style={{ marginBottom: '12px' }}>JAGADISH TRADERS</h3>
              <p className="body-small">
                Trusted Construction Materials Supplier Since 1995
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <a href="tel:9849059948" className="body-small contact-link">
                  +91 98490 59948
                </a>
                <span style={{ color: 'var(--text-muted)' }}>|</span>
                <a href="tel:9398798984" className="body-small contact-link">
                  +91 93987 98984
                </a>
              </div>
            </div>
            <div className="footer-links">
              <p className="body-small">
                Shop No 2, Prakasham Gunj Rd, Ashoknagar, Karimnagar – 505001, Telangana, India
              </p>
              <p className="body-small" style={{ marginTop: '12px' }}>
                <strong>Authorized Dealer for:</strong><br />
                UltraTech, Ambuja, ACC, Chettinad, Maha, Sagar, MPL, Dalmia Cement
              </p>
              <p className="body-small" style={{ marginTop: '12px', color: 'var(--text-muted)' }}>
                © 2025 Jagadish Traders. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import { AddressData } from 'data/AddressData';
import { SocialFooter } from 'components/SocialFooter/SocialFooter';
import { useState } from 'react';
import { styles } from './Footer.styled';

export const Footer = ({ blockMapOpen, setBlockMapOpen }) => {
  const [value, setValue] = useState('');
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleSubscribe = e => {
    setValue(e.currentTarget.value);
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsMapOpen(false);
      window.removeEventListener('keydown', handleKeyDown);
    }
  };

  console.log(blockMapOpen);

  const handleMapAction = e => {
    if (e.target.text === 'Kyiv, Lesia Ukrainka Ave, 26') {
      e.preventDefault();
      setIsMapOpen(!isMapOpen);
      window.addEventListener('keydown', handleKeyDown);
    }
    if (e.target.localName === 'div') {
      setIsMapOpen(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value !== '') {
      setValue('');
      console.log(value);
    }
  };

  return (
    <styles.FooterSection>
      <styles.FooterContainer>
        <div>
          <styles.AddressBox>
            <styles.LogoLink>
              <styles.LogoLinkBlack>Web</styles.LogoLinkBlack>Studio
            </styles.LogoLink>
            <address>
              <styles.AddressList>
                {AddressData.map(({ id, name, href }) => {
                  return (
                    <styles.AddressItem
                      onClick={handleMapAction}
                      href={href}
                      key={id}
                    >
                      {name}
                    </styles.AddressItem>
                  );
                })}
              </styles.AddressList>
            </address>
          </styles.AddressBox>
          <styles.SocialTitle>join us</styles.SocialTitle>
          <SocialFooter />
        </div>
        <div>
          <h3>Subscribe to newsletter</h3>
          <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleSubscribe} type="text" />
            <button>Subscribe</button>
          </form>
        </div>
        {isMapOpen && (
          <styles.MapBackdrop onClick={handleMapAction}>
            <styles.Map
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2536.4914251518585!2d30.590355799999998!3d50.525028999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1673171166414!5m2!1sru!2sua"
              // width="290"
              height="290"
              style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></styles.Map>
          </styles.MapBackdrop>
        )}
      </styles.FooterContainer>
    </styles.FooterSection>
  );
};

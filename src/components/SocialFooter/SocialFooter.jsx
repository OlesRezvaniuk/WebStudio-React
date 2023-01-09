import { SocialData } from 'data/SocialData';
import { styles } from './SocialFooter.styled';
import styled from '@emotion/styled';

export const SocialFooter = () => {
  return (
    <styles.SocialList>
      {SocialData.map(item => {
        const SocialIcon = styled(item.data)`
          * {
            color: inherit;
            fill: inherit;
          }
        `;
        return (
          <styles.SocialItem key={item.id}>
            <styles.Link
              id="socialLinkItem"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon />
            </styles.Link>
          </styles.SocialItem>
        );
      })}
    </styles.SocialList>
  );
};

import { SocialData } from 'data/SocialData';
import { styles } from './Social.styled';
import styled from '@emotion/styled';

export const Social = () => {
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
            <styles.Link id="socialLinkItem" href={item.href}>
              <SocialIcon />
            </styles.Link>
          </styles.SocialItem>
        );
      })}
    </styles.SocialList>
  );
};

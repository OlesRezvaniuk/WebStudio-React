/* eslint-disable jsx-a11y/anchor-has-content */
import styled from '@emotion/styled';
import { ClientsData } from 'data/ClientsData';
import { styles } from './Clients.styled';

export const Clients = () => {
  return (
    <styles.ClientsSection>
      <styles.ClientsTitle>Regular customers</styles.ClientsTitle>
      <styles.ClientsList>
        {ClientsData.map(item => {
          const ClientsIcon = styled(item.src)`
            color: inherit;
            fill: inherit;
            * {
              color: inherit;
              fill: inherit;
            }
          `;
          return (
            <styles.ClientsItem key={item.id}>
              <styles.ClientsLink
                href="https://github.com/OlesRezvaniuk"
                target="_blank"
                rel="noreferrer"
              >
                <ClientsIcon />
              </styles.ClientsLink>
            </styles.ClientsItem>
          );
        })}
      </styles.ClientsList>
    </styles.ClientsSection>
  );
};

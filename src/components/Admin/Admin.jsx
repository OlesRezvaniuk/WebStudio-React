import { styles } from './Admin.styled';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const { REACT_APP_ADMINNAME } = process.env;
const { REACT_APP_ADMINPASSWORD } = process.env;

export const Admin = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [authEnter, setAuthEnter] = useState(false);

  const handleAuthOpen = () => {
    setIsAuthOpen(!isAuthOpen);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };

  const handleAuthEnter = e => {
    e.preventDefault();
    if (name === REACT_APP_ADMINNAME && password === REACT_APP_ADMINPASSWORD) {
      setAuthEnter(true);
    }
  };

  const handleMessange = () => {
    if (name !== REACT_APP_ADMINNAME) {
      Notify.failure('wrong name');
    }
    if (password !== REACT_APP_ADMINPASSWORD) {
      Notify.failure('wrong password');
    }
    if (password === REACT_APP_ADMINPASSWORD && name === REACT_APP_ADMINNAME) {
      Notify.success('you logged in successfully');
    }
  };

  const handleAuthLeave = e => {
    e.preventDefault();
    setAuthEnter(false);
    setIsAuthOpen(false);
    Notify.info('you are logout');
  };

  return (
    <>
      {authEnter ? (
        <styles.AdminBtn type="button" onClick={handleAuthLeave}>
          logout
        </styles.AdminBtn>
      ) : (
        <styles.AdminBtn type="button" onClick={handleAuthOpen}>
          login
        </styles.AdminBtn>
      )}

      {isAuthOpen && !authEnter && (
        <div>
          <form onSubmit={handleAuthEnter}>
            <input
              type="text"
              name="name"
              id="adminName"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={handleNameChange}
              value={name}
            />
            <input
              type="text"
              name="password"
              id="adminPassword"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              onChange={handlePasswordChange}
              value={password}
            />
            <button onClick={handleMessange}>Enter</button>
          </form>
        </div>
      )}
      {authEnter && <strong style={{ color: 'red' }}>Hi, Admin</strong>}
    </>
  );
};

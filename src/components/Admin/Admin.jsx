import { styles } from './Admin.styled';
import { useState } from 'react';

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
    // if (name === ADMIN_NAME && password === ADMIN_PASSWORD) {
    //   setAuthEnter(true);
    // }
  };

  const handleAuthLeave = e => {
    e.preventDefault();
    setAuthEnter(false);
    setIsAuthOpen(false);
  };

  return (
    <>
      {authEnter ? (
        <styles.AdminBtn type="button" onClick={handleAuthLeave}>
          logout
        </styles.AdminBtn>
      ) : (
        <styles.AdminBtn type="button" onClick={handleAuthOpen}>
          login {process.env.REACT_APP_ADMINNAME}
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
            <button>Enter</button>
          </form>
        </div>
      )}
      {authEnter && <strong style={{ color: 'red' }}>Hi, Admin</strong>}
    </>
  );
};

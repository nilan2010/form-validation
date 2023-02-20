import  { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email ){
        setErrorMsg('Please fill Email.');
    } else if (!isValidEmail(email)){
        setErrorMsg('Email is invalid');
    } else if( !password ){
        setErrorMsg('Please fill Password.');
    } else if(!isChecked) {
      setErrorMsg('Please Confirm');
    } else {
      setFormData({ email, password });
      setEmail('');
      setPassword('');
      setIsChecked(false);
      setErrorMsg('');
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="checkbox">Confirm</label>
          <input
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
        </div>
      )}

    </div>
  );
}

export default Form;
import React,{useState} from 'react';
import './LogIn.scss';

interface FormInputs{
    email:string;
    password:string;
}

export const LogIn:React.FC=() =>{
    const [values, setValues] = useState<FormInputs>({
      email: "",
      password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Implement your login logic here
      console.log('Form submitted:', values);
      // Reset form after submission
      setValues({ email: '', password: '' });
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  



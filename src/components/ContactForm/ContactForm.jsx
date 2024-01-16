import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="example">
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={css.label} htmlFor="example">
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.button} type="submit">
        Add contact{' '}
      </button>
    </form>
  );
};

export default ContactForm;

// import { Component } from 'react';
// import css from './ContactForm.module.css';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = ({ target: { value, name } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit({ name: this.state.name, number: this.state.number });

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ number: '', name: '' });
//   };

//   render() {
//     return (
//       <form className={css.contactForm} onSubmit={this.handleSubmit}>
//         <label className={css.label} htmlFor="example">
//           Name
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             required
//           />
//         </label>

//         <label className={css.label} htmlFor="example">
//           Number
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//             required
//           />
//         </label>

//         <button className={css.button} type="submit">
//           Add contact{' '}
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;

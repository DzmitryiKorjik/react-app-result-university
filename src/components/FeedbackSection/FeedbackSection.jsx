import Button from '../Button/Button';
import './FeedbackSection.css';
import { useState } from 'react';


export default function FeedbackSection() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('');

  return (
    <section>
      <h3 className="centered">Retour d'information</h3>
      <form>
        <label htmlFor="name">
          Votre nom:
          <input type="text" id="name" name="name" required className="control" value={name} onChange={(event) => setName(event.target.value)}/>
        </label>
        <label htmlFor="email">
          Votre adresse email:
          <input type="email" id="email" name="email" required className="control" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </label>
        <label htmlFor="message">
          Votre message:
          <textarea name="message" id="message" rows="4" cols="50" required className="control" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
        </label>
        <label htmlFor="reason">
          Votre raison d'appel:
          <select id="reason" name="reason" required className="control" value={reason} onChange={(event) => setReason(event.target.value)}>
            <option value="">Sélectionnez une raison</option>
            <option value="bug">Signaler un bug</option>
            <option value="feature">Proposer une nouvelle fonctionnalité</option>
            <option value="question">Poser une question</option>
            <option value="other">Autre</option>
          </select>
        </label>


        <Button>Envoyer</Button>
      </form>
    </section>
  );
}

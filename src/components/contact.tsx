import React, { useState } from 'react';
import '../styles/contact.css';

export default function Contato() {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (!content) {
      setError('Por favor, insira uma mensagem.');
      return;
    }

    setError('');
    setLoading(true);
    setSuccessMessage('');

    try {
      const response = await fetch('api/function-1', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2NjMwMTcwMzczMTI4OTMxNjI0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJqaGJwZGF5a29AbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiRThNQlpnd0hvRjlVbEFTYV9Zc01aQSIsIm5iZiI6MTczMjIyODExOSwiaWF0IjoxNzMyMjI4NDE5LCJleHAiOjE3MzIyMzIwMTksImp0aSI6ImQxYjViMjg3YmIzZTZkOGM3Y2E5MDljYTk5YzhhNzA3ZmFkM2ZmNmYifQ.N05QKBRsZMgcxOisOLU7v8QuvE6su_D0AlCxyCUBohfITAN_dzhzaY94Lgzl8TRgZLaTh8mcrNhuETUhx37MSUstx5Tqu0VD0jGvNItnQggKq4S8lIjtTi5AGVyynJjF2VMgRfJM94Cg5OXGz2dmcHGII2t6oXwSGPbzd-zJfHfMug0v0zoF7QDF0EtLFBB79qffqAg_Mp8FkfcMgV54uhMEybsn8Imjg6Z-NCtXV0EgxfiM7hMNZ3Poo6XwdfOQHhzisnFlOemouPYG9jKL3YIRo_wJaTiM61UFeo52jV5zv1_OqWcPT82z6HUA_QEUhsy2M-7MscF3c9LGQNzUcQ`,
        },
        body: JSON.stringify({ toMail: email, content }),
      });

      if (response.ok) {
        setSuccessMessage('E-mail enviado com sucesso!');
        setEmail('');
        setContent('');
      } else {
        const errorData = await response.json();
        setError(`Erro ao enviar e-mail: ${errorData.message || response.statusText}`);
      }
    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      setError('Erro ao enviar e-mail. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <section id='contact' className="contato-section">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="contato-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Digite sua mensagem"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </section>
  );
}
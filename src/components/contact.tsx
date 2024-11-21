import React, { useState } from 'react';
import '../styles/contact.css';

export default function Contato() {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  // const apiKey = process.env.REACT_APP_SENDGRID_API_KEY;

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
          'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2NjMwMTcwMzczMTI4OTMxNjI0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJqaGJwZGF5a29AbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWGJwVl9fR1FmdUlxaEozWkd1bGZ6ZyIsIm5iZiI6MTczMjE5MDA3OSwiaWF0IjoxNzMyMTkwMzc5LCJleHAiOjE3MzIxOTM5NzksImp0aSI6IjVmMmI2OGZiZjIwNDAxNjljYTYzYzdjZjc3MzZmYjg1N2QxNWY4ZmQifQ.oUv8l9NLtYUtgYr1c8uWnh2vaKVeIG-bTaLCf3mcpCvf-U2oad6orVdnCUnJthBUggdsh7m6CAo6b1yJybuvBbXfvH0KZBK5Nsgb6_NEPItg0gKhSs6Ysvu6fPenPy1BuydcDwj5DwXMQTkTT4VMes3SBgfQMkQ_sruhb90Lw31k175PXZ5zjpNkxiwjKWfl0z-h-hU_FmzPym95AO2QPF5hxp5nTk646FkiyZk3Pu6G9IZ2k1ahfvtXDhZbxpmn-4vemxL2A1kX4PbBjFRlpL9jyLOPL-28x9ArrmXe2sVCsJFuFpoFLkypBwBDqMxa_U3y3TIQ_tEmJ1HbOMc1LA`,
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
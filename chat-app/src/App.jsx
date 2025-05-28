import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Container, Form, Button, Card, ListGroup } from 'react-bootstrap';

const socket = io('http://localhost:3000'); // Connect to Express backend

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <Card>
        <Card.Header as="h5">Socket.IO Chat</Card.Header>
        <Card.Body>
          <ListGroup style={{ height: '300px', overflowY: 'auto', marginBottom: '15px' }}>
            {messages.map((msg, index) => (
              <ListGroup.Item key={index}>{msg}</ListGroup.Item>
            ))}
          </ListGroup>

          <Form onSubmit={handleSend}>
            <Form.Group className="d-flex">
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message"
              />
              <Button type="submit" className="ms-2">Send</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div id="rasa-chat-widget" data-websocket-url="https://your-rasa-url-here/"></div>
    <script src="https://unpkg.com/@rasahq/rasa-chat" type="application/javascript"></script>
    </div>
  );
}

export default App;

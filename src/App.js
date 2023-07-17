import './App.css'; // npm install redux@4.1.2 react-redux
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// 1. 왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처 리스트, 검색창이 있다.
// 2. 리스트에 유저이름과 전화번호를 추가할 수 있다.
// 3. 리스트에 아이템이 몇개 있는지 보인다.
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <Container>
      <Row>
        <h1 className="title">연락처 등록 앱</h1>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

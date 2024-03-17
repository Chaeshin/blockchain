import { useState } from "react";

const styles = {
  Screen: {
    backgroundColor: '#ffffff',
  },
  Header: {
    width: '100%',
    height: '55px',
    backgroundColor: '#ffffff',
    boxShadow: '2px -2px 10px rgba(3,3,3,0.1)',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  Icon: {
    color: '#030303',
    fill: '#030303',
    fontSize: '24px',
    top: '29px',
    left: '24px',
    width: '24px',
    height: '24px',
    marginLeft: '30px', 
    marginRight: '10px'
  },
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '24px',
  },
  MText: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '28px',
    marginTop: '15px',
    
  },
  Card: {
    width: '920px',
    height: 'auto',
    marginRight: '35px', 
    marginTop: '15px', 
    marginBottom: '30px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '2px',
    boxShadow: '2px 0px 10px rgba(3,3,3,0.1)',
  },
  PCard: {
    width: '300px',
    height: 'auto',
    paddingBottom: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '2px',
    boxShadow: '2px 0px 10px rgba(3,3,3,0.1)',
  },
  Footer: {
    width: '100%',
    height: '55px',
    display: 'flex',
    
    flexWrap: 'wrap',
    alignContent: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '2px -2px 10px rgba(3,3,3,0.1)',
  },
  FText: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: '19px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 512 512">
    <path d="M234.5 5.709C248.4 .7377 263.6 .7377 277.5 5.709L469.5 74.28C494.1 83.38 512 107.5 512 134.6V377.4C512 404.5 494.1 428.6 469.5 437.7L277.5 506.3C263.6 511.3 248.4 511.3 234.5 506.3L42.47 437.7C17 428.6 0 404.5 0 377.4V134.6C0 107.5 17 83.38 42.47 74.28L234.5 5.709zM256 65.98L82.34 128L256 190L429.7 128L256 65.98zM288 434.6L448 377.4V189.4L288 246.6V434.6z">
    </path>
  </svg>
);
const defaultProps = {
  IconComponent
};
const App = (props) => {
  const [topics, setTopics] = useState([
    { title: 'React', content: 'Can somebody explain me about react?', comments: 1216 },
    { title: 'HTML', content: 'What is HTML?', comments: 1023 },
    { title: 'CSS', content: 'Best practices in styling.', comments: 799 },
    { title: 'Javascript', content: 'JavaScript is the best', comments: 566 },
    { title: 'Axios', content: 'How to use axios?', comments: 200 },
    { title: 'Router', content: 'Best ways to route.', comments: 143 },
  ]);
  return (
    <div style={styles.Screen}>
      <div style={styles.Header}>
        {props.IconComponent
            ? <props.IconComponent style={styles.Icon} /> 
            : <defaultProps.IconComponent />}
        <div style={styles.Text}>
            blockNote
        </div>
      </div>
      
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <div style={styles.MText}>
          Most Commented Topics
        </div>
        <div style={styles.Card}>
          {topics.map((topic, index) => (
            <div key={index} style={{ width: '100%', height: '85px', display: 'flex',  border: '1px solid #ddd', marginBottom: '2px' }}>
              <div style={{ width: '80%', paddingLeft: '20px' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', textAlign: 'left' }}>
                  <div style={{ height: '60%' }}><h2>{topic.title}</h2></div>
                  <div style={{ height: '40%' }}>{topic.content}</div>
                </div>
              </div>
              <div style={{ width: '20%', alignSelf: 'flex-end' }}><h4>{topic.comments} comments</h4></div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display: 'flex', flexDirection:'column', marginTop:'30px'}}>
        <div style={styles.PCard}>
            <div style={{marginTop:'5px', marginLeft:'40px'}}><h3 >Popular Topics</h3></div>
            {topics.map((topic, index) => (
              <div key={index} style={{marginBottom:'3px', marginLeft:'50px', }}> 
                <h5 style={{marginBottom:'3px', marginTop:'3px', }}>{topic.title}</h5>
              </div>
            ))}
        </div>
        <div style={styles.PCard}>
        </div>
      </div>
    </div>
    <div style={styles.Footer} >
      <div style={{width: '30%', display: 'flex', justifyContent:'space-around', flexWrap: 'wrap', marginLeft: '30px'}}>
        <div style={styles.FText}>Home</div>
        <div style={styles.FText}>About Us</div>
        <div style={styles.FText}>Contact</div>
        <div style={styles.FText}>Term & Condition</div>
      </div>
    </div>
  </div>
  );
};

export default App;

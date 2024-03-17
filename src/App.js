import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MostCommentedTopics from "./MostCommentedTopics";
import AddTopicTags from "./AddTopicTags";


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/topTopics" element={<MostCommentedTopics />} />
        <Route path="/addTags" element={<AddTopicTags />} />
      </Routes>
    </Router>
  );
};

export default App;

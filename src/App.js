import { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Categories from "./components/Categories";
import Config from "./components/Config";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import ReviewAnswers from "./components/ReviewAnswers";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [totalQues, setTotalQues] = useState(10);
  const [difficulty, setDifficulty] = useState("medium");
  const [resultMetrics, setResultMetrics] = useState(null);
  const [stats, setStats] = useState([]);

  return (
    <div className="App">
      <Route exact path="/">
        {<Redirect to="/category" />}
      </Route>
      <Route
        path="/category"
        render={() => (
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      />
      <Route
        path="/config"
        render={() => (
          <Config
            totalQues={totalQues}
            setTotalQues={setTotalQues}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        )}
      />
      <Route
        path="/question/:quesNum"
        render={(routeProps) => (
          <Quiz
            category={selectedCategory}
            amount={totalQues}
            difficulty={difficulty}
            setResultMetrics={setResultMetrics}
            setStats={setStats}
            quesNum={parseInt(routeProps.match.params.quesNum)}
            {...routeProps}
          />
        )}
      />
      <Route path="/results" render={() => <Results stats={stats} />}></Route>
      <Route
        path="/review-answers"
        render={() => <ReviewAnswers resultMetrics={resultMetrics} />}
      ></Route>
    </div>
  );
}

export default App;

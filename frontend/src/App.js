import { useState } from "react";
import './App.css';

function App() {
  const [textInput, setTextInput] = useState("");
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const predict = async (e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    setPrediction("");
    setError(null);

    if (!textInput.trim()) {
      setError("Please enter some text.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:6000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ news: textInput }),
      });

      if (!response.ok) {
        throw new Error("Error with the prediction request. Please try again.");
      }

      const data = await response.json();
      if (data.prediction) {
        setPrediction(data.prediction);
      } else {
        setError("Prediction could not be generated. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An error occurred while making the prediction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav>
        <h1>Fake News Detector</h1>
      </nav>

      <main>
        <div className="incident-card-main">
          <p>Recent Cases</p>
          <span>
            {[1, 2, 3, 4].map((_, index) => (
              <div className="incident-card" key={index}>
                <img
                  src="l3fsfrek_covid-vaccination-bloomberg_625x300_24_May_23.webp"
                  alt="incident"
                />
                <p>
                  A video falsely predicting a fourth wave of COVID-19 in January 2025 went viral
                  on social media. Fact-checking agencies confirmed that the video was from 2022
                  and was being shared out of context to spread panic.
                </p>
              </div>
            ))}
          </span>
        </div>

        <div className="check-news">
          <form onSubmit={predict}>
            <input
              type="text"
              name="news"
              placeholder="Enter news to check"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              required
            />
            <input type="submit" value={loading ? "Checking..." : "Check"} disabled={loading} />
          </form>
          {prediction && <p className="result">Prediction: <strong>{prediction}</strong></p>}
          {error && <p className="error">{error}</p>}
        </div>

        <div className="login-register">
          <input
            type="button"
            value="Login"
            onClick={() => (window.location.href = 'login.html')}
          />
          <input
            type="button"
            value="Sign up"
            onClick={() => (window.location.href = 'signup.html')}
          />
        </div>
      </main>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "../style.css";
export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("2-3Y");
  const total = quantity * 1290;
  return (
    <main className="demo">
      <header className="top">
        <a className="brand" href="../" target="_top">
          <b>n.</b>Framework lab
        </a>
        <a className="back" href="../" target="_top">
          All frameworks ↗
        </a>
      </header>
      <div className="section">
        <span className="pill">React • UI library</span>
        <h1>Same shop. Different code.</h1>
        <p>
          Build interfaces from reusable components. State updates trigger React
          to render the next UI.
        </p>
      </div>
      <div className="demo-grid">
        <section className="product">
          <div className="art">
            <span>THE NESAVU / DEMO PRODUCT</span>
            <svg
              viewBox="0 0 180 170"
              role="img"
              aria-label="Illustration of a green kurta"
            >
              <path
                d="M62 20 37 32 13 78 38 91 52 66 47 153 134 153 129 66 143 91 169 78 143 32 119 20Z"
                fill="#507e68"
              />
              <path d="M63 20Q90 52 119 20L105 13H77Z" fill="#e8d8ba" />
              <path d="M90 35V91" stroke="#e8d8ba" strokeWidth="5" />
              <circle cx="91" cy="50" r="2" fill="#8f7042" />
              <circle cx="91" cy="65" r="2" fill="#8f7042" />
              <circle cx="91" cy="80" r="2" fill="#8f7042" />
              <path
                d="M49 143H133M26 78L42 86M139 86L155 78"
                stroke="#d9c69d"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className="product-body">
            <h2>Everyday festive kurta</h2>
            <div className="price">
              ₹1,290 <span className="small">/ piece</span>
            </div>
            <p className="small">
              An illustrative product for learning. No checkout or real order.
            </p>
            <div className="controls">
              <label>
                Choose size
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  <option value="2-3Y">2-3 years</option>
                  <option value="4-5Y">4-5 years</option>
                  <option value="6-7Y">6-7 years</option>
                </select>
              </label>
              <div>
                <p className="small">Quantity (1-10)</p>
                <div className="stepper">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    disabled={quantity === 1}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <strong data-testid="quantity">{quantity}</strong>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    disabled={quantity === 10}
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <p className="small">
              Selected size: <strong data-testid="size">{size}</strong>
            </p>
            <div className="total" aria-live="polite">
              <span>Demo total</span>
              <strong data-testid="total">
                ₹{total.toLocaleString("en-IN")}
              </strong>
            </div>
            <button
              type="button"
              className="reset"
              onClick={() => {
                setQuantity(1);
                setSize("2-3Y");
              }}
            >
              Reset demo
            </button>
          </div>
        </section>
        <aside className="lesson">
          <span className="tag">Inside this example</span>
          <h2>Watch state become UI.</h2>
          <p>
            Change the quantity or size. The displayed total and selection
            update without reloading the page.
          </p>
          <pre>
            <code>
              const [quantity, setQuantity] = useState(1); const total =
              quantity * 1290; setQuantity(q =&gt; q + 1);
            </code>
          </pre>
          <ol>
            <li>Change quantity and watch the total.</li>
            <li>Select a size and check the summary.</li>
            <li>Reset to restore the initial state.</li>
            <li>
              Edit the product title in the source and commit to redeploy.
            </li>
          </ol>
          <p>
            <strong>State model:</strong> useState
          </p>
          <p className="small">
            Source: <code>apps/react/src/App.jsx</code>
          </p>
          <a href="../source/react.txt">Read this component</a> ·{" "}
          <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
            Official docs ↗
          </a>
        </aside>
      </div>
      <footer>
        Learning sandbox • State resets when this page reloads. Each framework
        runs independently.
      </footer>
    </main>
  );
}

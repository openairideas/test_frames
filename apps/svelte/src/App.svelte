<script>
  let quantity = $state(1);
  let size = $state("2-3Y");
  let total = $derived(quantity * 1290);
</script>

<main class="demo">
  <header class="top">
    <a class="brand" href="../" target="_top"><b>n.</b>Framework lab</a><a
      class="back"
      href="../" target="_top">All frameworks ↗</a
    >
  </header>
  <div class="section">
    <span class="pill">Svelte • Compiler-based framework</span>
    <h1>Same shop. Different code.</h1>
    <p>
      Write components that are compiled into JavaScript. Runes declare reactive
      state and derived values.
    </p>
  </div>
  <div class="demo-grid">
    <section class="product">
      <div class="art">
        <span>THE NESAVU / DEMO PRODUCT</span><svg
          viewBox="0 0 180 170"
          role="img"
          aria-label="Illustration of a green kurta"
          ><path
            d="M62 20 37 32 13 78 38 91 52 66 47 153 134 153 129 66 143 91 169 78 143 32 119 20Z"
            fill="#507e68"
          /><path d="M63 20Q90 52 119 20L105 13H77Z" fill="#e8d8ba" /><path
            d="M90 35V91"
            stroke="#e8d8ba"
            stroke-width="5"
          /><circle cx="91" cy="50" r="2" fill="#8f7042" /><circle
            cx="91"
            cy="65"
            r="2"
            fill="#8f7042"
          /><circle cx="91" cy="80" r="2" fill="#8f7042" /><path
            d="M49 143H133M26 78L42 86M139 86L155 78"
            stroke="#d9c69d"
            stroke-width="4"
          /></svg
        >
      </div>
      <div class="product-body">
        <h2>Everyday festive kurta</h2>
        <div class="price">₹1,290 <span class="small">/ piece</span></div>
        <p class="small">
          An illustrative product for learning. No checkout or real order.
        </p>
        <div class="controls">
          <label
            >Choose size<select bind:value={size}
              ><option value="2-3Y">2-3 years</option><option value="4-5Y"
                >4-5 years</option
              ><option value="6-7Y">6-7 years</option></select
            ></label
          >
          <div>
            <p class="small">Quantity (1-10)</p>
            <div class="stepper">
              <button
                type="button"
                aria-label="Decrease quantity"
                disabled={quantity === 1}
                onclick={() => (quantity = Math.max(1, quantity - 1))}>−</button
              ><strong data-testid="quantity">{quantity}</strong><button
                type="button"
                aria-label="Increase quantity"
                disabled={quantity === 10}
                onclick={() => (quantity = Math.min(10, quantity + 1))}
                >+</button
              >
            </div>
          </div>
        </div>
        <p class="small">
          Selected size: <strong data-testid="size">{size}</strong>
        </p>
        <div class="total" aria-live="polite">
          <span>Demo total</span><strong data-testid="total"
            >₹{total.toLocaleString("en-IN")}</strong
          >
        </div>
        <button
          type="button"
          class="reset"
          onclick={() => {
            quantity = 1;
            size = "2-3Y";
          }}>Reset demo</button
        >
      </div>
    </section>
    <aside class="lesson">
      <span class="tag">Inside this example</span>
      <h2>Watch state become UI.</h2>
      <p>
        Change the quantity or size. The displayed total and selection update
        without reloading the page.
      </p>
      <pre><code
          >let quantity = $state(1);
let total = $derived(quantity * 1290);
quantity++;</code
        ></pre>
      <ol>
        <li>Change quantity and watch the total.</li>
        <li>Select a size and check the summary.</li>
        <li>Reset to restore the initial state.</li>
        <li>Edit the product title in the source and commit to redeploy.</li>
      </ol>
      <p><strong>State model:</strong> $state + $derived</p>
      <p class="small">Source: <code>apps/svelte/src/App.svelte</code></p>
      <a href="../source/svelte.txt">Read this component</a> ·
      <a
        href="https://svelte.dev/docs/svelte/overview"
        target="_blank"
        rel="noreferrer">Official docs ↗</a
      >
    </aside>
  </div>
  <footer>
    Learning sandbox • State resets when this page reloads. Each framework runs
    independently.
  </footer>
</main>

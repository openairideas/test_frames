<script setup>
import { ref, computed } from "vue";
const quantity = ref(1);
const size = ref("2-3Y");
const total = computed(() => quantity.value * 1290);
function reset() {
  quantity.value = 1;
  size.value = "2-3Y";
}
</script>
<template>
  <main class="demo">
    <header class="top">
      <a class="brand" href="../" target="_top"><b>n.</b>Framework lab</a
      ><a class="back" href="../" target="_top">All frameworks ↗</a>
    </header>
    <div class="section">
      <span class="pill">Vue • Progressive framework</span>
      <h1>Same shop. Different code.</h1>
      <p>
        Keep template, logic and styles in a single component, with reactive
        values driving the UI.
      </p>
    </div>
    <div class="demo-grid">
      <section class="product">
        <div class="art">
          <span>THE NESAVU / DEMO PRODUCT</span
          ><svg
            viewBox="0 0 180 170"
            role="img"
            aria-label="Illustration of a green kurta"
          >
            <path
              d="M62 20 37 32 13 78 38 91 52 66 47 153 134 153 129 66 143 91 169 78 143 32 119 20Z"
              fill="#507e68"
            />
            <path d="M63 20Q90 52 119 20L105 13H77Z" fill="#e8d8ba" />
            <path d="M90 35V91" stroke="#e8d8ba" stroke-width="5" />
            <circle cx="91" cy="50" r="2" fill="#8f7042" />
            <circle cx="91" cy="65" r="2" fill="#8f7042" />
            <circle cx="91" cy="80" r="2" fill="#8f7042" />
            <path
              d="M49 143H133M26 78L42 86M139 86L155 78"
              stroke="#d9c69d"
              stroke-width="4"
            />
          </svg>
        </div>
        <div class="product-body">
          <h2>Everyday festive kurta</h2>
          <div class="price">₹1,290 <span class="small">/ piece</span></div>
          <p class="small">
            An illustrative product for learning. No checkout or real order.
          </p>
          <div class="controls">
            <label
              >Choose size<select v-model="size">
                <option value="2-3Y">2-3 years</option>
                <option value="4-5Y">4-5 years</option>
                <option value="6-7Y">6-7 years</option>
              </select></label
            >
            <div>
              <p class="small">Quantity (1-10)</p>
              <div class="stepper">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  :disabled="quantity === 1"
                  @click="quantity = Math.max(1, quantity - 1)"
                >
                  −</button
                ><strong data-testid="quantity">{{ quantity }}</strong
                ><button
                  type="button"
                  aria-label="Increase quantity"
                  :disabled="quantity === 10"
                  @click="quantity = Math.min(10, quantity + 1)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <p class="small">
            Selected size: <strong data-testid="size">{{ size }}</strong>
          </p>
          <div class="total" aria-live="polite">
            <span>Demo total</span
            ><strong data-testid="total"
              >₹{{ total.toLocaleString("en-IN") }}</strong
            >
          </div>
          <button type="button" class="reset" @click="reset">Reset demo</button>
        </div>
      </section>
      <aside class="lesson">
        <span class="tag">Inside this example</span>
        <h2>Watch state become UI.</h2>
        <p>
          Change the quantity or size. The displayed total and selection update
          without reloading the page.
        </p>
        <pre><code>const quantity = ref(1);
const total = computed(() =&gt; quantity.value * 1290);
quantity.value++;</code></pre>
        <ol>
          <li>Change quantity and watch the total.</li>
          <li>Select a size and check the summary.</li>
          <li>Reset to restore the initial state.</li>
          <li>Edit the product title in the source and commit to redeploy.</li>
        </ol>
        <p><strong>State model:</strong> ref + computed</p>
        <p class="small">Source: <code>apps/vue/src/App.vue</code></p>
        <a href="../source/vue.txt">Read this component</a> ·
        <a
          href="https://vuejs.org/guide/introduction.html"
          target="_blank"
          rel="noreferrer"
          >Official docs ↗</a
        >
      </aside>
    </div>
    <footer>
      Learning sandbox • State resets when this page reloads. Each framework
      runs independently.
    </footer>
  </main>
</template>

import { Component, signal, computed } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.html",
})
class AppComponent {
  quantity = signal(1);
  size = signal("2-3Y");
  total = computed(() => this.quantity() * 1290);
  decrease() {
    this.quantity.update((q) => Math.max(1, q - 1));
  }
  increase() {
    this.quantity.update((q) => Math.min(10, q + 1));
  }
  reset() {
    this.quantity.set(1);
    this.size.set("2-3Y");
  }
}
bootstrapApplication(AppComponent).catch((error) => console.error(error));

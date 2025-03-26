# thwo93/shake

```markdown
# Shake

A lightweight utility for detecting and responding to device shake events in mobile and web applications.

## Overview

Shake is a simple yet powerful library that allows developers to easily integrate shake detection into their projects. It's designed to work across multiple platforms with minimal setup.

## Features

- 📱 Cross-platform support (iOS, Android, Web)
- ⚡ Lightweight and performant
- 🔧 Customizable sensitivity threshold
- 📊 Optional callback for shake intensity
- � Built-in debouncing to prevent multiple triggers

## Installation

### For Node.js projects

```bash
npm install @thwo93/shake
```

### For web projects

Add to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/@thwo93/shake@latest/dist/shake.min.js"></script>
```

## Usage

### Basic Implementation

```javascript
import Shake from '@thwo93/shake';

const shakeDetector = new Shake({
  threshold: 15, // sensitivity threshold (default: 10)
  timeout: 1000  // debounce timeout in ms (default: 800)
});

shakeDetector.start();

document.addEventListener('shake', () => {
  console.log('Device was shaken!');
  // Your shake handler code here
});
```

### Advanced Usage

```javascript
const advancedShake = new Shake({
  onShake: (intensity) => {
    console.log(`Shake detected with intensity: ${intensity}`);
    if (intensity > 20) {
      alert('Hard shake detected!');
    }
  }
});

// Start listening
advancedShake.start();

// Later, when you want to stop
advancedShake.stop();
```

## API Reference

### `new Shake(options)`
Creates a new shake detector instance.

**Options:**
- `threshold` (Number): Minimum acceleration required (default: 10)
- `timeout` (Number): Minimum time between events in ms (default: 800)
- `onShake` (Function): Optional callback when shake occurs

### Methods
- `.start()`: Begins listening for shake events
- `.stop()`: Stops listening for shake events

### Events
- `shake`: Dispatched when shake is detected (contains `intensity` in detail)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT © [thwo93](https://github.com/thwo93)
```
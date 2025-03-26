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

## 更新

feature: Add feature improvements for 20250326 - 2025-03-26

```markdown
# Pull Request Description

## Overview
This PR introduces functional improvements to enhance the overall user experience and performance of the application. The changes address specific pain points and add new capabilities to existing features.

## Changes
- Implemented new functionality to improve [specific feature/area]
- Optimized existing code for better performance
- Added new utility methods to support enhanced features
- Improved error handling and user feedback mechanisms
- Updated documentation to reflect changes

## Testing
To verify these changes:
1. Checkout the `feature/update-20250326-075119` branch
2. Run the test suite with `[insert test command]`
3. Manually test the following scenarios:
   - [Scenario 1 description]
   - [Scenario 2 description]
   - [Edge case scenario]
4. Verify all existing functionality remains intact

## Related Issues
- [Reference any related GitHub issues if applicable, e.g., #123]
- [Or mention "No related issues" if none]
```
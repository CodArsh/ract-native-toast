# 📦 @arsil_malek/react-native-toast

A customizable, animated, and modern toast notification component for React Native.  
Designed for simplicity, beauty, and flexibility.

![Toast Demo](https://github.com/CodArsh/react-native-toast/blob/master/assets/FINAL.gif)

---

## 🚀 Features

- ✅ Success, Error, Info, Warning, Announcement toast types  
- 🎨 Soft / Hard (filled) variants  
- 🧲 Top / Bottom positioning  
- 🖌️ Customizable text, colors, icons  
- ✨ Smooth entrance and exit animations  
- 🔧 Lightweight, no dependencies  
- 🧼 Auto-dismiss or manual close  
- 👆 Click to dismiss

---

## 📦 Installation

```bash
npm install @arsil_malek/react-native-toast
# OR
yarn add @arsil_malek/react-native-toast
```

## ⚙️ Usage


```
1. Add ToastContainer in your root App component (App.tsx)

import React from 'react';
import { ToastContainer } from '@arsil_malek/react-native-toast';

export default function App() {
  return (
    <>
      {/* your app content */}
      <ToastContainer />
    </>
  );
}



2. Trigger Toast anywhere in your app

import { Toast } from '@arsil_malek/react-native-toast';

Toast.show({
  message1: 'Success!',
  message2: 'Your action was completed.',
  type: 'success',
  position: 'top',
  variant: 'hard',
  duration: 3000,
});

```

---

## ✏️ Props

| Prop         | Type       | Default     | Description                                                                 |
|--------------|------------|-------------|-----------------------------------------------------------------------------|
| `message1`   | `string`   | —           | Main toast message (bold text)                                              |
| `message2`   | `string`   | —           | Optional sub-message                                                        |
| `type`       | `string`   | `'info'`    | `'success'` \| `'error'` \| `'warning'` \| `'info'` \| `'announcement'`     |
| `position`   | `string`   | `'top'`     | `'top'` or `'bottom'`                                                       |
| `variant`    | `string`   | `'normal'`  | `'normal'` (soft look) or `'hard'` (filled background)                      |
| `duration`   | `number`   | `3000`      | Toast visibility duration in milliseconds                                   |
| `textColor`  | `string`   | Auto        | Custom text color (overrides type-based color)                              |
| `onClose`    | `function` | —           | Callback when toast closes                                                  |


---

## 🤝 Contribution
Pull requests are welcome. Feel free to open issues or suggest features.

## 📄 License 
MIT ©2025 Arsil Malek

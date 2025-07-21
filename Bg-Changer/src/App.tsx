import { useState } from 'react';
import { COLORS } from './constant/Colors';
import Button from './components/Button';
import './App.css';

function App() {
  const [color, setColor] = useState('white')

  return (
    <div className="w-full h-screen transition-colors duration-200" style={{ backgroundColor: color }}>
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-3 justify-center p-4 bg-slate-600 rounded-full max-w-xs sm:max-w-md">
        {COLORS.map((color) => (
          <Button
            key={color.value}
            colorName={color.name}
            colorValue={color.value}
            onClick={setColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
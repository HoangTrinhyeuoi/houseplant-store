import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Link } from 'react-router-dom';

export default defineConfig({
  plugins: [react()],
  base: '/houseplant-store/',
  build: {
    outDir: 'dist'
  }
})

// Trong các component có navigation
// Đúng:
<Link to="/">Home</Link>
<Link to="/cart">Cart</Link>

// Không cần thêm /houseplant-store/ vào Link paths

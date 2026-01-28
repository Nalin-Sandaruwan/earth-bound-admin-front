
try {
  const path = require.resolve('tailwindcss');
  console.log('Resolved tailwindcss to:', path);
} catch (err) {
  console.error('Failed to resolve tailwindcss:', err.message);
}

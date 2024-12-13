```javascript
// potential solutions (depending on the actual root cause)
// 1. Ensuring correct class order and specificity
<div class="bg-gray-100 p-4 relative z-10">
  <h1 class="text-3xl font-bold">My Component</h1>
</div>

// 2. Removing conflicting CSS or adding !important (use cautiously)
<div class="bg-gray-100 p-4 !important">
  <h1 class="text-3xl font-bold !important">My Component</h1>
</div>

// 3. Re-purging Tailwind (refer to Tailwind documentation)
// 4.  Check for CSS conflicts using your browser's developer tools
```
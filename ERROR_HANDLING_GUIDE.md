# Error Handling & Empty States Guide

This guide explains how to use the error handling and empty state components in your travel agency app.

## 📁 Available Components

### 1. **404 Not Found Page** (`app/[locale]/not-found.tsx`)
Automatically shown when a route doesn't exist.

**Features:**
- Animated 404 text with floating elements
- Rotating compass animation
- Quick links to popular pages
- Automatic locale support

**Test it:** Visit any non-existent route like `/en/invalid-page`

---

### 2. **Error Boundary** (`app/[locale]/error.tsx`)
Catches errors within the locale route segment.

**Features:**
- Animated error icon
- Try again functionality
- Development mode error details
- Contact support link

**Test it:** Throw an error in any component

---

### 3. **Global Error** (`app/global-error.tsx`)
Catches critical errors at the root level.

**Features:**
- Minimal inline styles (works even if CSS fails)
- Simple refresh functionality
- Critical error handling

---

### 4. **Loading State** (`app/[locale]/loading.tsx`)
Shown during page transitions and data loading.

**Features:**
- Animated plane icon
- Progress bar animation
- Loading dots

**Test it:** Add `await new Promise(resolve => setTimeout(resolve, 3000))` to any page

---

### 5. **Empty State Component** (`components/empty-state.tsx`)
Reusable component for empty data scenarios.

**Usage:**
```tsx
import EmptyState from '@/components/empty-state';
import { MapPin } from 'lucide-react';

<EmptyState
  icon={MapPin}
  title="No Destinations Found"
  description="Try adjusting your filters"
  action={{
    label: "View All",
    onClick: () => router.push('/destinations')
  }}
/>
```

---

### 6. **Empty Destinations** (`components/empty-destinations.tsx`)
Pre-configured empty state for destinations.

**Usage:**
```tsx
import EmptyDestinations from '@/components/empty-destinations';

{destinations.length === 0 && <EmptyDestinations />}
```

---

### 7. **Empty Search** (`components/empty-search.tsx`)
Pre-configured empty state for search results.

**Usage:**
```tsx
import EmptySearch from '@/components/empty-search';

{searchResults.length === 0 && (
  <EmptySearch 
    searchQuery={query} 
    onClear={() => setQuery('')} 
  />
)}
```

---

### 8. **Error Boundary Component** (`components/error-boundary.tsx`)
Wrap sections that might fail independently.

**Usage:**
```tsx
import { ErrorBoundary } from '@/components/error-boundary';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

**With custom fallback:**
```tsx
<ErrorBoundary fallback={<CustomErrorUI />}>
  <YourComponent />
</ErrorBoundary>
```

---

### 9. **Network Error** (`components/network-error.tsx`)
Show when API calls fail.

**Usage:**
```tsx
import NetworkError from '@/components/network-error';

{networkError && (
  <NetworkError 
    onRetry={() => refetch()}
    message="Custom error message"
  />
)}
```

---

## 🎨 Design Features

All error and empty states include:
- ✅ Smooth Framer Motion animations
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Gradient backgrounds matching your brand
- ✅ Consistent styling with the rest of the app
- ✅ Accessibility features

---

## 🧪 Testing Error States

### Test 404 Page:
```
Visit: http://localhost:3000/en/this-page-does-not-exist
```

### Test Error Boundary:
Add this to any component:
```tsx
if (someCondition) {
  throw new Error('Test error');
}
```

### Test Loading State:
Add delay to any page:
```tsx
export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return <div>Content</div>;
}
```

### Test Empty States:
```tsx
const destinations = []; // Empty array
{destinations.length === 0 && <EmptyDestinations />}
```

---

## 📝 Best Practices

1. **Use ErrorBoundary for sections** that might fail independently
2. **Use EmptyState** for any list/grid that can be empty
3. **Always provide retry actions** in error states
4. **Show helpful messages** that guide users to next steps
5. **Log errors** to monitoring services in production

---

## 🔧 Customization

All components accept standard props and can be customized:

```tsx
// Custom empty state
<EmptyState
  icon={YourIcon}
  title="Custom Title"
  description="Custom description"
  action={{
    label: "Custom Action",
    onClick: customHandler
  }}
>
  <CustomContent />
</EmptyState>
```

---

## 🚀 Production Considerations

1. **Error Logging**: Integrate with services like Sentry
2. **Analytics**: Track error occurrences
3. **User Feedback**: Add feedback forms in error states
4. **Graceful Degradation**: Ensure app remains usable
5. **Clear Messages**: Avoid technical jargon in production

---

## 📱 Mobile Optimization

All error states are fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

---

## 🎯 Next Steps

1. Test all error states in development
2. Add error logging service integration
3. Customize messages for your brand voice
4. Add analytics tracking
5. Create additional empty states as needed

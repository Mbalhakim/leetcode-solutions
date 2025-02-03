export default function Footer() {
    return (
      <footer className="w-full p-4 bg-background border-t border-gray-200 dark:border-gray-800 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} LeetCode Solutions. All rights reserved.</p>
      </footer>
    );
  }
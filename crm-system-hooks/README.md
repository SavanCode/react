use React & reducer & React Hooks

注意对比 这个以及前面的crm-system（没有hooks）

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

1.change title 
useDocumentTitle("***"); 

function useDocumentTitle(title) {
  useEffect(
    () => {
      document.title = title;
      return () => (document.title = "***");
    },
    [title]
  );
}
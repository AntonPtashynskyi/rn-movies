import { useRoute } from "./src/components/Router";

export default function App() {
  const routing = useRoute();

  return <>{routing}</>;
}

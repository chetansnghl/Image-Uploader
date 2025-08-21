import { ImageUploader } from "./ImageUploader";

function App() {
  return <ImageUploader
  accept={["image/png", "image/jpeg"]}
  maxFileSize={8 * 1024 * 1024}
  maxFiles={5}
  onChange={(files) => console.log(files)}
/>;
}

export default App;

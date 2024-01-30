import { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PassLen from "./components/PassLen";

function App() {
  const [passLength, setLength] = useState(8);
  const [numAllowed, setNum] = useState(false);
  const [upperAllowed, setUpper] = useState(false);
  const [lowerAllowed, setLower] = useState(false);
  const [specialAllowed, setSpecial] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    if (upperAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerAllowed) str += "abcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (specialAllowed) str += "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
    // for (let i = 1; i <= length; i++) {
    //   let char = Math.floor(Math.random() * str.length + 1);
    //   pass += str.charAt(char);
    // }
    for (let i = 1; i <= passLength; i++) {
      const characterIndex = Math.round(Math.random() * str.length);
      pass = pass + str.charAt(characterIndex);
    }
    setPassword(pass);
  }, [passLength, , upperAllowed, lowerAllowed, specialAllowed, setPassword]);

  const copyToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  },[password])

  const formGroups = [
    {
      label: "Add Uppercase Letters",
      checked: upperAllowed,
      onChange: (e) => setUpper(e.target.checked),
      type: "checkbox",
      id: "uppercase-letters",
      name: "uppercase-letters",
    },
    {
      label: "Add Lowercase Letters",
      checked: lowerAllowed,
      onChange: (e) => setLower(e.target.checked),
      type: "checkbox",
      id: "lowercase-letters",
      name: "lowercase-letters",
    },
    {
      label: "Include Numbers",
      checked: numAllowed,
      onChange: (e) => setNum(e.target.checked),
      type: "checkbox",
      id: "include-numbers",
      name: "include-numbers",
    },
    {
      label: "Include Symbols",
      checked: specialAllowed,
      onChange: (e) => setSpecial(e.target.checked),
      type: "checkbox",
      id: "include-symbols",
      name: "include-symbols",
    },
  ];
  return (
    <>
      <div className="generator-container">
        <Header password={password} copyToClipboard={copyToClipboard}/>
        <PassLen passLength={passLength} setLength={setLength} />
        {formGroups.map((group, index) => {
          return (
            <Form
              key={index}
              label={group.label}
              checked={group.checked}
              type={group.type}
              id={group.id}
              name={group.name}
              onchange={group.onChange}
            />
          );
        })}
        <button className="generator-btn" onClick={passwordGenerator}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;

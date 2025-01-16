import { useState } from "react";
export default function useInput(defaultValur = '') {
    const [value, setValue] = useState(defaultValur);

    return {
        value,
        onChange: (event) => setValue(event.target.value),
    }
}
crt React, { useState, useEffect} from 'react';
function Props() {
    const [count, setCount] = useState(0);
    useEffect (() => {
//document.title = 'You click ${count} times';
console.log("button clicked")
});
return (
<div>
<p>You clicked (count) times</p>
<button onclick={() => setCount(count + 1)}>
Click me
</button>
</div>
);
}
export default Props
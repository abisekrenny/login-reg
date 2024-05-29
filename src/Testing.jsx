// import React, { useEffect } from "react";
// import { useState } from "react";

// export const Testing = () => {
//   const [name, setName] = useState("");
//   const [isChanged, setIsChanged] = useState(false);

//   useEffect(() => {
//     setName("Sarvesh");
//   }, []);

//   const changeName = () => {
//     if (isChanged) {
//       setName("Sarvesh");
//       setIsChanged(false);
//     } else {
//       setName("Abishek");
//       setIsChanged(true);
//     }
//   };

//   return (
//     <div>
//       <p>{name}</p>
//       {/* {isChanged && <p style={{ color: "green" }}>Hurray! its changed</p>} */}
//       <button onClick={changeName}>change name</button>
//     </div>
//   );
// };

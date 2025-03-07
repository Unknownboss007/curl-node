import React, { memo } from "react";

import { Handle } from "react-flow-renderer";


export default memo(({ data, isConnectable }) => {
  return (
    <div className="bg-purple-600 w-62 h-40 pt-2 rounded text-white">
      <div style={{ display: "block" }}>
        <Handle
          type="target"
          position="left"
          style={{
            background: "white",
            width: 10,
            height: 10,

            borderRadius: "5px 0px 5px 5px",
            transform: "rotate(45deg)",
            top: 15,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="flow-in"
        />
        <Handle
          type="source"
          position="right"
          style={{
            background: "white",
            width: 10,
            height: 10,

            borderRadius: "5px 5px 5px 0px",
            transform: "rotate(45deg)",
            top: 15,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="flow-out"
        />
        <div className="text-center">Is Null</div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="h-5">
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 0px 5px 5px",
                transform: "rotate(45deg)",
                top: 40,
              }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
              id="a"
            />
            <span className="m-0 p-0 ml-4 text-sm">isnull </span>
          </div>
          <div className="h-5">
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 0px 5px 5px",
                transform: "rotate(45deg)",
                top: 60,
              }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
              id="a"
            />
            <span className="m-0 p-0 ml-4 text-sm">isna </span>
          </div>
          <div className="h-5">
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 0px 5px 5px",
                transform: "rotate(45deg)",
                top: 80,
              }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
              id="b"
            />
            <span className="ml-4 text-sm">isna.any </span>
          </div>
          <div className="h-5">
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 0px 5px 5px",
                transform: "rotate(45deg)",
                top: 100,
              }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
              id="c"
            />
            <span className="ml-4 text-sm">isna.sum</span>
          </div>
          <div className="h-5">
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 0px 5px 5px",
                transform: "rotate(45deg)",
                top: 120,
              }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
              id="d"
            />
            <span className="ml-4 text-sm">isna.any.sum </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="h-5 ">
            <Handle
              type="source"
              position="right"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 5px 5px 0px",
                transform: "rotate(45deg)",
                top: 78,
              }}
              isConnectable={isConnectable}
              id="out"
            />
            <span className="mr-4 ml-3 text-sm">output </span>
          </div>
        </div>
      </div>
    </div>
  );
});








// import React, { memo } from "react";

// import { Handle } from "react-flow-renderer";


// export default memo(({ data, isConnectable }) => {
//   return (
//     <div className="bg-purple-600 w-62 h-40 pt-2 rounded text-white" >
//       <div style={{ display: "block" }}>
//         <Handle
//           type="target"
//           position="left"
//           style={{
//             background: "white",
//             width: 10,
//             height: 10,

//             borderRadius: "5px 0px 5px 5px",
//             transform: "rotate(45deg)",
//             top: 15,
//           }}
//           onConnect={(params) => console.log("handle onConnect", params)}
//           isConnectable={isConnectable}
//           id="flow-in"
//         />
//         <Handle
//           type="source"
//           position="right"
//           style={{
//             background: "white",
//             width: 10,
//             height: 10,

//             borderRadius: "5px 5px 5px 0px",
//             transform: "rotate(45deg)",
//             top: 15,
//           }}
//           onConnect={(params) => console.log("handle onConnect", params)}
//           isConnectable={isConnectable}
//           id="flow-out"
//         />
//         <div className="text-center" >IsNull</div>
//       </div>

//       <div style={{ display: "flex" }}>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <div className="h-5">
//             <Handle
//               type="target"
//               position="left"
//               style={{
//                 background: "transparent",
//                 width: 10,
//                 height: 10,

//                 borderRadius: "5px 0px 5px 5px",
//                 transform: "rotate(45deg)",
//                 top: 40,
//               }}
//               onConnect={(params) => console.log("handle onConnect", params)}
//               isConnectable={isConnectable}
//               id="a"
//             />
//             <span className="m-0 p-0 ml-4 text-sm" style={{top: 40}}> isna() </span>
//           </div>
//           <div className="h-5">
//             <Handle
//               type="target"
//               position="left"
//               style={{
//                 background: "transparent",
//                 width: 10,
//                 height: 10,

//                 borderRadius: "5px 0px 5px 5px",
//                 transform: "rotate(45deg)",
//                 top: 65,
//               }}
//               onConnect={(params) => console.log("handle onConnect", params)}
//               isConnectable={isConnectable}
//               id="a"
//             />
//             <span className="m-0 p-0 ml-4 text-sm" style={{top: 72}}>isna().any() </span>
//           </div>
//           <div className="h-5">
//             <Handle
//               type="target"
//               position="left"
//               style={{
//                 background: "transparent",
//                 width: 10,
//                 height: 10,

//                 borderRadius: "5px 0px 5px 5px",
//                 transform: "rotate(45deg)",
//                 top: 90,
//               }}
//               onConnect={(params) => console.log("handle onConnect", params)}
//               isConnectable={isConnectable}
//               id="b"
//             />
//             <span className="ml-4 text-sm" style={{top: 90}}> isna().sum()  </span>
//           </div>
//           <div className="h-5">
//             <Handle
//               type="target"
//               position="left"
//               style={{
//                 background: "transparent",
//                 width: 10,
//                 height: 10,

//                 borderRadius: "5px 0px 5px 5px",
//                 transform: "rotate(45deg)",
//                 top: 115,
//               }}
//               onConnect={(params) => console.log("handle onConnect", params)}
//               isConnectable={isConnectable}
//               id="c"
//             />
//             <span className="ml-4 mb-3 text-sm" style={{top: 115}}>isna().any().sum() </span>
//           </div>
          
//         </div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div className="h-5 ">
//             <Handle
//               type="source"
//               position="right"
//               style={{
//                 background: "transparent",
//                 width: 10,
//                 height: 10,

//                 borderRadius: "5px 5px 5px 0px",
//                 transform: "rotate(45deg)",
//                 top: 78,
//               }}
//               isConnectable={isConnectable}
//               id="out"
//             />
//             <span className="mr-4 ml-3 text-sm">Output </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });


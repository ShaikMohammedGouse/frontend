import React, { useEffect, useState } from 'react';


const ConsoleLogViewer = ({ image }) => {
  const [logs, setLogs] = useState([]);
  
 
  useEffect(() => {
    const originalConsoleLog = console.log;

    console.log = (...args) => {
      originalConsoleLog(...args); // Preserve the original console.log behavior
      setLogs((prevLogs) => [...prevLogs, ...args]); // Store the log messages in the state
    };

    return () => {
      console.log = originalConsoleLog; // Restore the original console.log behavior when the component is unmounted
    };
  }, []);
 
  return (
    <div>
    <center><img src={image}></img></center>
    {logs.map((log,index1)=>(
      <center> <h4><b key={index1}>{log.substring(1,52)}</b></h4></center>
         ))}
         {logs.map((log,index2)=>(
       <h5><b key={index2}>Crop:{log.substring(53,64)}</b></h5>
         ))}
         {logs.map((log,index3)=>(
       <h5 key={index3}><b>Disease:</b><b>{log.substring(65,86)}</b></h5>
         ))}
         {logs.map((log,index4)=>(
       <p key={index4}><b>Cause of disease:</b><br/>{log.substring(87,862).split('#')}</p>
         ))}
         {logs.map((log,index5)=>(
       <b key={index5}>{log.substring(863,896)}:</b>
          ))}
          {logs.map((log,index6)=>(
       <p key={index6}>{(log.substring(897,2455)).split("#")}</p>
          ))}
            {logs.map((log,index7)=>(
       <b key={index7}>{log.substring(2456,2518)}</b>
           ))}
           {logs.map((log,index)=>(
       <p key={index}>{(log.substring(2520)).split("#")}<br/></p>
           ))}
           </div>
  );
};

export default ConsoleLogViewer;

/*
     {logs.map((log,index)=>(
  <center> <h4><b key={index}>{log.substring(1,52)}</b></h4></center>
     ))}
     {logs.map((log,index)=>(
   <h5><b key={index}>Crop:{log.substring(53,64)}</b></h5>
     ))}
     {logs.map((log,index)=>(
   <h5 key={index}><b>Disease:</b><b>{log.substring(65,86)}</b></h5>
     ))}
     {logs.map((log,index)=>(
   <p key={index}><b>Cause of disease:</b><br/>{log.substring(87,862).split('#')}</p>
     ))}
     {logs.map((log,index)=>(
   <b key={index}>{log.substring(863,896)}:</b>
      ))}
      {logs.map((log,index)=>(
   <p key={index}>{(log.substring(897,2455)).split("#")}</p>
      ))}
        {logs.map((log,index)=>(
   <b key={index}>{log.substring(2456,2518)}</b>
       ))}
     {logs.map((log,index)=>(
  <center> <h4><b key={index}>{log.substring(1,52)}</b></h4></center>
     ))}
     {logs.map((log,index)=>(
   <h5><b key={index}>Crop:{log.substring(53,64)}</b></h5>
     ))}
     {logs.map((log,index)=>(
   <h5 key={index}><b>Disease:</b><b>{log.substring(65,86)}</b></h5>
     ))}
     {logs.map((log,index)=>(
   <p key={index}><b>Cause of disease:</b><br/>{log.substring(87,862).split('#')}</p>
     ))}
     {logs.map((log,index)=>(
   <b key={index}>{log.substring(863,896)}:</b>
      ))}
      {logs.map((log,index)=>(
   <p key={index}>{(log.substring(897,2455)).split("#")}</p>
      ))}
        {logs.map((log,index)=>(
   <b key={index}>{log.substring(2456,2518)}</b>
       ))}
       {logs.map((log,index)=>(
   <p key={index}>{(log.substring(2520)).split("#")}<br/></p>
       ))}
  </div>
   
       {logs.map((log,index)=>(
   <p key={index}>{(log.substring(2520)).split("#")}<br/></p>
       ))}
  </div>
   */

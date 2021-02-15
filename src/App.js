import './Mycss.css';

function App()
{
   const allowstate  = 
   [
     {Mycar:"BMW",Owner:"A"},
     {Mycar: "TESLA",Owner:"B"},
     {Mycar: "HONDACITY",Owner:"C"},
   ];
return(
  <div>
<h1>select Tag (Dropdown)</h1>
<select>
  {allowstate.map((i,index)=>(
    <option key={i.id}>{i.Mycar}</option>
  ))}
</select>
<h1>ol Tag (orderlist)</h1>
<ol>
  {allowstate.map((i,index)=>(
    <li key={i.id}>{i.Mycar}</li>
  ))}
</ol>
<h1>ul Tag (unorderlist)</h1>
<ul>
  {allowstate.map((i,index)=>(
    <li key={i.id}>{i.Mycar}</li>
  ))}
</ul>
<h1>Table</h1>
<table className="My_table">
      <tr>
        <td>Sr.No</td>
        <td>Name</td>
        <td>Owner Name</td>
      </tr>
      {allowstate.map((i,index) =>(
        <tr>
          <td key={i.id}>{index+1}</td>
          <td key={i.id}>{i.Mycar}</td>
          <td key={i.id}>{i.Owner}</td>
        </tr>
      ))}
</table>
 </div>
);
}


export default App;

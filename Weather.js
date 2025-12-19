window.onload=function(){
  const temp= document.getElementById("temp");
  const box=document.getElementById("box");
  function getValues(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=8d6a626980344671965110015253011&q=Bamenda`)
      .then(res => res.json())
      .then(data => {
        document.getElementById("temp").textContent += data.current.temp_c +"C⁰";
        document.getElementById("hum").textContent+=data.current.humidity + "%";
        document.getElementById("uv").textContent+= data.current.uv;
        document.getElementById("RR").textContent+=data.current.precip_mm +"mm";
        document.getElementById("AQ").textContent+=data.current.vis_km + "km";
        document.getElementById("AP").textContent+=data.current.pressure_mb;
        
         })
  .catch(err => console.log(err));
  };
  getValues();
  box.style.fontWeight = "bold";
  document.body.style.fontFamily = 'Times New Roman';
};